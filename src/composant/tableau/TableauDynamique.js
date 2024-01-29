import React, { useState, useEffect } from 'react';
import liste from '../../data/liste';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const TableauDynamique = ({ tableName }) => {
  const [formulaire, setFormulaire] = useState(null);
  const [userData, setUserData] = useState(null);
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    // Recherche du formulaire correspondant au formulaireName
    const foundFormulaire = liste.find((form) => form.tableauId === tableName);

    if (foundFormulaire) {
      setFormulaire(foundFormulaire);
    }
  }, [tableName]);

  useEffect(() => {
    const fetchData = async () => {
      if (formulaire) {
        try {
          const response = await fetch(formulaire.lien, {
            method: 'GET',
          });

          if (response.ok) {
            const result = await response.json();
            setUserData(result);
            console.log('Réponse du service web:', result);
          } else {
            console.error('Erreur lors de la requête HTTP:', response.statusText);
          }
        } catch (error) {
          console.error('Erreur lors de la requête HTTP:', error);
        }
      }
    };

    fetchData();
  }, [formulaire, reloadKey]);

  const handleDelete = async (id) => {
    console.log(id);
    try {
      const response = await fetch(id, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log('Commission supprimée avec succès');
        // Mettez à jour la clé de rechargement pour déclencher le rechargement du composant
        setReloadKey((prevKey) => prevKey + 1);
      } else {
        console.error('Erreur lors de la suppression de la commission:', response.statusText);
      }
    } catch (error) {
      console.error('Erreur lors de la suppression de la commission:', error);
    }
  };

  if (!formulaire) {
    return <div>Formulaire non trouvé</div>;
  }

  const listInput = formulaire.listColonne;

  return (
    <div id="right-panel" class="right-panel">
      <div class="content">
        <div class="animated fadeIn">
          <div className="col-lg-10">
            <div className="card">
              <div className="card-header">
                <strong className="card-title">{formulaire.tableuTitle}</strong>
              </div>
              <div className="card-body">
                <div id="pay-invoice">
                  <div className="card-body">
                    <div className="card-title">
                      <h3 className="text-center">{formulaire.tableuTitle}</h3>
                    </div>
                    <hr />
                    {userData != null && (
                      <table id="bootstrap-data-table" class="table table-striped table-bordered">
                        <thead>
                          <tr>
                            {listInput.map((input, index) => (
                              <th key={index}>{input.name}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {userData.map((user, rowIndex) => (
                            <tr key={rowIndex}>
                              {listInput.map((input, colIndex) => (
                                <td key={colIndex}>{user[input.value]}</td>
                              ))}
                              <td>
                                <FontAwesomeIcon icon={faTrash} onClick={() => handleDelete(formulaire.lien + '/' + user[formulaire.nomColonneId])} />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableauDynamique;

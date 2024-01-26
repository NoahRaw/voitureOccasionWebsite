import React, { useState, useEffect } from 'react';
import liste from '../../data/liste';

const TableauDynamique = ({ tableName }) => {
  const [formulaire, setFormulaire] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Recherche du formulaire correspondant au formulaireName
    const foundFormulaire = liste.find((form) => form.tableauId === tableName);

    if (foundFormulaire) {
      setFormulaire(foundFormulaire);
    }
  }, [tableName]);

  useEffect(() => {
    const fetchData = async () => {
        try {
        const response = await fetch(formulaire.lien, {
            method: 'GET'
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
    fetchData();
  }, [formulaire.lien]
  )

  if (!formulaire) {
    return <div>Formulaire non trouvé</div>;
  }

  const listInput = formulaire.listColonne;
  

  return (
    <div className="col-lg-7" style={{marginLeft: 450, marginTop: 100}}>
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
                       <hr/>
                       <table id="bootstrap-data-table" class="table table-striped table-bordered">
                            <thead>
                            <tr>
                            {listInput.map((input, index) => (
                             <div  className="form-group">
                                    <th key={index}>{input.name}</th>
                             </div>
                            ))}
                            </tr>
                            </thead>
                            <tbody>
                                  {userData.map((user) => (
                                    <tr>
                                        {listInput.map((input, index) => (
                                      <td key={index}>{user[input.value]}</td>
                                        ))}
                                    </tr>
                                  ))}
                                </tbody>
                        </table>
                   </div>
               </div>

           </div>
       </div> 
    </div>
  );
};

export default TableauDynamique;

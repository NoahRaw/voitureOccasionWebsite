import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const ListeCommission = () => {
  const [commissions, setCommissions] = useState([]);
  const [selectedCommission, setSelectedCommission] = useState(null);
  const [commissionData, setCommissionData] = useState({
    date: '',
    pourcentage: '',
  });

  useEffect(() => {
    const fetchCommissions = async () => {
      try {
        const response = await fetch('https://voitureoccasion-production.up.railway.appCommission');
        if (response.ok) {
          const data = await response.json();
          setCommissions(data);
        } else {
          console.error('Erreur lors de la récupération des commissions:', response.statusText);
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des commissions:', error);
      }
    };

    fetchCommissions();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
  };

  const handleEdit = (commission) => {
    setSelectedCommission(commission);
    setCommissionData({
    id_comission   : commission.id_comission,
      date: commission.date,
      pourcentage: commission.pourcentage,
    });
  };

  const handleUpdate = async () => {
    try {
      const response = await fetch(`https://voitureoccasion-production.up.railway.appCommission/${selectedCommission.id_comission}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(commissionData),
      });

      if (response.ok) {
        console.log('Commission mise à jour avec succès');
        setCommissions(commissions.map((commission) => {
          if (commission.id_comission === selectedCommission.id_comission) {
            return { ...commission, ...commissionData };
          }
          return commission;
        }));
        setSelectedCommission(null);
      } else {
        console.error('Erreur lors de la mise à jour de la commission:', response.statusText);
      }
    } catch (error) {
      console.error('Erreur lors de la mise à jour de la commission:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://voitureoccasion-production.up.railway.appCommission/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log('Commission supprimée avec succès');
        setCommissions(commissions.filter((commission) => commission.id_comission !== id));
      } else {
        console.error('Erreur lors de la suppression de la commission:', response.statusText);
      }
    } catch (error) {
      console.error('Erreur lors de la suppression de la commission:', error);
    }
  };

  return (
    <div id="right-panel" class="right-panel">
      <div class="content">
        <div class="animated fadeIn">
          <div className="col-lg-10">
            <div className="card">
              <div className="card-header">
                <strong className="card-title">Commission</strong>
              </div>
              <div className="card-body">
                <div id="pay-invoice">
                  <div className="card-body">
                    <div className="card-title">
                      <h3 className="text-center">Listes des commissions</h3>
                    </div>
                    <hr />
                    <table id="bootstrap-data-table" className="table table-striped table-bordered">
                      <thead>
                        <tr>
                          <th>Date</th>
                          <th>Pourcentage</th>
                          <th>Modifier</th>
                          <th>Supprimer</th>
                        </tr>
                      </thead>
                      <tbody>
                        {commissions.map((commission) => (
                          <tr key={commission.id_comission}>
                            <td>{formatDate(commission.date)}</td>
                            <td>{commission.pourcentage}</td>
                            <td>
                              <FontAwesomeIcon icon={faEdit} onClick={() => handleEdit(commission)} />
                            </td>
                            <td>
                              <FontAwesomeIcon icon={faTrash} onClick={() => handleDelete(commission.id_comission)} />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            {selectedCommission && (
              <div className="card mt-4">
                <div className="card-header">
                  <strong className="card-title">Modifier la Commission</strong>
                </div>
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="date">Date</label>
                    <input
                      type="date"
                      id="date"
                      className="form-control"
                      // value={commissionData.date}
                      onChange={(e) => setCommissionData({ ...commissionData, date: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="pourcentage">Pourcentage</label>
                    <input
                      type="number"
                      id="pourcentage"
                      className="form-control"
                      value={commissionData.pourcentage}
                      onChange={(e) => setCommissionData({ ...commissionData, pourcentage: e.target.value })}
                    />
                  </div>
                  <button type="button" className="btn btn-primary" onClick={handleUpdate}>Mettre à jour</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListeCommission;

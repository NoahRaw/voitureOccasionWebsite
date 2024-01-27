import React, { useState, useEffect } from 'react';
//import DatePicker from 'react-datepicker';
//import 'react-datepicker/dist/react-datepicker.css';

import StatistiqueVente from '../tableau/StatistiqueVente.js';

const FormulaireStatVente = ({ onFormSubmit }) => {

const [userData, setUserData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://voitureoccasion-production.up.railway.app/Statistique/utilisateur');
  
        if (response.ok) {
          const data = await response.json();
          setUserData(data); // Mettez à jour l'état avec les données récupérées
        } else {
          console.error('Erreur lors de la requête HTTP:', response.statusText);
        }
      } catch (error) {
        console.error('Erreur lors de la requête HTTP:', error);
      }
    };
  
    fetchData();
  }, []);
  

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [date, setDate] = useState({ dateDebut: '2025-01-09', dateFin: '2025-01-09' });
  const [key, setKey] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation des données ici si nécessaire

    // Envoi des données au composant parent
    const formattedStartDate = formatDate(startDate);
    const formattedEndDate = formatDate(endDate);

    setDate({
      dateDebut: formattedStartDate,
      dateFin: formattedEndDate,
    });
    setFormSubmitted(true); // Mettez à jour l'état pour indiquer que le formulaire a été soumis
    setKey(key + 1); // Changez la clé pour forcer la mise à jour du composant StatistiqueRevenue
  };

  const formatDate = (inputDate) => {
    // inputDate a le format "YYYY-MM-DD"
    const [year, month, day] = inputDate.split('-');
    // Formate la date en "DD-MM-YYYY"
    return `${year}-${month}-${day}`;
  };

  return (
    <div className="col-lg-7" style={{marginLeft: 450, marginTop: 100}}>
      <div className="card">
          <div className="card-header">
              <strong className="card-title">Formulaire de statistique</strong>
          </div>
          <div className="card-body">
              <div id="pay-invoice">
                  <div className="card-body">
                      <div className="card-title">
                        {userData !== null ? (
                          <h4 className="text-center">Utilisateur inscrit : {userData}</h4>
                        ) : (
                        <p>Utilisateur inscrit...</p>
                        )}
                      </div>
                      <div className="card-title">
                          <h3 className="text-center">Statistique commission des ventes</h3>
                      </div>
                      <hr/>
                      <form onSubmit={handleSubmit}>
                          <div className="form-group">
                              <label for="cc-payment" className="control-label mb-1">Date de Début:</label>
                              <input id="cc-payment" type="date"  value={startDate}  onChange={(e) => setStartDate(e.target.value)} className="form-control" required/>
                          </div>
                          <div className="form-group">
                              <label for="cc-payment" className="control-label mb-1">Date Fin:</label>
                              <input id="cc-payment" type="date"  value={endDate}  onChange={(e) => setEndDate(e.target.value)} className="form-control" required/>
                          </div>
                          <div>
                              <button id="payment-button" type="submit" className="btn btn-lg btn-info btn-block">
                                  <span id="payment-button-amount">Valider</span>
                              </button>
                          </div>
                      </form>
                      {/* Affichez le composant tableau si le formulaire a été soumis */}
                      {formSubmitted && <StatistiqueVente key={key} date={date} />}
                  </div>
              </div>

          </div>
      </div> 
    </div>
  );
};

export default FormulaireStatVente;

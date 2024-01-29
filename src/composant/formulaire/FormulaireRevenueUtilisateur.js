import React, { useState } from 'react';
import StatistiqueRevenue from '../tableau/StatistiqueRevenue.js';

const DateRangeForm = ({ onFormSubmit }) => {
  const [startDate, setStartDate] = useState('2025-01-06');
  const [endDate, setEndDate] = useState('2025-01-10');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [date, setDate] = useState({ dateDebut: '2025-01-06', dateFin: '2025-01-10' });
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
    <div id="right-panel" class="right-panel">
      <div class="content">
        <div class="animated fadeIn">
            <div className="col-lg-10">
              <div className="card">
                  <div className="card-header">
                      <strong className="card-title">Formulaire de statistique</strong>
                  </div>
                  <div className="card-body">
                      <div id="pay-invoice">
                          <div className="card-body">
                              <div className="card-title">
                                  <h3 className="text-center">Statistique utilisateur qui ont fournis plus de revenus</h3>
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
                              {formSubmitted && <StatistiqueRevenue key={key} date={date} />}
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

export default DateRangeForm;

import React, { useState } from 'react';
import StatistiqueVoitureDefinie from '../tableau/StatistiqueVoitureDefinie.js';

const DateRangeForm = ({ onFormSubmit }) => {
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
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Date de Début:</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div>
          <label>Date de Fin:</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <button type="submit">Envoyer</button>
      </form>

      {/* Affichez le composant tableau si le formulaire a été soumis */}
      {formSubmitted && <StatistiqueVoitureDefinie key={key} date={date} />}
    </div>
  );
};

export default DateRangeForm;

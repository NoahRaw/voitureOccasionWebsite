import React, { useState } from 'react';
import Formulaire from './composant/Formulaire.js';
import AllAnnonce from './composant/annonce/AllAnnonce.js';
import donnees from './data/donnees.js';

const App = () => {
  const [selectedDate, setSelectedDate] = useState({
    dateDebut: '2023-03-19',
    dateFin: '2025-01-06',
  });

  return (
    <div>
      <h1>Your App Title</h1>
      <AllAnnonce/>
    </div>
  );
};

export default App;
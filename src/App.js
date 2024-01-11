import React, { useState } from 'react';
import Formulaire from './composant/Formulaire.js';
import VoitureDefini_insertion from './composant/VoitureDefini_insertion.js';
import donnees from './data/donnees.js';

export default function name(params) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [formulaireName, setFormulaireName] = useState('puissance');
  return (
    // <div>
    //   <Formulaire formulaire={donnees} />
    // </div>

    <div>
    {donnees.map((form, index) => (
      form.formulaireId === formulaireName && (
        <Formulaire formulaire={form} />
      )
    ))}
    
    <VoitureDefini_insertion />
    </div>
  );
}
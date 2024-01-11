import React, { useState } from 'react';
import Formulaire from './composant/Formulaire.js';
import donnees from './data/donnees.js';

export default function name(params) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [formulaireName, setFormulaireName] = useState('be');
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
    </div>
  );
}
import React, { useState } from 'react';
import Formulaire from './composant/Formulaire.js';
import FormulaireRevenueUtilisateur from './composant/formulaire/FormulaireRevenueUtilisateur.js';
import MyChart from './composant/chart/MyChart.js';
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

    <FormulaireRevenueUtilisateur/>
    {/* <MyChart /> */}
    </div>
  );
}
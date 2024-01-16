import React, { useState } from 'react';
import Formulaire from './composant/Formulaire.js';
//import FormulaireCompliqueExemple from './composant/FormulaireCompliqueExemple.js';
//import FormPhotoDeVehicule from './composant/PhotoDeVehicule_insert.js';
import donnees from './data/donnees.js';
import FormulaireRevenueUtilisateur from './composant/formulaire/FormulaireRevenueUtilisateur.js';
import FormulaireStatVente from './composant/formulaire/FormulaireStatVente.js';


export default function name(params) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [formulaireName, setFormulaireName] = useState('be');

  return (
      

    <div>
    {donnees.map((form, index) => (
      form.formulaireId === formulaireName && (
        <Formulaire formulaire={form} />
      )
    ))}
    
  
    

    

    <FormulaireStatVente/> 

    </div>

  );
}
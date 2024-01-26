import React, { useState, useEffect } from 'react';
import donnees from '../data/donnees.js';

const App = ({ formulaireName }) => {
  const [formulaire, setFormulaire] = useState(null);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    // Recherche du formulaire correspondant au formulaireName
    const foundFormulaire = donnees.find((form) => form.formulaireId === formulaireName);

    if (foundFormulaire) {
      setFormulaire(foundFormulaire);
      setFormData(foundFormulaire.jsonValue);
    }
  }, [formulaireName]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(formulaire.lien, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Réponse du service web:', result);
      } else {
        console.error('Erreur lors de la requête HTTP:', response.statusText);
        console.log('Json:', JSON.stringify(formData));
      }
    } catch (error) {
      console.error('Erreur lors de la requête HTTP:', error);
      console.log('Json:', JSON.stringify(formData));
    }
  };

  if (!formulaire) {
    return <div>Formulaire non trouvé</div>;
  }

  const listInput = formulaire.listInput;

  return (
    <div className="col-lg-7" style={{marginLeft: 450, marginTop: 100}}>
       <div className="card">
           <div className="card-header">
               <strong className="card-title">{formulaire.formulaireTitle}</strong>
           </div>
           <div className="card-body">
               <div id="pay-invoice">
                   <div className="card-body">
                       <div className="card-title">
                           <h3 className="text-center">{formulaire.formulaireTitle}</h3>
                       </div>
                       <hr/>
                       <form onSubmit={handleSubmit}>
                            {listInput.map((input, index) => (
                             <div key={index} className="form-group">
                                 <label for="cc-payment" className="control-label mb-1">{input.name.charAt(0).toUpperCase() + input.name.slice(1)}</label>
                                 <input id="cc-payment" name={input.name} type={input.type}  value={formData[input.name] || ''} onChange={handleInputChange} className="form-control" required/>
                             </div>
                            ))}
                           <div>
                               <button id="payment-button" type="submit" className="btn btn-lg btn-info btn-block">
                                   <span id="payment-button-amount">Valider</span>
                               </button>
                           </div>
                       </form>
                   </div>
               </div>

           </div>
       </div> 
    </div>
  );
};

export default App;

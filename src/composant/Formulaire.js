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
    <div>
      <h1>{formulaire.formulaireTitle}</h1>
      <form onSubmit={handleSubmit}>
        {listInput.map((input, index) => (
          <div key={index}>
            <label>
              {input.name.charAt(0).toUpperCase() + input.name.slice(1)}:
              <input
                type={input.type}
                name={input.name}
                value={formData[input.name] || ''}
                onChange={handleInputChange}
              />
            </label>
          </div>
        ))}
        <br />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default App;

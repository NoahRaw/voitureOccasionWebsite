import React, { useState,useEffect } from 'react';

const App = ({formulaire}) => {
  const [formData, setFormData] = useState(
    formulaire.jsonValue
  );
  const [checkboxOptions, setCheckboxOptions] = useState([]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Gestion spéciale pour les cases à cocher
    const inputValue = type === 'checkbox' ? checked : value;

    setFormData({ ...formData, [name]: inputValue });
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

  useEffect(() => {
    // Exemple de chargement des options depuis un web service
    const fetchCheckboxOptions = async () => {
      try {
        const response = await fetch('http://localhost:52195/Boitedevitesse', {
          method: 'GET'
        });
    
        if (response.ok) {
          const options = await response.json();
          formulaire.data=options;
          setCheckboxOptions(options);
        } else {
          console.error('Erreur lors de la requête HTTP:', response.statusText);
        }
      } catch (error) {
        console.error('Erreur lors de la requête HTTP:', error);
      }
    }

    fetchCheckboxOptions();
  }, []);

  const listInput = formulaire.listInput;

  return (
    <div>
      <h1>Formulaire Boite de vitesse</h1>
      <form onSubmit={handleSubmit}>
        {listInput.map((input, index) => (
          <div key={index}>
            <label>
              {input.name.charAt(0).toUpperCase() + input.name.slice(1)}:
              {input.type === 'text' && (
                <input
                  type="text"
                  name={input.name}
                  value={formData[input.name]}
                  onChange={handleInputChange}
                />
              )}
              {input.type === 'checkbox' && (
              checkboxOptions.map((option, optionIndex) => (
                  <div key={optionIndex}>
                    <label>
                      <input
                        type="checkbox"
                        name={input.name}
                        checked={formData[input.name] && formData[input.name].includes(option.idboitedevitesse)}
                        onChange={handleInputChange}
                        value={option.idboitedevitesse}
                      />
                      {option.description}
                    </label>
                  </div>
                ))
              )}
              {input.type === 'select' && (
                <select
                  name={input.name}
                  value={formData[input.name]}
                  onChange={handleInputChange}
                >
                  <option value="">Sélectionnez une option</option>
                  {checkboxOptions.map((option, optionIndex) => (
                    <option key={optionIndex} value={option['idboitedevitesse']}>
                      {option['description']}
                    </option>
                  ))}

                </select>
              )}
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


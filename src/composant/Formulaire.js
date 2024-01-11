import React, { useState,useEffect } from 'react';

const App = ({formulaire}) => {
  // État initial de l'objet JSON
  const [myJson, setMyJson] = useState(formulaire);

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
          setCheckboxOptions(options);
          formulaire.data=options;
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

  const [data, setData] = useState([]);
  const webServiceUrls = ["http://localhost:52195/Puissance", "http://localhost:52195/Boitedevitesse"];

  useEffect(() => {
    const fetchDataFromWebService = async () => {
      try {
        // Utilisation de Promise.all pour effectuer des requêtes en parallèle
        const responses = await Promise.all(
          webServiceUrls.map(url => fetch(url))
        );

        // Vérification si toutes les réponses sont ok
        const dataFromWebServices = await Promise.all(
          responses.map(response => {
            if (response.ok) {
              return response.json();
            }
            // Gérer les erreurs si nécessaire
            return null;
          })
        );

        // Mise à jour de l'état avec les données récupérées
        setData(dataFromWebServices.filter(data => data !== null));
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
      }
    };

    fetchDataFromWebService();
  }, []); // La dépendance vide signifie que cette fonction s'exécute uniquement après le montage initial du composant

  let i=0;

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
              {data && data.length > 0 && input.type === 'checkbox' && (
              data[0].map((option, optionIndex) => (
                  <div key={optionIndex}>
                    <label>
                      <input
                        type="checkbox"
                        name={input.name}
                        // checked={formData[input.name] && formData[input.name].includes(option.idboitedevitesse)}
                        onChange={handleInputChange}
                        value={option[input.optionValue.mainValue]}
                      />
                      {option[input.optionValue.frontValue]}
                    </label>
                  </div>
                ))
              )}
              {data && data.length > 0 && input.type === 'select' && (
                <select
                  name={input.name}
                  value={formData[input.name]}
                  onChange={handleInputChange}
                >
                  <option value="">Sélectionnez une option</option>
                  {data[1].map((option, optionIndex) => (
                    <option key={optionIndex} value={option[input.optionValue.mainValue]}>
                      {option[input.optionValue.frontValue]}
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


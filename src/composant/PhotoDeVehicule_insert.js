import React, { useState, useEffect } from 'react';

const FormPhotoDeVehicule = () => {
  // États pour stocker les valeurs des champs du formulaire
  const [textInputValue, setTextInputValue] = useState('');
  const [selectValue, setSelectValue] = useState('');

  // État pour stocker les options du menu déroulant récupérées du web service
  const [dropdownOptions, setDropdownOptions] = useState([]);

  useEffect(() => {
    // Exemple de chargement des options depuis un web service
    const fetchDropdownOptions = async () => {
      try {
        const response = await fetch('https://voitureoccasion-production.up.railway.app/VoitureUtilisateurs');
        if (response.ok) {
          const options = await response.json();
          setDropdownOptions(options);
        } else {
          console.error('Erreur lors de la requête HTTP:', response.statusText);
        }
      } catch (error) {
        console.error('Erreur lors de la requête HTTP:', error);
      }
    };

    fetchDropdownOptions();
  }, []); // La dépendance vide signifie que cette fonction s'exécute uniquement après le montage initial du composant

  // Fonction pour gérer le changement de valeur du champ de texte
  const handleTextInputChange = (e) => {
    setTextInputValue(e.target.value);
  };

  // Fonction pour gérer le changement de valeur du menu déroulant
  const handleSelectChange = (e) => {
    setSelectValue(e.target.value);
  };

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();

    // Vous pouvez utiliser les valeurs stockées dans les états ici pour effectuer des actions ou envoyer des données au backend
    console.log('Text Input Value:', textInputValue);
    console.log('Select Value:', selectValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Text Input:
          <input type="text" value={textInputValue} onChange={handleTextInputChange} />
        </label>
      </div>
      <div>
        <label>
          Select:
          <select value={selectValue} onChange={handleSelectChange}>
            <option value="">Sélectionnez une option</option>
            {dropdownOptions.map((option) => (
              <option value={option.idvoitureutilisateur}>
                {option.matricule}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div>
        <button type="submit">Soumettre</button>
      </div>
    </form>
  );
};

export default FormPhotoDeVehicule;
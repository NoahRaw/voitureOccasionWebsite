import React, { useState, useEffect } from 'react';

const FormPhotoDeVehicule = () => {
  // États pour stocker les valeurs des champs du formulaire
  const [nomPhoto, setTextInputValue] = useState('');
  const [idVoitureUtilisateur, setSelectValue] = useState('');

  // État pour stocker les options du menu déroulant récupérées du web service
  const [dropdownOptions, setDropdownOptions] = useState([]);

  
  useEffect(() => {
    // Exemple de chargement des options depuis un web service
    const fetchDropdownOptions = async () => {
      try {
        const response = await fetch('http://localhost:52195/VoitureUtilisateurs');
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
////////////////////////////////////////////
  // Fonction pour gérer le changement de valeur du champ de texte
  const handleTextInputChange = (e) => {
    setTextInputValue(e.target.value);
  };

  // Fonction pour gérer le changement de valeur du menu déroulant
  const handleSelectChange = (e) => {
    setSelectValue(e.target.value);
  };


    // Fonction pour gérer la soumission du formulaire
    const handleSubmit = async (event) => {
    event.preventDefault();
  
      // Vous pouvez maintenant effectuer votre appel à votre service Spring Boot ici
      try {
        const response = await fetch('http://localhost:52195/photoVoitureUtilisateurs', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            idVoitureUtilisateur : idVoitureUtilisateur,
            nomPhoto: nomPhoto,
          }),
        });
  
        if (response.ok) {
          // Gérez le succès de l'appel ici
          console.log('Données soumises avec succès');
        } else {
          console.error('Erreur lors de la soumission des données:', response.statusText);
        }
      } catch (error) {
        console.error('Erreur lors de la soumission des données:', error);
      }
    };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Text Input:
          <input type="text" value={nomPhoto} onChange={handleTextInputChange} />
        </label>
      </div>
      <div>
        <label>
          Select:
          <select value={idVoitureUtilisateur} onChange={handleSelectChange}>
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
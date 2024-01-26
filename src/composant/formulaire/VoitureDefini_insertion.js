import React, { useState, useEffect } from 'react';

const MyForm = () => {
  // États pour stocker les valeurs des champs du formulaire
  const [idmarque, setSelectIdMarque] = useState('');
  const [idmodele, setSelectIdModele] = useState('');
  const [idcarburant, setSelectIdCarburant] = useState('');
  const [idpuissance, setSelectIdPuissance] = useState('');
  const [idboitedevitesse, setSelectIdBoiteDeVitesse] = useState('');
  const [idtypedevehicule, setSelectIdTypeVehicule] = useState('');
  const [nbrporte, setTextNbrPorte] = useState('');
  const [puissanceVal, setTextPuissanceVal] = useState('');


  // État pour stocker les options du menu déroulant récupérées du web service
  const [dropdownOptions, setDropdownOptions] = useState([]);

  useEffect(() => {
    // Exemple de chargement des options depuis un web service
    const fetchDropdownOptions = async () => {
      try {
        const response = await fetch('http://localhost:52195/Boitedevitesse');
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


  const [dropdownMarque, setDropdownMarque] = useState([]);

  useEffect(() => {
    const fetchDropdownMarque = async () => {
      try {
        const response = await fetch('http://localhost:52195/Marque');
        if (response.ok) {
          const options = await response.json();
          setDropdownMarque(options);
        } else {
          console.error('Erreur lors de la requête HTTP:', response.statusText);
        }
      } catch (error) {
        console.error('Erreur lors de la requête HTTP:', error);
      }
    };

    fetchDropdownMarque();
  }, []); 


  const [dropdownModele, setDropdownModele] = useState([]);

  useEffect(() => {
    const fetchDropdownModele = async () => {
      try {
        const response = await fetch('http://localhost:52195/Modele');
        if (response.ok) {
          const options = await response.json();
          setDropdownModele(options);
        } else {
          console.error('Erreur lors de la requête HTTP:', response.statusText);
        }
      } catch (error) {
        console.error('Erreur lors de la requête HTTP:', error);
      }
    };

    fetchDropdownModele();
  }, []); 

  const [dropdownCarburant, setDropdownCarburant] = useState([]);

  useEffect(() => {
    const fetchDropdownCarburant = async () => {
      try {
        const response = await fetch('http://localhost:52195/Carburant');
        if (response.ok) {
          const options = await response.json();
          setDropdownCarburant(options);
        } else {
          console.error('Erreur lors de la requête HTTP:', response.statusText);
        }
      } catch (error) {
        console.error('Erreur lors de la requête HTTP:', error);
      }
    };

    fetchDropdownCarburant();
  }, []); 

  const [dropdownPuissance, setDropdownPuissance] = useState([]);

  useEffect(() => {
    const fetchDropdownPuissance = async () => {
      try {
        const response = await fetch('http://localhost:52195/Puissance');
        if (response.ok) {
          const options = await response.json();
          setDropdownPuissance(options);
        } else {
          console.error('Erreur lors de la requête HTTP:', response.statusText);
        }
      } catch (error) {
        console.error('Erreur lors de la requête HTTP:', error);
      }
    };

    fetchDropdownPuissance();
  }, []); 


  const [dropdownTypeVehicule, setDropdownTypeVehicule] = useState([]);

  useEffect(() => {
    const fetchDropdownTypeVehicule = async () => {
      try {
        const response = await fetch('http://localhost:52195/typeDeVehicules');
        if (response.ok) {
          const options = await response.json();
          setDropdownTypeVehicule(options);
        } else {
          console.error('Erreur lors de la requête HTTP:', response.statusText);
        }
      } catch (error) {
        console.error('Erreur lors de la requête HTTP:', error);
      }
    };

    fetchDropdownTypeVehicule();
  }, []); 

  const handleTextMarque = (e) => {
    setSelectIdMarque(e.target.value);
  };

  const handleTextModele = (e) => {
    setSelectIdModele(e.target.value);
  };

  const handleTextCarburant = (e) => {
    setSelectIdCarburant(e.target.value);
  };

  const handleTextPuissance = (e) => {
    setSelectIdPuissance(e.target.value);
  };

  const handleTextBoiteDeVitesse = (e) => {
    setSelectIdBoiteDeVitesse(e.target.value);
  };

  const handleTextTypeVehicule = (e) => {
    setSelectIdTypeVehicule(e.target.value);
  };

  const handleTextNbrPorte = (e) => {
    setTextNbrPorte(e.target.value);
  };

  const handleTextPuissanceVal = (e) => {
    setTextPuissanceVal(e.target.value);
  };
  

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Vous pouvez maintenant effectuer votre appel à votre service Spring Boot ici
    try {
      const response = await fetch('http://localhost:52195/VoitureDefinis', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            idmarque : idmarque,
            idmodele : idmodele,
            idcarburant : idcarburant,
            idpuissance : idpuissance,
            idboitedevitesse : idboitedevitesse,
            idtypedevehicule : idtypedevehicule,
            nbrporte : nbrporte,
            puissance : puissanceVal,
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
          Marque:
          <select value={idmarque} onChange={handleTextMarque}>
            <option value="">Sélectionnez une option</option>
            {dropdownMarque.map((option) => (
              <option value={option.id_marque}>
                {option.description}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div>
        <label>
          Modele:
          <select value={idmodele} onChange={handleTextModele}>
            <option value="">Sélectionnez une option</option>
            {dropdownModele.map((option) => (
              <option value={option.idmodele}>
                {option.description}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div>
        <label>
          Carburant:
          <select value={idcarburant} onChange={handleTextCarburant}>
            <option value="">Sélectionnez une option</option>
            {dropdownCarburant.map((option) => (
              <option value={option.id_carburant}>
                {option.description}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div>
        <label>
          Puissance:
          <select value={idpuissance} onChange={handleTextPuissance}>
            <option value="">Sélectionnez une option</option>
            {dropdownPuissance.map((option) => (
              <option value={option.idpuissance}>
                {option.kw} kw {option.cv} cv
              </option>
            ))}
          </select>
        </label>
      </div>

      <div>
        <label>
          Boite de vitesse:
          <select value={idboitedevitesse} onChange={handleTextBoiteDeVitesse}>
            <option value="">Sélectionnez une option</option>
            {dropdownOptions.map((option) => (
              <option value={option.idboitedevitesse}>
                {option.description}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div>
        <label>
        Type de vehicule:
          <select value={idtypedevehicule} onChange={handleTextTypeVehicule}>
            <option value="">Sélectionnez une option</option>
            {dropdownTypeVehicule.map((option) => (
              <option value={option.idTypeDeVehicule}>
                {option.description}
              </option>
            ))}
          </select>
        </label>
      </div>
      
      <div>
        <label>
          Nombre porte:
          <input type="text" value={nbrporte} onChange={handleTextNbrPorte} />
        </label>
      </div>

      <div>
        <label>
          puissance:
          <input type="text" value={puissanceVal} onChange={handleTextPuissanceVal} />
        </label>
      </div>
      <div>
        <button type="submit">Enregistrer</button>
      </div>
    </form>
  );
};

export default MyForm;

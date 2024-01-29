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
        const response = await fetch('https://voitureoccasion-production.up.railway.app/Boitedevitesse');
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
        const response = await fetch('https://voitureoccasion-production.up.railway.app/Marque');
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
        const response = await fetch('https://voitureoccasion-production.up.railway.app/Modele');
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
        const response = await fetch('https://voitureoccasion-production.up.railway.app/Carburant');
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
        const response = await fetch('https://voitureoccasion-production.up.railway.app/Puissance');
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
        const response = await fetch('https://voitureoccasion-production.up.railway.app/typeDeVehicules');
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
      const response = await fetch('https://voitureoccasion-production.up.railway.app/VoitureDefinis', {
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

  <div id="right-panel" className="right-panel">
    <div className="content">
      <div className="animated fadeIn">
        <div className="col-lg-10">
          <div className="card">
            <div className="card-header">
              <strong className="card-title">Voiture defini</strong>
            </div>
            <div className="card-body">
              <div id="pay-invoice">
                <div className="card-body">
                  <div className="card-title">
                      <h3 className="text-center">Insertion de voiture defini</h3>
                  </div>
                  <hr></hr>
                  <form onSubmit={handleSubmit}>

                      <div className="form-group">
                        <label for="cc-payment" className="control-label mb-1"><b>Marque</b></label>
                        <div className="col-10 col-md-15">
                            <select value={idmarque} onChange={handleTextMarque} id="select" className="form-control">
                                <option value="" disabled selected>Choisissez un marque</option>
                                  {dropdownMarque.map((option) => (
                                  <option value={option.id_marque}>
                                    {option.description}
                                  </option>
                                ))}
                            </select>
                        </div>
                      </div>


                      <div className="form-group">
                        <label for="cc-payment" className="control-label mb-1"><b>Modele</b></label>
                        <div className="col-10 col-md-15">
                            <select value={idmodele} onChange={handleTextModele} id="select" className="form-control">
                                <option value="" disabled selected>Choisissez un modele</option>
                                  {dropdownModele.map((option) => (
                                  <option value={option.idmodele}>
                                    {option.description}
                                  </option>
                                ))}
                            </select>
                        </div>
                      </div>

                      <div className="form-group">
                        <label for="cc-payment" className="control-label mb-1"><b>Carburant</b></label>
                        <div className="col-10 col-md-15">
                            <select value={idcarburant} onChange={handleTextCarburant} id="select" className="form-control">
                                <option value="" disabled selected>Choisissez un carburant</option>
                                  {dropdownCarburant.map((option) => (
                                  <option value={option.id_carburant}>
                                    {option.description}
                                  </option>
                                ))}
                            </select>
                        </div>
                      </div>

                      <div className="form-group">
                        <label for="cc-payment" className="control-label mb-1"><b>Puissance</b></label>
                        <div className="col-10 col-md-15">
                            <select value={idpuissance} onChange={handleTextPuissance} id="select" className="form-control">
                                <option value="" disabled selected>Choisissez</option>
                                  {dropdownPuissance.map((option) => (
                                  <option value={option.idpuissance}>
                                    {option.kw} kw {option.cv} cv
                                  </option>
                                ))}
                            </select>
                        </div>
                      </div>

                      <div className="form-group">
                        <label for="cc-payment" className="control-label mb-1"><b> Boite de vitesse</b></label>
                        <div className="col-10 col-md-15">
                            <select value={idboitedevitesse} onChange={handleTextBoiteDeVitesse} id="select" className="form-control">
                                <option value="" disabled selected>Choisissez</option>
                                  {dropdownOptions.map((option) => (
                                  <option value={option.idboitedevitesse}>
                                    {option.description}
                                  </option>
                                ))}
                            </select>
                        </div>
                      </div>

                      <div className="form-group">
                        <label for="cc-payment" className="control-label mb-1"><b>Type de vehicule</b></label>
                        <div className="col-10 col-md-15">
                            <select value={idtypedevehicule} onChange={handleTextTypeVehicule} id="select" className="form-control">
                                <option value="" disabled selected>Choisissez</option>
                                  {dropdownTypeVehicule.map((option) => (
                                  <option value={option.idTypeDeVehicule}>
                                    {option.description}
                                  </option>
                                ))}
                            </select>
                        </div>
                      </div>

                      <div className="col-10">
                          <label for="x_card_code" className="control-label mb-1"><b>Nombre de porte</b></label>
                          <div className="input-group">
                              <input id="x_card_code" type="text" value={nbrporte} onChange={handleTextNbrPorte} className="form-control cc-cvc"/>
                          </div>
                      </div>

                      <div className="col-10" style={{marginBottom : 50}}>
                          <label for="x_card_code" className="control-label mb-1"><b>Puissance</b></label>
                          <div className="input-group">
                              <input id="x_card_code" type="text" value={puissanceVal} onChange={handleTextPuissanceVal} className="form-control cc-cvc"/>
                          </div>
                      </div>

                      <div>
                        <button id="payment-button" type="submit" className="btn btn-lg btn-info btn-block">
                            <span id="payment-button-amount">Enregistrer</span>
                        </button>
                      </div>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default MyForm;

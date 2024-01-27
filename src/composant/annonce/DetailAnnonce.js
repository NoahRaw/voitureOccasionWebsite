import React, { useState, useEffect } from 'react';
import '../../css/DetailProduct.css';


export default function DetailAnnonce({ nomutilisateur,idvoitureutilisateur, dateventedebut, matricule, kilometrage, prix, nommarque, nommodele, nomcarburant, kw, cv, nomboitedevitesse, nomtypedevehicule, nbrporte, puissance, setUserData }) {

  const handleSubmit = async () => {
    // Vous pouvez maintenant effectuer votre appel à votre service Spring Boot ici
    try {
      const response = await fetch(`http://localhost:52195/VoitureUtilisateurs/validation/${idvoitureutilisateur}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({

        }),
      });

      if (response.ok) {
        // Gérez le succès de l'appel ici
        console.log('Données soumises avec succès');

        const fetchData = async () => {
          try {
            const response = await fetch(`http://localhost:52195/Voitureutilisateur_view/voitureNonConfirmer`);
    
            if (response.ok) {
              const data = await response.json();
              setUserData(data); // Mettez à jour l'état avec les données récupérées
            } else {
              console.error('Erreur lors de la requête HTTP:', response.statusText);
            }
          } catch (error) {
            console.error('Erreur lors de la requête HTTP:', error);
          }
        };
    
        fetchData();
        
      } else {
        console.error('Erreur lors de la soumission des données:', response.statusText);
      }
    } catch (error) {
      console.error('Erreur lors de la soumission des données:', error);
    }
  };


  const [voiturePhoto, setVoiturePhoto] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:52195/photoVoitureUtilisateurs/getPhotoVoitureUtilisateur/${idvoitureutilisateur}`);

        if (response.ok) {
          const data = await response.json();
          console.log(data);

          setVoiturePhoto(data); // Mettez à jour l'état avec les données récupérées
        } else {
          console.error('Erreur lors de la requête HTTP:', response.statusText);
        }
      } catch (error) {
        console.error('Erreur lors de la requête HTTP:', error);
      }
    };

    fetchData();
  }, [idvoitureutilisateur]);


  const [estVisible, setEstVisible] = useState(false);

  const handleClick = () => {
    setEstVisible(!estVisible);
  };

  return (
    <div className="DetailProduct card">
      <div>

        <div className="imagePrincipale">
        {voiturePhoto.map((photo) => (
            // eslint-disable-next-line jsx-a11y/img-redundant-alt
            <img src={`img/${photo.nomPhoto}`} alt="Description de l'image" width="200" height="150"></img>
        ))}
        </div>

        <p>{nomutilisateur}</p>
        <p>date : {dateventedebut}</p>
        <p>matricule : {matricule}</p>
        <p>kilometrage : {kilometrage}</p>
        <p>Marque : {nommarque}</p>
        <p>Modele : {nommodele}</p>
        <p>Prix : {prix}</p>

        {estVisible && <div>
          <p>carburant : {nomcarburant}</p>
          <p>kw : {kw}</p>
          <p>cv : {cv}</p>
          <p>boite de vitesse : {nomboitedevitesse}</p>
          <p>type de vehicule : {nomtypedevehicule}</p>
          <p>nombre de porte : {nbrporte}</p>
          <p>puissance : {puissance}</p>
        </div>}

        <button onClick={handleClick}>detail</button>
        <button onClick={() => handleSubmit()}>Valider</button>
      </div>
    </div>
  );
}

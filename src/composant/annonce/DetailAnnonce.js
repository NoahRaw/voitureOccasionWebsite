import React, { useState, useEffect } from 'react';

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
            const response = await fetch(`http://localhost:52195/Voitureutilisateur_view`);
    
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

  const [estVisible, setEstVisible] = useState(false);

  const handleClick = () => {
    setEstVisible(!estVisible);
  };

  return (
    <div className="">
      <div>
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

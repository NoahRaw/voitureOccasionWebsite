import React, { useState } from 'react';

export default function DetailAnnonce({idvoitureutilisateur,dateventedebut, matricule , kilometrage , prix ,nommarque ,nommodele}) {

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
            window.location.reload();
          } else {
            console.error('Erreur lors de la soumission des données:', response.statusText);
          }
        } catch (error) {
          console.error('Erreur lors de la soumission des données:', error);
        }
    };

  return (
    <div className="">
      <div>
        <p>date : {dateventedebut}</p>
        <p>matricule : {matricule}</p>
        <p>kilometrage : {kilometrage}</p>
        <p>Marque : {nommarque}</p>
        <p>Modele : {nommodele}</p>
        <p>Prix : {prix}</p>
        <button onClick={() => handleSubmit()}>Valider</button>
      </div>
    </div>
  );
}

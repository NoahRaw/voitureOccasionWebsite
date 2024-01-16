import React, { useState } from 'react';

export default function DetailAnnonce({idvoitureutilisateur,dateventedebut, matricule , kilometrage , prix ,nommarque ,nommodele,nomcarburant,kw,cv,nomboitedevitesse,nomtypedevehicule,nbrporte,puissance}) {

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

    const [estVisible, setEstVisible] = useState(false);

    const handleClick = () => {
      setEstVisible(!estVisible); 
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

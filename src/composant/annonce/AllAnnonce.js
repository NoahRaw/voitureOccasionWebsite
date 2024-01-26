import React, { useState, useEffect } from 'react';
import DetailAnnonce from './DetailAnnonce';
import '../../css/AllProducts.css';


const AllAnnonce = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
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
  }, []);


  return (
    <div className="AllProducts">
      {userData.map((user) => (
        <DetailAnnonce
          key={user.idvoitureutilisateur}
          nomutilisateur={user.nomutilisateur}
          idvoitureutilisateur={user.idvoitureutilisateur}
          dateventedebut={user.dateventedebut}
          matricule={user.matricule}
          kilometrage={user.kilometrage}
          prix={user.prix}
          nommarque={user.nommarque}
          nommodele={user.nommodele}
          nomcarburant={user.nomcarburant}
          kw={user.kw}
          cv={user.cv}
          nomboitedevitesse={user.nomboitedevitesse}
          nomtypedevehicule={user.nomtypedevehicule}
          nbrporte={user.nbrporte}
          puissance={user.puissance}
          setUserData={setUserData}
        />
      ))}
    </div>
  );
};

export default AllAnnonce;

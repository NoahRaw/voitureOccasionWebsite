import React, { useState, useEffect } from 'react';

const UserDataComponent = ({date}) => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    console.log(`${date.dateDebut} ou ${date.dateFin}`);
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:52195/VoitureDefiniStatView/liste/${date.dateDebut}/${date.dateFin}`);

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
  }, []); // Le tableau vide en tant que dépendance signifie que cette requête sera effectuée une seule fois lors du montage du composant.

  return (
    <div>
      <h1>Liste des Utilisateurs</h1>
      <table>
        <thead>
          <tr>
            <th>Marque</th>
            <th>Modele</th>
            <th>Nombre</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user.id}>
              <td>{user.nomMarque}</td>
              <td>{user.nomModele}</td>
              <td>{user.nombre}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserDataComponent;

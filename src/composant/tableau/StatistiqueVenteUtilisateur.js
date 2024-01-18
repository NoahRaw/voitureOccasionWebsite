import React, { useState, useEffect } from 'react';
import BarChart from "../chart/BarChart";

const UserDataComponent = ({date}) => {
  const [userData, setUserData] = useState([]);

  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    console.log(`${date.dateDebut} ou ${date.dateFin}`);
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:52195/Vuestatistiquevente/findByStatVenteUserBy2Date?date1=${date.dateDebut}&date2=${date.dateFin}`);

        if (response.ok) {
          const data = await response.json();
          setUserData(data); // Mettez à jour l'état avec les données récupérées
          setChartData({
            labels: data.map((data) => data.email),
            datasets: [
            {
                label: "Statistique de vente de voiture par utilisateur",
                data: data.map((data) => data.nombredeventes),
                backgroundColor: [
                "rgba(75,192,192,1)",
                "#ecf0f1",
                "#50AF95",
                "#f3ba2f",
                "#2a71d0",
                ],
                borderColor: "black",
                borderWidth: 2,
            },1
            ],
        })
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
      <h1>Statistique de vente de voiture par utilisateur</h1>
      <div style={{ width: 700 }}>
      {
        chartData &&
        <BarChart chartData={chartData} />
      }
      </div>

      <table>
        <thead>
          <tr>
            <th>Email Utilisateur</th>
            <th>Nombre de vente</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user.idutilisateur}>
              <td>{user.email}</td>
              <td>{user.nombredeventes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserDataComponent;

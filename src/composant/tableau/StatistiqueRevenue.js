import React, { useState, useEffect } from 'react';
import BarChart from "../chart/BarChart";

const UserDataComponent = ({date}) => {
  const [userData, setUserData] = useState([]);

  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    console.log(`${date.dateDebut} ou ${date.dateFin}`);
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:52195/Boitedevitesse/utilisateur-revenue?dateDebut=${date.dateDebut}&dateFin=${date.dateFin}`);

        if (response.ok) {
          const data = await response.json();
          setUserData(data); // Mettez à jour l'état avec les données récupérées
          setChartData({
            labels: data.map((data) => data.idutilisateur),
            datasets: [
            {
                label: "Statistique revenue par utilisateur",
                data: data.map((data) => data.revenue),
                backgroundColor: [
                "rgba(75,192,192,1)",
                "#ecf0f1",
                "#50AF95",
                "#f3ba2f",
                "#2a71d0",
                ],
                borderColor: "black",
                borderWidth: 2,
            },
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
      <h1>Statistique revenue par utilisateur</h1>
      <div style={{ width: 700 }}>
      {
        chartData &&
        <BarChart chartData={chartData} />
      }
      </div>

      <table>
        <thead>
          <tr>
            <th>Nom Utilisateur</th>
            <th>Revenue</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user.id}>
              <td>{user.idutilisateur}</td>
              <td>{user.revenue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserDataComponent;

import { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';

const GraphComponent = () => {
  const [data, setData] = useState({ labels: [], values: [] });
  const [myChart, setMyChart] = useState(null);

  useEffect(() => {
    // Simulez des données JSON statiques pour le test
    const jsonData = [
      { date: '2024-01-01', montant: 10 },
      { date: '2024-01-02', montant: 50 },
      { date: '2024-01-03', montant: 40 },
      { date: '2024-01-04', montant: 60 },
      { date: '2024-01-05', montant: 20 },
      { date: '2024-01-06', montant: 50 },
      // ... ajoutez autant d'entrées que nécessaire
    ];

    // Structurez les données selon le format de Chart.js
    const chartData = {
      labels: jsonData.map(entry => entry.date),
      values: jsonData.map(entry => entry.montant),
    };

    setData(chartData);
  }, []); // Assurez-vous de fournir les dépendances correctes selon votre besoin

  useEffect(() => {
    // Créez le graphique une fois que les données sont mises à jour
    const ctx = document.getElementById('myChart').getContext('2d');

    // Détruisez le graphique existant s'il y en a un
    if (myChart) {
      myChart.destroy();
    }

    // Utilisez directement la fonction Chart de Chart.js, pas en tant que constructeur
    const newChart = new Chart(ctx, {
      type: 'line', // ou 'bar', 'pie', etc., selon le type de graphique souhaité
      data: {
        labels: data.labels,
        datasets: [{
          label: 'Montant',
          data: data.values,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        }],
      },
      options: {
        maintainAspectRatio: false, // Permet au graphique de ne pas maintenir un aspect ratio fixe
        // Autres options...
        scales: {
          y: {
            beginAtZero: true
          }
        }
      },
    });

    setMyChart(newChart);

    // Assurez-vous de détruire le graphique lors du démontage du composant pour éviter les fuites de mémoire
    return () => {
      if (newChart) {
        newChart.destroy();
      }
    };
  }, [data, myChart]);

  return (
    <div>
      <canvas id="myChart" style={{ boxSizing: 'border-box', display: 'block' }} width="600" heigh="300"></canvas>
    </div>
  );
};

export default GraphComponent;

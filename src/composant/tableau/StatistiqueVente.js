import React, { useState, useEffect } from 'react';
//import BarChart from "../chart/BarChart";

const UserDataComponent = ({date}) => {
  const [userData, setUserData] = useState([]);

  //const [chartData, setChartData] = useState(null);

  useEffect(() => {
    console.log(`${date.dateDebut} ou ${date.dateFin}`);
    const fetchData = async () => {
      try {
        const response = await fetch(`https://voitureoccasion-production.up.railway.app/Statistique/ventes?dateDebut=${date.dateDebut}&dateFin=${date.dateFin}`);

        if (response.ok) {
          const data = await response.json();
          setUserData(data); // Mettez à jour l'état avec les données récupérées
          //setChartData({
          //  labels: data.map((data) => data.dateVente),
          //  datasets: [
          //  {
          //      label: "Statistique commission",
          //      data: data.map((data) => data.comission),
          //      backgroundColor: [
           //     "rgba(75,192,192,1)",
          //      "#ecf0f1",
           //     "#50AF95",
           //     "#f3ba2f",
           //     "#2a71d0",
            //    ],
            //    borderColor: "black",
            //    borderWidth: 2,
           // },
           // ],
           //})
        } else {
          console.error('Erreur lors de la requête HTTP:', response.statusText);
        }
      } catch (error) {
        console.error('Erreur lors de la requête HTTP:', error);
      }
    };

    fetchData();
  }, [date.dateDebut, date.dateFin]); // Le tableau vide en tant que dépendance signifie que cette requête sera effectuée une seule fois lors du montage du composant.

  return (
    <div>
      <h1>Statistique commission</h1>
      <div style={{ width: 700 }}>
      {
        //chartData &&
        //<BarChart chartData={chartData} />
      }
      </div>

      <div class="content"/>
            <div class="animated fadeIn">
                <div class="row">

                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-header">
                                <strong class="card-title">Data Table</strong>
                            </div>
                            <div class="card-body">
                                <table id="bootstrap-data-table" class="table table-striped table-bordered">
                                    <thead>
          				<tr>
            				   	<th>Date vente</th>
            					<th>Commission</th>
          				</tr>
        			     </thead>
        			     <tbody>
          				{userData.map((user) => (
            				   <tr key={user.id}>
             				     <td>{user.dateVente}</td>
              				     <td>{user.comission}</td>
            				    </tr>
         				 ))}
        				</tbody>
      				   </table>
    				</div>
                        </div>
                    </div>
              </div>
          </div>
      </div>
  );
};

export default UserDataComponent;

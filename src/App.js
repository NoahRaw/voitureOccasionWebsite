import React, { useState } from 'react';
import Formulaire from './composant/Formulaire.js';
import Login from './composant/formulaire/Login.js';
import FormulaireRevenueUtilisateur from './composant/formulaire/FormulaireRevenueUtilisateur.js';

const boiteDeVitesse = ({ formulaireName }) => <div><Formulaire formulaireName={formulaireName}></Formulaire></div>;
const puissance = ({ formulaireName }) => <div><Formulaire formulaireName={formulaireName}></Formulaire></div>;
const modele = ({ formulaireName }) => <div><Formulaire formulaireName={formulaireName}/></div>;
const login = () => <div><Login /></div>;
const formulaireRevenueUtilisateur = () => <div><FormulaireRevenueUtilisateur /></div>;

export default function App(params) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [currentComponent, setCurrentComponent] = useState('boiteDeVitesse');

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isConnected, setIsConnected] = useState(false);

  const components = {
    boiteDeVitesse: boiteDeVitesse,
    puissance: puissance,
    modele: modele,
    login: login,
    formulaireRevenueUtilisateur: formulaireRevenueUtilisateur,
  };

  const handleClick = async (componentKey,checkToken) => {
    setCurrentComponent(componentKey);

    const authToken = localStorage.getItem('authToken');

    if(authToken==null){
      setIsConnected(false)
    }
    else if(checkToken==true){
      try {
        const response = await fetch(`http://localhost:52195/Utilisateurs/isTokenValide`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          const boolean = data; // Assurez-vous d'adapter cela à la structure de la réponse du service webi
          console.log('componentKey: ',boolean);

          if(boolean==false){
              setIsConnected(false);
          }

          // Stockage dans le localStorage
          localStorage.setItem('authToken', authToken);
        } else {
          console.error('Erreur lors de l\'authentification');
        }
      } catch (error) {
        console.error('Erreur lors de la requête HTTP:', error);
      }
    }
  };

  const deconnection = async (componentKey) => {
    setCurrentComponent(componentKey);

    const authToken = localStorage.getItem('authToken');

    try {
      const response = await fetch(`http://localhost:52195/Utilisateurs/deconnection`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        const boolean = data; // Assurez-vous d'adapter cela à la structure de la réponse du service webi
        console.log('componentKey: ',boolean);

        if(boolean==false){
            setIsConnected(false);
        }

        // Stockage dans le localStorage
        localStorage.setItem('authToken', authToken);
      } else {
        console.error('Erreur lors de l\'authentification');
      }
    } catch (error) {
      console.error('Erreur lors de la requête HTTP:', error);
    }
    
    setIsConnected(false);
  };

  const renderComponent = () => {
    if (isConnected) {
      const ComponentToRender = components[currentComponent];
      switch (currentComponent) {
        case 'boiteDeVitesse':
          return <ComponentToRender formulaireName={'boiteDeVitesse'} />;
        case 'puissance':
          return <ComponentToRender formulaireName={'puissance'} />;
        case 'modele':
          return <ComponentToRender formulaireName={'modele'} />;
        case 'formulaireRevenueUtilisateur':
          return <ComponentToRender />;
        default:
          return <ComponentToRender />;
      }
    } else {
      // Si l'utilisateur n'est pas connecté, afficher le composant de connexion
      return <Login setIsConnected={setIsConnected} />;
    }
  };

  return (
    <div>
      {isConnected && (
        <ul>
          <li>
            <a href="#" onClick={() => handleClick('boiteDeVitesse',true)}>
              Insertion Boite De Vitesse
            </a>
          </li>
          <li>
            <a href="#" onClick={() => handleClick('puissance',true)}>
              Insertion de puissance
            </a>
          </li>
          <li>
            <a href="#" onClick={() => handleClick('modele',true)}>
              Insertion de modele
            </a>
          </li>
          <li>
            <a href="#" onClick={() => handleClick('VoitureDefini_insertion')}>
              Insertion voiture defini
            </a>
          </li>
          <li>
            <a href="#" onClick={() => handleClick('formulaireRevenueUtilisateur',true)}>
              Statistique revenue utilisateur
            </a>
          </li>
          <li>
            <a href="#" onClick={() => deconnection('login')}>
              Deconnexion
            </a>
          </li>
        </ul>
      )}

      {renderComponent()}
    </div>
  );
}

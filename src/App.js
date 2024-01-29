/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import Formulaire from './composant/Formulaire.js';
import Login from './composant/formulaire/Login.js';
import FormulaireRevenueUtilisateur from './composant/formulaire/FormulaireRevenueUtilisateur.js';
import FormulaireStatVoitureDefinie from './composant/formulaire/FormulaireStatVoitureDefinie.js';
import FormulaireStatVenteUtilisateur from './composant/formulaire/FormulaireStatVenteUtilisateur.js';
import FormulaireStatVente from './composant/formulaire/FormulaireStatVente.js';

import AllAnnonce from './composant/annonce/AllAnnonce.js';
import VoitureDefini from './composant/formulaire/VoitureDefini_insertion.js';
import TableauDynamique from './composant/tableau/TableauDynamique.js';
import ListeComission from './composant/tableau/ListeComission.js';

import './App.css';
import RightPanel from './composant/templateadmin/RightPanel .js';


const boiteDeVitesse = ({ formulaireName }) => <div><Formulaire formulaireName={formulaireName}></Formulaire></div>;
const puissance = ({ formulaireName }) => <div><Formulaire formulaireName={formulaireName}></Formulaire></div>;
const modele = ({ formulaireName }) => <div><Formulaire formulaireName={formulaireName}/></div>;
const marque = ({ formulaireName }) => <div><Formulaire formulaireName={formulaireName}/></div>;
const typevehicule = ({ formulaireName }) => <div><Formulaire formulaireName={formulaireName}/></div>;
const carburant = ({ formulaireName }) => <div><Formulaire formulaireName={formulaireName}/></div>;
const comission = ({ formulaireName }) => <div><Formulaire formulaireName={formulaireName}/></div>;
const login = ({setIsConnected}) => <div><Login setIsConnected={setIsConnected}/></div>;
const formulaireRevenueUtilisateur = () => <div><FormulaireRevenueUtilisateur /></div>;
const formulaireStatVoitureDefinie = () => <div><FormulaireStatVoitureDefinie /></div>;
const formulaireStatVenteUser = () => <div><FormulaireStatVenteUtilisateur /></div>;
const formulaireStatVente = () => <div><FormulaireStatVente /></div>;
const allAnnonce = () => <div className="conten"><AllAnnonce /></div>;
const voitureDefini = () => <div><VoitureDefini /></div>;
const listeBoiteDeVitesse = ({tableName}) => <div><TableauDynamique tableName={tableName} /></div>;
const listepuissance = ({tableName}) => <div><TableauDynamique tableName={tableName} /></div>;
const listModele = ({tableName}) => <div><TableauDynamique tableName={tableName} /></div>;
const listMarque = ({tableName}) => <div><TableauDynamique tableName={tableName} /></div>;
const listTypevehicule = ({tableName}) => <div><TableauDynamique tableName={tableName} /></div>;
const listCarburant = ({tableName}) => <div><TableauDynamique tableName={tableName} /></div>;
const listUtilisateur = ({tableName}) => <div><TableauDynamique tableName={tableName} /></div>;
const listVoitureDefini = ({tableName}) => <div><TableauDynamique tableName={tableName} /></div>;
const listeComission = () => <div><ListeComission /></div>;

export default function App(params) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [currentComponent, setCurrentComponent] = useState('comission');

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isConnected, setIsConnected] = useState(false);
  const authToken = localStorage.getItem('authToken');
  // alert(authToken);

    if(authToken!=null && isConnected===false){
      setIsConnected(true)
    }

  const components = {
    boiteDeVitesse: boiteDeVitesse,
    puissance: puissance,
    modele: modele,
    login: login,
    formulaireRevenueUtilisateur: formulaireRevenueUtilisateur,
    allAnnonce: allAnnonce,
    formulaireStatVoitureDefinie: formulaireStatVoitureDefinie, 
    formulaireStatVenteUser : formulaireStatVenteUser,
    formulaireStatVente : formulaireStatVente,
    comission : comission,
    marque : marque,
    typevehicule:typevehicule,
    carburant: carburant,
    voitureDefini: voitureDefini,
    listeBoiteDeVitesse: listeBoiteDeVitesse,
    listepuissance: listepuissance,
    listModele: listModele,
    listCarburant : listCarburant,
    listMarque : listMarque,
    listTypevehicule: listTypevehicule,
    listUtilisateur : listUtilisateur,
    listVoitureDefini : listVoitureDefini,
    listeComission : listeComission
  };

  const handleClick = async (componentKey,checkToken) => {
    setCurrentComponent(componentKey);

    const authToken = localStorage.getItem('authToken');

    if(authToken==null){
      setIsConnected(false)
    }
    else if(checkToken===true){
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

          if(boolean===false){
              setIsConnected(false);
              // Stockage dans le localStorage
              localStorage.removeItem('authToken');
          }

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
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`,
        }
      });

      if (response.ok) {
        localStorage.removeItem('authToken');
        setIsConnected(false);
      }

    } catch (error) {
      console.error('Erreur lors de la requête HTTP:', error);
    }
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
        case 'allAnnonce':
            return <ComponentToRender />;
        case 'formulaireStatVoitureDefinie':
          return <ComponentToRender />;
        case 'formulaireStatVenteUser':
          return <ComponentToRender />;
        case 'formulaireStatVente':
          return <ComponentToRender />;
        case 'voitureDefini':
          return <ComponentToRender />;
        case 'marque':
          return <ComponentToRender formulaireName={'marque'}/>;
        case 'typevehicule':
          return <ComponentToRender formulaireName={'typevehicule'}/>;
        case 'carburant':
          return <ComponentToRender formulaireName={'carburant'}/>;
        case 'listeBoiteDeVitesse':
          return <ComponentToRender tableName={'listeBoiteDeVitesse'}/>;
        case 'listepuissance':
          return <ComponentToRender tableName={'listepuissance'}/>;
        case 'listModele':
          return <ComponentToRender tableName={'listModele'}/>;
        case 'listMarque':
          return <ComponentToRender tableName={'listMarque'}/>;
        case 'listTypevehicule':
          return <ComponentToRender tableName={'listTypevehicule'}/>;
        case 'listCarburant':
          return <ComponentToRender tableName={'listCarburant'}/>;
        case 'listUtilisateur':
          return <ComponentToRender tableName={'listUtilisateur'}/>;
        case 'listVoitureDefini':
          return <ComponentToRender tableName={'listVoitureDefini'}/>;
        case 'listeComission':
          return <ComponentToRender tableName={'listeComission'}/>;
        default:
          return <ComponentToRender formulaireName={'comission'}/>;
      }
    } else {
      // Si l'utilisateur n'est pas connecté, afficher le composant de connexion
      return <Login setIsConnected={setIsConnected} />;
    }
  };

  return (
    <div>
      {isConnected && (

        <div>
          <RightPanel />  {/*Header*/}
          <aside id="left-panel" className="left-panel">
            <nav className="navbar navbar-expand-sm navbar-default">
              <div id="main-menu" className="main-menu collapse navbar-collapse">
                  <ul className="nav navbar-nav">
                      <li className="active">
                          <a href="#" onClick={() => deconnection('comission')}><i className="menu-icon fa fa-laptop"></i>Deconnexion </a>
                      </li>
                      <li className="menu-title">A propos du voiture</li>

                      <li className="menu-item-has-children dropdown">
                          <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-table"></i>Boite de vitesse</a>
                          <ul className="sub-menu children dropdown-menu">
                              <li><i className="fa fa-table"></i><a href="" onClick={() => handleClick('boiteDeVitesse',true)}>Insertion boite de vitesse</a></li>  
                              <li><i className="menu-icon fa fa-th"></i><a href="#" onClick={() => handleClick('listeBoiteDeVitesse',true)}>Liste boite de vitesse</a></li>                        
                          </ul>
                      </li>

                      <li className="menu-item-has-children dropdown">
                          <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-table"></i>Puissance</a>
                          <ul className="sub-menu children dropdown-menu">
                              <li><i className="fa fa-table"></i><a href="#" onClick={() => handleClick('puissance',true)}>Insertion puissance</a></li>  
                              <li><i className="menu-icon fa fa-th"></i><a href="#" onClick={() => handleClick('listepuissance',true)}>Liste puissance</a></li>                        
                          </ul>
                      </li>

                      <li className="menu-item-has-children dropdown">
                          <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-table"></i>Marque</a>
                          <ul className="sub-menu children dropdown-menu">
                              <li><i className="fa fa-table"></i><a href="#" onClick={() => handleClick('marque',true)}>Insertion marque</a></li>  
                              <li><i className="menu-icon fa fa-th"></i><a href="#" onClick={() => handleClick('listMarque',true)}>Liste marque</a></li>                        
                          </ul>
                      </li>

                      <li className="menu-item-has-children dropdown">
                          <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-table"></i>Type de vehicule</a>
                          <ul className="sub-menu children dropdown-menu">
                              <li><i className="fa fa-table"></i><a href="#" onClick={() => handleClick('typevehicule',true)}>Insertion type vehicule</a></li> 
                              <li><i className="menu-icon fa fa-th"></i><a href="#" onClick={() => handleClick('listTypevehicule',true)}>Liste type vehicule</a></li> 
                          </ul>
                      </li>

                      <li className="menu-item-has-children dropdown">
                          <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-table"></i>Commission</a>
                          <ul className="sub-menu children dropdown-menu">
                              <li><i className="fa fa-table"></i><a href="#" onClick={() => handleClick('comission',true)}>Insertion commission</a></li>  
                              <li><i className="menu-icon fa fa-th"></i><a href="#" onClick={() => handleClick('listeComission',true)}>Liste commission</a></li>                        
                          </ul>
                      </li>

                      <li className="menu-item-has-children dropdown">
                          <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-table"></i>Carburant</a>
                          <ul className="sub-menu children dropdown-menu">
                              <li><i className="fa fa-table"></i><a href="#" onClick={() => handleClick('carburant',true)}>Insertion carburant</a></li>     
                              <li><i className="menu-icon fa fa-th"></i><a href="#" onClick={() => handleClick('listCarburant',true)}>Liste carburant</a></li>                    
                          </ul>
                      </li>

                      <li className="menu-item-has-children dropdown">
                          <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-table"></i>Modele</a>
                          <ul className="sub-menu children dropdown-menu">
                              <li><i className="fa fa-table"></i><a href="#" onClick={() => handleClick('modele',true)}>Insertion modele</a></li>  
                              <li><i className="menu-icon fa fa-th"></i><a href="#" onClick={() => handleClick('listModele',true)}> Liste modele</a></li>                        
                          </ul>
                      </li>

                      <li className="menu-item-has-children dropdown">
                          <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-table"></i>Voiture defini</a>
                          <ul className="sub-menu children dropdown-menu">
                              <li><i className="fa fa-table"></i><a href="#" onClick={() => handleClick('voitureDefini',true)}>Insertion voiture defini</a></li>  
                              <li><i className="menu-icon fa fa-th"></i><a href="#" onClick={() => handleClick('listVoitureDefini',true)}>Liste voiture defini</a></li>                        
                          </ul>
                      </li>

                      <li className="menu-title">User</li>
                      <li className="menu-item-has-children dropdown">
                          <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-table"></i>Utilisateur</a>
                          <ul className="sub-menu children dropdown-menu">
                              <li><i className="menu-icon fa fa-th"></i><a href="#" onClick={() => handleClick('listUtilisateur',true)}>Liste utilisateur</a></li>                        
                          </ul>
                      </li>

                      <li className="menu-title">Statistique</li>
                      <li className="menu-item-has-children dropdown">
                          <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-th"></i>Statistique</a>
                          <ul className="sub-menu children dropdown-menu">
                              <li><i className="menu-icon fa fa-th"></i><a href="#" onClick={() => handleClick('formulaireStatVoitureDefinie',true)}>Statistique voiture</a></li>
                              <li><i className="menu-icon fa fa-th"></i><a href="#" onClick={() => handleClick('formulaireRevenueUtilisateur',true)}>Statistique revenue utilisateurr</a></li>
                              <li><i className="menu-icon fa fa-th"></i><a href="#" onClick={() => handleClick('formulaireStatVenteUser',true)}>Statistique rang de vente utilisateur</a></li>
                              <li><i className="menu-icon fa fa-th"></i><a href="#" onClick={() => handleClick('formulaireStatVente',true)}>Statistique commission des ventes</a></li>
                          </ul>
                      </li>

                      <li className="menu-title">Annonce</li>
                      <li>
                          <a href="#" onClick={() => handleClick('allAnnonce',true)}><i className="menu-icon fa fa-th"></i>validation annonce</a>
                      </li>
                  </ul>
              </div>
            </nav>
          </aside>
        </div>
      )}
      {/* <TableauDynamique tableName={'listeBoiteDeVitesse'} /> */}
      {renderComponent()}
    </div>
  );
}

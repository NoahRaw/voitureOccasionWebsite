// LeftPanel.js
import React from 'react';

const LeftPanel = () => (
  <aside id="left-panel" className="left-panel">
    <nav className="navbar navbar-expand-sm navbar-default">
        <div id="main-menu" className="main-menu collapse navbar-collapse">
            <ul className="nav navbar-nav">
                <li className="active">
                    <a href="index.jsp"><i className="menu-icon fa fa-laptop"></i>Dashboard </a>
                </li>
                
                <li className="menu-item-has-children dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-table"></i>Insertion</a>
                    <ul className="sub-menu children dropdown-menu">
                        <li><i className="fa fa-table"></i><a href="insertActivite.jsp">Insertion carburant</a></li>
                        <li><i className="fa fa-table"></i><a href="insertBouquet.jsp">Insertion marque</a></li>
                        <li><i className="fa fa-table"></i><a href="insertBouquetActivite.jsp">Insertion commission</a></li>
                    </ul>
                </li>

                <li className="menu-item-has-children dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-th"></i>Liste</a>
                    <ul className="sub-menu children dropdown-menu">
                        <li><i className="menu-icon fa fa-th"></i><a href="listeBouquetActivite.jsp">Liste marques</a></li>
                        <li><i className="menu-icon fa fa-th"></i><a href="filtreActivite.jsp">Liste des car</a></li>
                            <li><i className="menu-icon fa fa-th"></i><a href="ListeVoyage">Liste des voyages</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>
  </aside>
);

export default LeftPanel;

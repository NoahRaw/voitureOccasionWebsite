const liste = [
    {
      tableauId : 'listeBoiteDeVitesse',
      tableuTitle : 'Liste des boite de vitesse',
      lien : 'http://localhost:52195/Boitedevitesse',
      listColonne : 
      [
        {
          name : 'Description',
          value : 'description',
        } 
      ]
    },
    {
        tableauId : 'listepuissance',
        tableuTitle : 'Liste des puissance',
      lien : 'http://localhost:52195/Puissance',
      listColonne : 
      [
        {
          name : 'kw',
          value : 'kw',
        },     
        {
          name : 'cv',
          value : 'cv',
        }  
      ]
    },
    {
        tableauId : 'listModele',
        tableuTitle : 'Liste des modeles',
      lien : 'http://localhost:52195/Modele',
      listColonne : 
      [
        {
          name : 'Description',
          value : 'description',
        }
      ]
    },
    {
      tableauId : 'listCarburant',
      tableuTitle : 'Liste de tous les carburants',
      lien : 'http://localhost:52195/Carburant',
      listColonne : 
      [
        {
          name : 'Description',
          value : 'description',
        }
      ]
    },
    {
      tableauId : 'listMarque',
      tableuTitle : 'Liste des marques',
      lien : 'http://localhost:52195/Marque',
      listColonne : 
      [
        {
          name : 'Description',
          value : 'description',
        }
      ]
    }
    ,
    {
      tableauId : 'listTypevehicule',
      tableuTitle : 'Liste type de vehicule',
      lien : 'http://localhost:52195/typeDeVehicules',
      listColonne : 
      [
        {
          name : 'description',
          value : 'description',
        }
      ]
    },
    {
      tableauId : 'listUtilisateur',
      tableuTitle : 'Liste des utilisateur',
      lien : 'http://localhost:52195/Utilisateurs',
      listColonne : 
      [
        {
          name : 'Nom utilisateur',
          value : 'nomutilisateur',
        },
        {
          name : 'email',
          value : 'email',
        },
      ]
    },

    {
      tableauId : 'listVoitureDefini',
      tableuTitle : 'Liste des voiture definis',
      lien : 'http://localhost:52195/Voituredefini_view',
      listColonne : 
      [
        {
          name : 'marque',
          value : 'nommarque',
        },
        {
          name : 'modele',
          value : 'nommodele',
        },
        {
          name : 'carburant',
          value : 'nomcarburant',
        },
        {
          name : 'kw',
          value : 'kw',
        },
        {
          name : 'cv',
          value : 'cv',
        },
        {
          name : 'boite de vitesse',
          value : 'nomboitedevitesse',
        },
        {
          name : 'type de vehicule',
          value : 'nomtypedevehicule',
        },
        {
          name : 'puissance',
          value : 'puissance',
        },
        {
          name : 'nombre de porte',
          value : 'nbrporte',
        }
      ]
    }
  ]

  export default liste;
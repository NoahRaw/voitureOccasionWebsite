const liste = [
    {
      tableauId : 'listeBoiteDeVitesse',
      tableuTitle : 'Liste des boite de vitesse',
      lien : 'https://voitureoccasion-production.up.railway.app/Boitedevitesse',
      nomColonneId : 'idboitedevitesse',
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
      lien : 'https://voitureoccasion-production.up.railway.app/Puissance',
      nomColonneId : 'idpuissance',
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
      lien : 'https://voitureoccasion-production.up.railway.app/Modele',
      nomColonneId : 'idmodele',
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
      lien : 'https://voitureoccasion-production.up.railway.app/Carburant',
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
      lien : 'https://voitureoccasion-production.up.railway.app/Marque',
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
      lien : 'https://voitureoccasion-production.up.railway.app/typeDeVehicules',
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
      lien : 'https://voitureoccasion-production.up.railway.app/Utilisateurs',
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
      lien : 'https://voitureoccasion-production.up.railway.app/Voituredefini_view',
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
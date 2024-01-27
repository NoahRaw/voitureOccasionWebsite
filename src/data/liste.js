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
  ]

  export default liste;
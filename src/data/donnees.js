  const formulaire = [
    {
      formulaireId : 'boiteDeVitesse',
      formulaireTitle : 'Insertion de boite de vitesse',
      jsonValue : 
      {
        idboitedevitesse: 0,
        description: '',
      },
      lien : 'http://localhost:52195/Boitedevitesse',
      listInput : 
      [
        {
          name : 'description',
          type : 'text',
        }       
      ]
    },
    {
      formulaireId : 'puissance',
      formulaireTitle : 'Insertion de puissance',
      jsonValue : 
      {
        idpuissance: 0,
        kw: 1.0,
        cv: 2.0
      },
      lien : 'http://localhost:52195/Puissance',
      listInput : 
      [
        {
          name : 'kw',
          type : 'number',
        },     
        {
          name : 'cv',
          type : 'number',
        }  
      ]
    },
    {
      formulaireId : 'modele',
      formulaireTitle : 'Insertion de boite de modele',
      jsonValue : 
      {
        idmodele: 0,
        description: ''      
      },
      lien : 'http://localhost:52195/Modele',
      listInput : 
      [
        {
          name : 'description',
          type : 'text',
        }       
      ]
    }
  ]

  export default formulaire;
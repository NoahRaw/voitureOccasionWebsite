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
    },
    {
      formulaireId : 'carburant',
      formulaireTitle : 'Insertion de carburant',
      jsonValue : 
      {
        // idCarburant: 0,
        description: '',
      },
      lien : 'http://localhost:52195/Carburant',
      listInput : 
      [
        {
          name : 'description',
          type : 'text',
        }       
      ]
    },
    {
      formulaireId : 'comission',
      formulaireTitle : 'Insertion de comission',
      jsonValue : 
      {
        date : '',
        pourcentage : 0,
      },
      lien : 'http://localhost:52195/Commission',
      listInput : 
      [
        {
          name : 'date',
          type : 'date',
        },  
        {
          name : 'pourcentage',
          type : 'number',
        }
      ]
    },
    {
      formulaireId : 'marque',
      formulaireTitle : 'Insertion de marque',
      jsonValue : 
      {
        description : "",
      },
      lien : 'http://localhost:52195/Marque',
      listInput : 
      [
        {
          name : 'description',
          type : 'text',
        }
      ]
    },
    {
      formulaireId : 'typevehicule',
      formulaireTitle : 'Insertion de type de vehicule',
      jsonValue : 
      {
        idTypeDeVehicule: 0,
        description: '',
      },
      lien : 'http://localhost:52195/typeDeVehicules',
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
  const formulaire = [
    {
      formulaireId : 'boiteDeVitesse',
      formulaireTitle : 'Insertion de boite de vitesse',
      jsonValue : 
      {
        idboitedevitesse: 0,
        description: '',
      },
      lien : 'https://voitureoccasion-production.up.railway.app/Boitedevitesse',
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
      lien : 'https://voitureoccasion-production.up.railway.app/Puissance',
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
      lien : 'https://voitureoccasion-production.up.railway.app/Modele',
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
      lien : 'https://voitureoccasion-production.up.railway.app/Carburant/create',
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
      lien : 'https://voitureoccasion-production.up.railway.app/Commission/create',
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
      lien : 'https://voitureoccasion-production.up.railway.app/Marque/create',
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
      lien : 'https://voitureoccasion-production.up.railway.app/typeDeVehicules',
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
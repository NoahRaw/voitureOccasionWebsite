  const formulaire = [
    {
      formulaireId : 'bd',
      formulaireTitle : 'Insertion de description',
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
      formulaireId : 'bc',
      formulaireTitle : 'Insertion de description 2',
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
      formulaireId : 'be',
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
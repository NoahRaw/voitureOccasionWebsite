  const formulaire = [
    {
      formulaireId : 'bd',
      formulaireTitle : 'Insertion de description',
      jsonValue : 
      {
        idboitedevitesse : 0,
        description: 'bobo',
      },
      lien : 'http://localhost:52195/Boitedevitesse',
      listInput : 
      [
        {
          name : 'description',
          type : 'select',
          lienDonnees: 'http://localhost:52195/Boitedevitesse',
          optionValue:
          {
            mainValue : "idboitedevitesse",
            frontValue : "description"
          }
        },
        {
          name : 'puissance',
          type : 'checkbox',
          lienDonnees: 'http://localhost:52195/Puissance',
          optionValue:
          {
            mainValue : "idpuissance",
            frontValue : "kw"
          }
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
    }
  ]

  export default formulaire;
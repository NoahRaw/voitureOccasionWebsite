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
      formulaireId : 'f1',
      formulaireTitle : 'sign up',
      jsonValue : 
      {
        email: '',
        mdp: '',
      },
      lien : 'http://localhost:52195/Utilisateur/create',
      listInput : 
      [
        {
          name : 'email',
          type : 'text',
        },
        {
          name : 'mot de passe',
          type : 'text',
        }          
      ]
    }
  ]

  export default formulaire;
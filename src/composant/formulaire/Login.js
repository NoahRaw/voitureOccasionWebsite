import React, { useState } from 'react';

const AuthComponent = () => {
  const [token, setToken] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('URL_DU_WEBSERVICE/authenticate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: 'votre_nom_utilisateur',
          password: 'votre_mot_de_passe',
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const authToken = data.token; // Assurez-vous d'adapter cela à la structure de la réponse du service web
        setToken(authToken);

        // Stockage dans le localStorage
        localStorage.setItem('authToken', authToken);
      } else {
        console.error('Erreur lors de l\'authentification');
      }
    } catch (error) {
      console.error('Erreur lors de la requête HTTP:', error);
    }
  };

  return (
    <div>
      <h1>Authentification</h1>
      <button onClick={handleLogin}>Se connecter</button>
      {token && <p>Token : {token}</p>}
    </div>
  );
};

export default AuthComponent;

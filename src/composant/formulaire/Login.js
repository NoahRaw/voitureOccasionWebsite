import React, { useState } from 'react';

const AuthComponent = () => {
  const [token, setToken] = useState('');
  const [login, setLogin] = useState('');
  const [pwd, setPwd] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:52195/Utilisateurs/authenticate?login=${login}&pwd=${pwd}`, {
        method: 'GET',
      });

      if (response.ok) {
        const data = await response.text();
        const authToken = data; // Assurez-vous d'adapter cela à la structure de la réponse du service webi
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
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>Identification</label>
          <input
            type="mail"
            onChange={(e) => setLogin(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            onChange={(e) => setPwd(e.target.value)}
          />
        </div>
        <button type="submit">Se connecter</button>
      </form>
      {token && console.log(token)}
    </div>
  );
};

export default AuthComponent;

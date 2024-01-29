import React, { useState } from 'react';
import '../../css/Login.css'

const AuthComponent = ({setIsConnected}) => {
  const [token, setToken] = useState('');
  const [login, setLogin] = useState('admin@gmail.com');
  const [pwd, setPwd] = useState('0000');

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch(`http://localhost:52195/Utilisateurs/authenticateAdmin?login=${login}&pwd=${pwd}`, {
        method: 'GET',
      });

      if (response.ok) {
        const data = await response.text();
        const authToken = data; // Assurez-vous d'adapter cela à la structure de la réponse du service webi
        if(authToken){
            setToken(authToken);
            localStorage.setItem('authToken', authToken);
            setIsConnected(true);
        }

        // Stockage dans le localStorage
        console.log(authToken)
      } else {
        console.error('Erreur lors de l\'authentification');
      }
    } catch (error) {
      console.error('Erreur lors de la requête HTTP:', error);
    }
  };

  return (
    <div>
    <section className="inscription_section" >
      <div id="content">
        <div className="row justify-content-center">
          <div className="text-center">
            <h2 className="heading">
              Login
            </h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="formulaire">
            <div className="padding-0">
              <div className="row justify-content-center">
                <div id="login-form">
                  <form onSubmit={handleLogin}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="login" value={login} onChange={(e) => setLogin(e.target.value)} className="input" required /><br />
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password"  value={pwd} onChange={(e) => setPwd(e.target.value)} className="input" required /><br />
                    <button type="submit" id="submit-btn">Valider</button>
                  </form>
                  {token && console.log(token)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default AuthComponent;

import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';  

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('https://api.tiburoncin.lat/22119/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      const data = await response.json();
      if (response.ok) {
        login({ username }, data.token);  
        navigate('/endpoints'); 
      } else {
        throw new Error(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Error al iniciar sesión, por favor verifica tus credenciales e inténtalo de nuevo.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form form-login">
      <fieldset>
        <legend>Please, enter your username and password for login.</legend>
        <div className="input-block">
          <label htmlFor="login-username">Username</label>
          <input
            id="login-username"
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required 
          />
        </div>
        <div className="input-block">
          <label htmlFor="login-password">Password</label>
          <input
            id="login-password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required 
          />
        </div>
        <button type="submit" className="btn-login">Login</button>
      </fieldset>
    </form>
  );
}

export default LoginForm;

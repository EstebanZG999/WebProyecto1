import React, { useState } from 'react';

function LoginForm({ onLogin }) {
  const [email, setEmail] = useState('');  // Asegúrate de que este estado se maneja correctamente
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin({ username: email, password });  // Aquí pasas el email como 'username'
  };

  return (
    <form onSubmit={handleSubmit} className="form form-login">
      <fieldset>
        <legend>Please, enter your email and password for login.</legend>
        <div className="input-block">
          <label htmlFor="login-email">E-mail</label>
          <input
            id="login-email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}  // Asegúrate de que esto actualiza correctamente el estado
            required
          />
        </div>
        <div className="input-block">
          <label htmlFor="login-password">Password</label>
          <input
            id="login-password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}  // Asegúrate de que esto actualiza correctamente el estado
            required
          />
        </div>
      </fieldset>
      <button type="submit" className="btn-login">Login</button>
    </form>
  );
}

export default LoginForm;

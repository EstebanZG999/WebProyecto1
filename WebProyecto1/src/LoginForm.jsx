import React from 'react';

function LoginForm({ isActive }) {
  return (
    <form className={`form form-login ${isActive ? 'is-active' : ''}`}>
      <fieldset>
        <legend>Please, enter your email and password for login.</legend>
        <div className="input-block">
          <label htmlFor="login-email">E-mail</label>
          <input id="login-email" type="email" required />
        </div>
        <div className="input-block">
          <label htmlFor="login-password">Password</label>
          <input id="login-password" type="password" required />
        </div>
      </fieldset>
      <button type="submit" className="btn-login">Login</button>
    </form>
  );
}

export default LoginForm;

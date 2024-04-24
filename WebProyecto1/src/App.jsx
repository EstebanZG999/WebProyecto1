import React from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import './App.css'; // Asegúrate de importar tus estilos aquí

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeForm: 'login'
    };
  }

  setActiveForm = (formName) => {
    this.setState({ activeForm: formName });
  }

  render() {
    const { activeForm } = this.state;
    return (
      <div className="forms-section">
        <h1 className="section-title">Animated Forms</h1>
        <div className="forms">
          <div className={`form-wrapper ${activeForm === 'login' ? 'is-active' : ''}`}>
            <button type="button" className="switcher switcher-login" onClick={() => this.setActiveForm('login')}>
              Login
              <span className="underline"></span>
            </button>
            <LoginForm isActive={activeForm === 'login'} />
          </div>
          <div className={`form-wrapper ${activeForm === 'signup' ? 'is-active' : ''}`}>
            <button type="button" className="switcher switcher-signup" onClick={() => this.setActiveForm('signup')}>
              Sign Up
              <span className="underline"></span>
            </button>
            <SignupForm isActive={activeForm === 'signup'} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

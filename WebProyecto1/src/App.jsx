import React from 'react';
import LoginForm from './LoginForm';
import Header from './Header';
import Footer from './Footer';
import Posts from './Posts';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false, // Estado para controlar si el usuario está autenticado
    };
  }

  handleLogin = ({ username, password }) => {
    const DUMMY_CREDENTIALS = {
      username: 'admin@123',
      password: 'admin'
    };

    if (username === DUMMY_CREDENTIALS.username && password === DUMMY_CREDENTIALS.password) {
      this.setState({ isAuthenticated: true });
    } else {
      alert('Credenciales incorrectas');
    }
  };

  render() {
    const { isAuthenticated } = this.state;
    const isAdminRoute = window.location.pathname === '/admin';

    return (
      <div className="app-container">
        <Header />
        {isAdminRoute && !isAuthenticated ? (
          <div className="login-container">  {/* Este div es el nuevo contenedor centrado */}
            <div className="forms-section">
              <h1 className="section-title">Login para Administradores</h1>
              <LoginForm onLogin={this.handleLogin} isActive={true} />
            </div>
          </div>
        ) : (
          <>
            <Posts />
            <Footer />
          </>
        )}
      </div>
    );
    
  }
}

export default App;

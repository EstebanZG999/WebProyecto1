import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Posts from './Posts';
import LoginForm from './LoginForm';
import CrudPage from './CrudPage';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (navigate, { username, password }) => {
    console.log(`Username: ${username}, Password: ${password}`); // Esto mostrará en consola los valores ingresados.
  
    const DUMMY_CREDENTIALS = {
      username: 'admin@123',
      password: 'admin'
    };
  
    if (username === DUMMY_CREDENTIALS.username && password === DUMMY_CREDENTIALS.password) {
      setIsAuthenticated(true);
      navigate('/endpoints'); // Redirige al usuario a la ruta de CRUD
    } else {
      alert('Credenciales incorrectas');
    }
  };
  
  

  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/admin" element={<LoginFormWrapper onLogin={handleLogin} isAuthenticated={isAuthenticated} />} />
          <Route path="/endpoints" element={<CrudPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

function LoginFormWrapper({ onLogin, isAuthenticated }) {
  const navigate = useNavigate();  // Asegúrate de que useNavigate está siendo usado correctamente dentro de un componente.
  return isAuthenticated ? <Navigate replace to="/endpoints" /> : <LoginForm onLogin={(credentials) => onLogin(navigate, credentials)} />;
}

export default App;

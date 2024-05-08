import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth,isTokenExpired } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!user || (token && isTokenExpired(token))) {
      logout();  
      navigate('/admin');
    }
  }, [user, navigate, logout]);

  if (!user) {
    return <Navigate to="/admin" />;
  }

  return children;
};

export default ProtectedRoute;

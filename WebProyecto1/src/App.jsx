import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ProtectedRoute from './ProtectedRoute';
import { AuthProvider } from '../context/AuthContext';
import './App.css';

// Componentes cargados de manera perezosa
const Posts = lazy(() => import('./Posts'));
const LoginForm = lazy(() => import('./LoginForm'));
const CrudPage = lazy(() => import('./CrudPage'));

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="app-container">
          <Header />
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Posts />} />
              <Route path="/admin" element={<LoginForm />} />
              <Route path="/endpoints" element={
                <ProtectedRoute>
                  <CrudPage />
                </ProtectedRoute>
              } />
            </Routes>
          </Suspense>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;

import React from 'react';

export default function Header() {
    const styles = {
      padding: '20px 0',
      backgroundColor: 'rgba(255,255,255,0.2)', 
      color: '#fff', 
      boxShadow: '0 2px 4px rgba(0,0,0,0.3)', 
      textShadow: '1px 1px 2px black', 
      width: '100%', 
      textAlign: 'center', 
    };
    
    return (
      <header style={styles}>
        BIENVENIDO A MI BLOG DE POWERLIFTING
      </header>
    );
}

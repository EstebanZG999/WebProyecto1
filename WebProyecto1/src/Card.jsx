import React from 'react';
import PropTypes from 'prop-types'; // Asegúrate de haber instalado prop-types con npm o yarn

export default function Card({ title, content, competitor_name, top_squat, top_bench, top_deadlift, category }) {
    const defaultImageUrl = "https://hips.hearstapps.com/hmg-prod/images/powerlifter-with-strong-arms-lifting-weights-royalty-free-image-595768514-1546267269.jpg";
    const cardStyle = {
      margin: '10px',
      backgroundColor: '#bab4b4',
      borderRadius: '10px',
      boxShadow: '0 2px 20px rgba(0, 0, 0, 0.2)',
      overflow: 'hidden',
      width: '300px', 
      fontFamily: '"Roboto", sans-serif',
    };
    const cardHeaderStyle = {
      width: '100%',
      height: '200px', 
      objectFit: 'cover', 
    };
    const cardBodyStyle = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      padding: '20px',
      minHeight: '250px',
      color: '#fff', // Cambia esto al color deseado que contraste con el fondo
      alignItems: 'center', // Cambia a 'center' para alinear ho
    };
    const tagStyle = {
      background: '#9a9999',
      borderRadius: '50px',
      fontSize: '12px',
      margin: '0',
      color: '#fff',
      padding: '2px 10px',
      textTransform: 'uppercase',
      cursor: 'pointer',
    };
    
    const categoryStyles = {
      teal: { backgroundColor: '#47bcd4' },
      purple: { backgroundColor: '#5e76bf' },
      pink: { backgroundColor: '#cd5b9f' },
    };
    const getCategoryStyle = (category) => {
      const lowerCaseCategory = category.toLowerCase();
      return categoryStyles[lowerCaseCategory] || tagStyle;
    };

    return (
      <div style={cardStyle}>
        <div className="card-header">
          <img src={defaultImageUrl} alt="Powerlifting" style={cardHeaderStyle} />
        </div>
        <div className="card-body" style={cardBodyStyle}>
          <span style={{...tagStyle, ...getCategoryStyle(category)}}>Categoría {category}</span>
          <h4>{title}</h4>
          <p>{content}</p>
          <div className="user-info">
            <p>Competidor: {competitor_name}</p>
            <p>Top Squat: {top_squat}</p>
            <p>Top Bench: {top_bench}</p>
            <p>Top Deadlift: {top_deadlift}</p>
          </div>
        </div>
      </div>
    );
  };


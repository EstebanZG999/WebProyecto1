import React from 'react';
import PropTypes from 'prop-types';

export default function Post({
  title, content, competitor_name, top_squat, top_bench, top_deadlift, category
}) {
    const defaultImageUrl = "https://hips.hearstapps.com/hmg-prod/images/powerlifter-with-strong-arms-lifting-weights-royalty-free-image-595768514-1546267269.jpg"; 
    const tagClasses = `tag ${category.toLowerCase()}`;

    return (
        <div className="card">
        <div className="card-header">
            <img src={defaultImageUrl} alt="Default" />
        </div>
        <div className="card-body">
            <span className={tagClasses}>Category {category} </span> 
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

Post.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    competitor_name: PropTypes.string.isRequired,
    top_squat: PropTypes.string.isRequired,
    top_bench: PropTypes.string.isRequired,
    top_deadlift: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired
};

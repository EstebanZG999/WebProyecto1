import React, { useState, useEffect } from 'react';
import Card from './Card';

export default function Posts() {
    const containerStyle = {
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center', 
        flexWrap: 'wrap', 
        height: '100%', 
    };
    const [posts, setPosts] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true); 

    const getPosts = async () => {
        setIsLoading(true); 
        try {
            const apiResponse = await fetch('https://api.tiburoncin.lat/22119/posts');
            if (!apiResponse.ok) {
                throw new Error(`HTTP error! Status: ${apiResponse.status}`);
            }
            const jsonPosts = await apiResponse.json();
            setPosts(jsonPosts);
        } catch (error) {
            console.error("Error fetching posts:", error);
            
        } finally {
            setIsLoading(false); 
        }
    };

    React.useEffect(() => {
        getPosts();
    }, []);

    if (isLoading) {
        return <div>Cargando...</div>;
    }

    if (!isLoading && posts.length === 0) {
        
        return <div>No hay posts disponibles.</div>;
    }

    return (
        <div style={containerStyle}>
            {posts.map((post, index) => (
                <Card key={index} {...post} />
            ))}
        </div>
    );
};
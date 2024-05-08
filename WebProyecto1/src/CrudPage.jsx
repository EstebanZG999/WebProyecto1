import React, { useState, useEffect } from 'react';
import { getPosts, createPost, updatePost, deletePost } from '../api/api';
import './App.css'; 

function CrudPage() {
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState({
        title: '',
        content: '',
        competitorName: '',
        topSquat: '',
        topBench: '',
        topDeadlift: '',
        category: ''
    });
    const [updatePostInfo, setUpdatePostInfo] = useState({
        id: '',
        title: '',
        content: '',
        competitorName: '',
        topSquat: '',
        topBench: '',
        topDeadlift: '',
        category: ''
    });

    useEffect(() => {
      async function fetchPosts() {
        try {
          const fetchedPosts = await getPosts();
          if (fetchedPosts && Array.isArray(fetchedPosts)) {
            setPosts(fetchedPosts);
          }
        } catch (error) {
          console.error('Error fetching posts:', error);
        }
      }
  
      fetchPosts();
    }, []);

    const handleInputChange = (event, isUpdate = false) => {
        const { name, value } = event.target;
        if (isUpdate) {
            setUpdatePostInfo(prev => ({ ...prev, [name]: value }));
        } else {
            setNewPost(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleCreatePost = async (event) => {
        event.preventDefault();
        try {
            const created = await createPost(newPost);
            setPosts([...posts, created]);
            setNewPost({ title: '', content: '', competitorName: '', topSquat: '', topBench: '', topDeadlift: '', category: '' });
            alert('Publicación creada con éxito.');
        } catch (error) {
            console.error('Error creating post:', error);
            alert('Error al crear la publicación: ' + error.message);
        }
    };

    const handleUpdatePost = async (event) => {
        event.preventDefault();
        try {
            const updated = await updatePost(updatePostInfo.id, updatePostInfo);
            setPosts(posts.map(post => post.id === updatePostInfo.id ? updated : post));
            setUpdatePostInfo({ id: '', title: '', content: '', competitorName: '', topSquat: '', topBench: '', topDeadlift: '', category: '' });
            alert('Publicación actualizada con éxito.');
        } catch (error) {
            console.error('Error updating post:', error);
            alert('Error al actualizar la publicación: ' + error.message);
        }
    };

    const handleDeletePost = async (id) => {
        try {
            setPosts(posts.filter(post => post.id !== id));
            await deletePost(id);
            alert('Publicación eliminada con éxito.');
        } catch (error) {
            console.error('Error deleting post:', error);
            alert('Error al eliminar la publicación: ' + error.message);
        }
    };

    return (
        <div className="crud-page">
            {/* Formulario para crear nueva publicación */}
            <h2>Crear Nueva Publicación</h2>
            <form onSubmit={handleCreatePost} className="form">
                <div className="input-block">
                    <label htmlFor="title">Título</label>
                    <input type="text" id="title" name="title" value={newPost.title} onChange={e => handleInputChange(e)} required />
                </div>
                <div className="input-block">
                    <label htmlFor="content">Contenido</label>
                    <textarea id="content" name="content" value={newPost.content} onChange={e => handleInputChange(e)} required />
                </div>
                <div className="input-block">
                    <label htmlFor="competitorName">Nombre del Competidor</label>
                    <input type="text" id="competitorName" name="competitorName" value={newPost.competitorName} onChange={e => handleInputChange(e)} required />
                </div>
                <div className="input-block">
                    <label htmlFor="topSquat">Top Squat</label>
                    <input type="text" id="topSquat" name="topSquat" value={newPost.topSquat} onChange={e => handleInputChange(e)} required />
                </div>
                <div className="input-block">
                    <label htmlFor="topBench">Top Bench Press</label>
                    <input type="text" id="topBench" name="topBench" value={newPost.topBench} onChange={e => handleInputChange(e)} required />
                </div>
                <div className="input-block">
                    <label htmlFor="topDeadlift">Top Deadlift</label>
                    <input type="text" id="topDeadlift" name="topDeadlift" value={newPost.topDeadlift} onChange={e => handleInputChange(e)} required />
                </div>
                <div className="input-block">
                    <label htmlFor="category">Categoría</label>
                    <input type="text" id="category" name="category" value={newPost.category} onChange={e => handleInputChange(e)} required />
                </div>
                <button type="submit">Crear Publicación</button>
            </form>

            {/* Formulario para actualizar publicación */}
            <h2>Actualizar Publicación</h2>
            <form onSubmit={handleUpdatePost} className="form">
                <div className="input-block">
                    <label htmlFor="id">ID del Post</label>
                    <input type="number" id="id" name="id" value={updatePostInfo.id} onChange={e => handleInputChange(e, true)} required />
                </div>
                <div className="input-block">
                    <label htmlFor="title">Nuevo Título</label>
                    <input type="text" id="title" name="title" value={updatePostInfo.title} onChange={e => handleInputChange(e, true)} required />
                </div>
                <div className="input-block">
                    <label htmlFor="competitorName">Nombre del Competidor</label>
                    <input type="text" id="competitorName" name="competitorName" value={updatePostInfo.competitorName} onChange={e => handleInputChange(e, true)} required />
                </div>
                <div className="input-block">
                    <label htmlFor="topSquat">Top Squat</label>
                    <input type="text" id="topSquat" name="topSquat" value={updatePostInfo.topSquat} onChange={e => handleInputChange(e, true)} required />
                </div>
                <div className="input-block">
                    <label htmlFor="topBench">Top Bench Press</label>
                    <input type="text" id="topBench" name="topBench" value={updatePostInfo.topBench} onChange={e => handleInputChange(e, true)} required />
                </div>
                <div className="input-block">
                    <label htmlFor="topDeadlift">Top Deadlift</label>
                    <input type="text" id="topDeadlift" name="topDeadlift" value={updatePostInfo.topDeadlift} onChange={e => handleInputChange(e, true)} required />
                </div>
                <div className="input-block">
                    <label htmlFor="category">Categoría</label>
                    <input type="text" id="category" name="category" value={updatePostInfo.category} onChange={e => handleInputChange(e, true)} required />
                </div>
                <button type="submit">Actualizar Publicación</button>
            </form>


            <h2>Listado de Publicaciones</h2>
              {posts.map(post => (
                <div key={post.id || Math.random()}>  {/* Utiliza Math.random() como fallback para evitar errores */}
                  <h3>{post.title}</h3>
                  <p>{post.content}</p>
                  <p>Competidor: {post.competitor_name}</p>
                  <p>Top Squat: {post.top_squat}</p>
                  <p>Top Bench: {post.top_bench}</p>
                  <p>Top Deadlift: {post.top_deadlift}</p>
                  <p>Categoría: {post.category}</p>
                  <button onClick={() => handleDeletePost(post.id)}>Eliminar</button>
                  <button onClick={() => setUpdatePostInfo({...post})}>Cargar para actualizar</button>
                </div>
            ))}
        </div>
    );
}

export default CrudPage;

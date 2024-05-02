import React, { useState, useEffect } from 'react';
import { getPosts } from '../api/api';

function PostsComponent() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const fetchedPosts = await getPosts();
        setPosts(fetchedPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    }

    fetchPosts();
  }, []);

  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <h3>{post.category}</h3>
          <p>Competidor: {post.competitorName}</p>
          <p>Top Squat: {post.topSquat}</p>
          <p>Top Bench: {post.topBench}</p>
          <p>Top Deadlift: {post.topDeadlift}</p>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default PostsComponent;

const API_BASE_URL = 'https://api.tiburoncin.lat/22119/posts';

async function fetchWithAuth(url, options = {}) {
  const token = localStorage.getItem('token');
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(url, { ...options, headers });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

export const getPosts = async () => {
  return fetchWithAuth(`${API_BASE_URL}`);
};

export const createPost = async (postData) => {
  return fetchWithAuth(`${API_BASE_URL}`, {
    method: 'POST',
    body: JSON.stringify(postData),
  });
};

export const updatePost = async (id, postData) => {
  return fetchWithAuth(`${API_BASE_URL}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(postData),
  });
};

export const deletePost = async (id) => {
  return fetchWithAuth(`${API_BASE_URL}/${id}`, {
    method: 'DELETE',
  });
};

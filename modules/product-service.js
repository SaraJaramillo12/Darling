const API_URL = 'http://localhost:3000';

export const getProductById = (id) => {
  return fetch(`${API_URL}/productos?id=${id}`).then((res) => res.json());
};

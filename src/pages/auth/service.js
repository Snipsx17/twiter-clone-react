import client from '../../api/client';
import storage from '../../utils/storage.js';

const login = async (credentials) => {
  //const response = await client.post('/api/login', credentials);
  return await client.post('/auth/login', credentials).then((response) => {
    setAuthorization(response.accessToken);
    storage.set('token', response.accessToken);
  });
};

export const logout = () => {
  removeAuthorization();
  storage.remove('token');
};

const setAuthorization = (token) =>
  (client.defaults.headers.common['Authorization'] = `Bearer ${token}`);

const removeAuthorization = () =>
  delete client.defaults.headers.common['Authorization'];

export default login;

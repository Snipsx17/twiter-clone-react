import axios from 'axios';
// preparo la consulta
const client = axios.create({ baseURL: process.env.REACT_APP_BASE_URL_API });
// devuelve solo los datos de la consulta
client.interceptors.response.use((response) => response.data);

export default client;

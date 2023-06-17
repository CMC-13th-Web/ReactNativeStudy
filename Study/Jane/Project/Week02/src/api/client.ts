import axios from 'axios';

const baseURL = 'https://yts.mx/api/v2';

const client = axios.create({
  baseURL,
});

export default client;

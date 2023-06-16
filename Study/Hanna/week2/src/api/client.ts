import axios from 'axios';

const BASE_URL = 'https://yts.mx/api/v2';

const client = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default client;

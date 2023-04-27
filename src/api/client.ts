import axios from 'axios';

axios.defaults.baseURL = `https://chatgm-backend-nestjs-development.up.railway.app/api`;

export const axiosClient = axios.create();

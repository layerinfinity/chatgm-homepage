import axios from 'axios';
import { configs } from '~/configs';

export const axiosClient = axios.create({
  baseURL: configs.API_URL,
});

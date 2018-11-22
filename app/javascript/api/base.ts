import axios from 'axios';

export const BASE_URL = base_url();

function base_url() {
  return 'http://localhost:3000/';
}

const api = axios.create({
  baseURL: BASE_URL,
  headers: {}
});

(<any>window).api = api;

export default api;

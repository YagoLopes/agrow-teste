import axios from 'axios';
import { getToken } from "./auth";

const api = axios.create({
  baseURL: 'http://localhost:4000',
})

api.postOrPut = (url, id, data, config = {}) => {
  const method = id ? 'put' : 'post';
  const apiUrl = id ? `${url}/${id}` : url;

  return api[method](apiUrl, data, config);
};
api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.header.Autorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
import axios from "axios";
import { getToken } from "./auth";

const api = axios.create({
  baseURL: "http://127.0.0.1:3333"
});

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.header.Autorization = `Bearer ${token}`;
  }

  return config;
});
export default api;

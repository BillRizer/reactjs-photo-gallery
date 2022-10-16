import axios from "axios";

export const api = axios.create({
    baseURL: 'https://api.pexels.com/v1/',
    timeout: 1000,
  });
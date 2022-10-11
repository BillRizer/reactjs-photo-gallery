import axios from "axios";

export const api = axios.create({
    baseURL: 'https://api.pexels.com/v1/',
    timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
  });
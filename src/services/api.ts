import axios, { AxiosInstance } from 'axios';
import { BACKEND_URL } from 'helps/const';

const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  return api;
};

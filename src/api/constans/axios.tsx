import {AxiosRequestConfig} from 'axios';

export const axiosConfig: AxiosRequestConfig = {
  baseURL: '10.240.16.6:3000',
  timeout: 1000,

  headers: {
    'Content-Type': 'application/json',
  },
};

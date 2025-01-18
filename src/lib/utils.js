import axios from "axios";
import { clsx } from "clsx";
import toast from "react-hot-toast";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api/',
  timeout: 50000,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
    'x-Requested-With': 'XMLHttpRequest',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('key')
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {

    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (res) => {
    if(res?.data?.token){
      localStorage.setItem('key', res?.data?.token)
    }
    res?.data?.message && toast.success(res?.data?.message);
      return res?.data;
  },
  (error) => {
    const { response, message } = error || {};

    const errMsg = response?.data?.message || message ;
    toast.error(errMsg);
    const status = response?.status;
    if (status === 401) {
      // userStore.getState().actions.clearUserInfoAndToken();
    }
    return Promise.reject(error);
  },
);

class APIClient {
  get(config){
    return this.request({ ...config, method: 'GET' });
  }

  post(config) {
    return this.request({ ...config, method: 'POST' });
  }

  put(config){
    return this.request({ ...config, method: 'PUT' });
  }

  delete(config){
    return this.request({ ...config, method: 'DELETE' });
  }

  request(config){
    return new Promise((resolve, reject) => {
      axiosInstance
        .request(config)
        .then((res) => {
          resolve(res);
          return res;
        })
        .catch((e) => {
          reject(e);
        });
    });
  }
}
const apiClient = new APIClient();
export default apiClient;

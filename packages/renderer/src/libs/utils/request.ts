import axios, { AxiosResponse, AxiosRequestConfig } from "axios";

const service = axios.create({
  baseURL: process.env.NODE_ENV !== "production" ? '' : 'http://172.20.10.13:9000',
  timeout: 30000,
});

service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    config.timeout = config.timeout || 150000;
    config.data = config.data ?? {};
    config.data.timestamp = (Date.now() / 1000) | 1;
    config.data._method = config.method?.toLocaleUpperCase();
    if (config.data._method == "GET") {
    } else {
    }
    config.method = "POST";
    return config;
  },
  (error: any) => {
    Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response: AxiosResponse) => {
    const status = response.status;
    if (status !== 200) {
      if (status == 401) {
        if (location.hash == "#/") {
          return response;
        } else {
          location.href = "/#/";
        }
      }
      return Promise.reject("error");
    } else {
      const resCode = response.data.code;
      switch (resCode) {
        case 200:
          return response.data;
        case 300:
          break;
        case 400:
          return Promise.reject(response.data.msg);
        default:
          return response.data;
      }
      return response;
    }
  },
  (error: any) => {
    return Promise.reject(error);
  }
);
export default service;

import axios from "axios";
import { ROOT_URL } from "@/config/config";

const instance = axios.create({
  timeout: 1000,
});

instance.interceptors.request.use((config) => {
  // 请求数据拦截

  switch (import.meta.env.VITE_NODE_ENV) {
    case "production": {
      config.baseURL = ROOT_URL.prod;
      break;
    }
    case "test": {
      config.baseURL = ROOT_URL.test;
      break;
    }
    default: {
      config.baseURL = ROOT_URL.dev;
      break;
    }
  }

  return config;
});

instance.interceptors.response.use((res) => {
  // 针对接口返回数据处理
  if (res.status === 200 && res.statusText === "OK") {
    return Promise.resolve(res.data);
  } else {
    return Promise.reject(res.data);
  }
});
export default instance;

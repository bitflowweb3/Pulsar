import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import router from 'next/router';
import dotenv from 'dotenv'

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
const instance = axios.create({ baseURL });

// instance.interceptors.request.use(
//   async (config: AxiosRequestConfig) => {
//     const isClient = typeof window !== 'undefined';
//     if (config.headers && isClient) {
//     }
//     return config as InternalAxiosRequestConfig;
//   },
//   (error) => {
//     Promise.reject(error);
//   }
// );

// instance.interceptors.response.use(
//   (response) => response.data,
//   async (error: {
//     response: AxiosResponse;
//     config: AxiosRequestConfig & { retry: boolean };
//   }) => {
//     const originalRequest = error.config;
//     if (error.response?.status === 401 && !originalRequest.retry) {
//       originalRequest.retry = true;
//       if (error.response.config.url !== '/users/me') {
//         await router.push('/api/auth/logout');
//       }
//       return instance(originalRequest);
//     }
//     return Promise.reject(error);
//   }
// );

export const getConfig = (accessToken?: string) => ({
  withCredetials: false,
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});

const getHello = async (): Promise<any> => instance.get(`/hello`);
const getUser = async (accessToken?: string): Promise<string> =>
  instance.get('/auth/user', getConfig(accessToken));

const apiService = {
  api: {
    getHello,
  },
  secureApi: (accessToken?: string) => ({
    getUser: () => getUser(accessToken),
  }),
};
export default apiService;
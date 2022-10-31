import axios from 'axios';
import { API_KEY, MAIN_REQUEST_URL } from '../constants';
import { errorResponseManager } from '../utils';

// Base Url Prefix "/"
export const baseURL = `${MAIN_REQUEST_URL}`;



// Config
const config = {
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
};

// Instance
const axiosInstance = axios.create(config);

//  Interceptor Request
axiosInstance.interceptors.request.use(async config => {

  // const { token = '' } = store.getState().authUser || {};
  config.url = config.url + `?api_key=${API_KEY}&language=en-US`


  // if (token) {
  //   config.headers.Authorization = `Bearer ${token}`;

  //   // config.headers = {
  //   //   'Authorization': `Token ${token}`
  //   // }
  // }

  return config;
});

// on Ful Filled
const onFulFilled = async response => {
  return response.data;
};

// on Rejected
const onRejected = async error => {
  const { msg, status, data } = errorResponseManager(error);
  return Promise.reject({ msg, status, data });
};

//  Interceptor response
axiosInstance.interceptors.response.use(onFulFilled, onRejected);

export default axiosInstance;
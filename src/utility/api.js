import axios from 'axios';
import store from '../Redux/Store';
import {SET_TOKEN} from '../Redux/constants';

const api = axios.create({
  baseURL: 'https://tutor-tnyp.onrender.com/api/user/',
  //   timeout: 1000,
  headers: {'Content-Type': 'application/json'},
});

api.interceptors.request.use(
  function (config) {
    // Do something before request is sent

    console.log(config, 'coooooooooonfig');
    config.headers.Authorization = store.getState().auth.access_token;
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
api.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    console.log(error, 'somthig weng wrong');
    if (error.response.data.statusCode == 401)
      store.dispatch({type: SET_TOKEN, payload: null});
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  },
);

export default api;

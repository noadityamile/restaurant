require('./bootstrap');

import { createApp } from 'vue'
import router from './routes/index'
import VueSweetalert2 from 'vue-sweetalert2';
import axios from 'axios'

window.axios = axios
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.baseURL = 'http://localhost:8000/'

if (localStorage.getItem('token')) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`
  }

  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 401) {
        localStorage.removeItem('token')
        axios.defaults.headers.common['Authorization'] = 'Bearer'
        router.push({ name: 'login' })
      }

      return Promise.reject(error);
    }
  );

createApp({})
    .use(router)
    .use(VueSweetalert2)
    .mount('#app')

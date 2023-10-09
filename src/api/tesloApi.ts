import axios from 'axios';
import { authStore } from '../store/auth/auth.store';


const tesloApi = axios.create({
  baseURL: 'http://localhost:3000/api',
});


// add token to request header
tesloApi.interceptors.request.use(
  (config) => {
    
    // const token = localStorage.getItem('token');
    // const token = authStore.getState().token as string;
    const token =''; 


    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  }
);


export { tesloApi };



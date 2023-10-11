import axios from 'axios';




const tesloApi = axios.create({
  baseURL: 'http://localhost:3000/api'
});


// Todo: interceptors
// Leer el store de Zustand



export {
  tesloApi
}

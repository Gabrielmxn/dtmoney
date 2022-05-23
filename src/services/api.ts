import axios from 'axios'; //importaremos o Axioes

export const api = axios.create({  //Criaremos uma instância do Axios 
  baseURL: 'http://localhost:3000/api' //Url da Api
})
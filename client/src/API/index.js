import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8080/api/',
    timeout: 1000,
    headers: {'Access-Control-Allow-Origin': '*'}
  });

  export default instance
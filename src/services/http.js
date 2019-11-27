import Axios from "axios";

const http = Axios.create({
  baseURL: 'http://api.com.br',
});

export default http;
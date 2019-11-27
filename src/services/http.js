import Axios from "axios";

const Client = Axios.defaults = {
  baseURL: 'http://api.com.br',
};

export default Client;
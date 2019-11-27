import Axios from "axios";

const http = Axios.create({
  baseURL: 'http://ec2-18-216-80-203.us-east-2.compute.amazonaws.com:3000',
});

export default http;
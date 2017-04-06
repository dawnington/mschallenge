import axios from 'axios';

export default function getInstance(timeout = 10000, responseType = 'json') {
  return axios.create({
    timeout,
    responseType,
  });
}

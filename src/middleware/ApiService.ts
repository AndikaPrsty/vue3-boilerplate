import Axios from 'axios';
import {Endpoints} from './Endpoints';

const baseURL = Endpoints.baseUrl;

const axios = Axios.create({
  baseURL,
  timeout: 20000,
  timeoutErrorMessage: 'timeout',
});

export default axios;

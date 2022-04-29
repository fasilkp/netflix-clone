import axios from 'axios'
import {apiBaseUrl} from './urls'

const instance = axios.create({
    baseURL: apiBaseUrl
  });

export default instance
import { APP_CODE, SITE_ID } from '@constants/app';
import axios from 'axios';

export function setToken(token) {
  axios.defaults.headers.common['Authorization'] = token
    ? `Bearer ${token}`
    : '';
    axios.defaults.headers.common['App-Code'] = APP_CODE
    axios.defaults.headers.common['Site-Id'] = SITE_ID
}

export function clearToken() {
  axios.defaults.headers.common['Authorization'] = null;
  axios.defaults.headers.common['App-Code'] = null;
  axios.defaults.headers.common['Site-Id'] = null;
}

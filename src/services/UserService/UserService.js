import request from '@services/request';
import { API, API_URL_34, API_URL_35 } from '@constants/api';
import { formatString } from '@helpers/formatString';
import axios from 'axios';

export function requestGetUserInfo() {
  return axios.get(API.GET_USER_INFO).then((response) => {
    if (response.data) {
      return response.data.data;
    }
    return null;
  });
}
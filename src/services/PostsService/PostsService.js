import request from '@services/request';
import { API, API_URL_34, API_URL_35 } from '@constants/api';
import { formatString } from '@helpers/formatString';
import axios from 'axios';


export function getLinhVucApi(data) {
  request.get(API.GET_LINH_VUC).then((response) => {
    if (response.data) {
      return response.data;
    }
    return null;
  }).catch((error) => console.log(error));
}

export function getLatestPostsApi(data) {
  request.get(API.GET_LATEST_POSTS).then((response) => {
    if (response.data) {
      return response.data;
    }
    return null;
  }).catch((error) => console.log(error));
}

export function getHottestPostsApi(data) {
  request.get(API.GET_HOTTEST_POSTS).then((response) => {
    if (response.data) {
      return response.data;
    }
    return null;
  }).catch((error) => console.log(error));
}
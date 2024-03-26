import request from '@services/request';
import { API, API_URL_34, API_URL_35 } from '@constants/api';
import { formatString } from '@helpers/formatString';
import axios from 'axios';

export function getGuideApi(type, page,size) {
  return request.get(formatString(API.GET_HDSD, type, page, size)).then((response) => {
    if (response.data) {
      return response.data;
    }
    return null;
  }).catch((error) => console.log(error));
}

export function getGuideByIdApi(id) {
  return request.get(formatString(API.GET_HDSD_ID, id)).then((response) => {
    if (response.data) {
      return response.data;
    }
    return null;
  }).catch((error) => console.log(error));
}
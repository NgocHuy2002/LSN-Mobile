import request from '@services/request';
import { API, API_URL_34, API_URL_35 } from '@constants/api';
import { formatString } from '@helpers/formatString';
import axios from 'axios';


export function getLinhVucApi(data) {
  return request.get(API.GET_LINH_VUC).then((response) => {
    if (response.data) {
      return response.data;
    }
    return null;
  }).catch((error) => console.log(error));
}

export function getLatestPostsApi(data) {
  return request.get(API.GET_LATEST_POSTS).then((response) => {
    if (response.data) {
      return response.data;
    }
    return null;
  }).catch((error) => console.log(error));
}

export function getHottestPostsApi(data) {
  return request.get(API.GET_HOTTEST_POSTS).then((response) => {
    if (response.data) {
      return response.data;
    }
    return null;
  }).catch((error) => console.log(error));
}

export function getBaiVietTheoChuyenMucIdApi(id, page, size, params) {
  return request
    .get(formatString(API.GET_BAI_VIET_CHUYEN_MUC_ID, id, page || 1, size || 10), { params })
    .then((response) => {
      if (response.data) {
        return response.data.items;
      }
      return null;
    })
}

export function getBaiVietTheoChuyenMucApi(size) {
  return request
    .get(formatString(API.GET_BAI_VIET_CHUYEN_MUC, size))
    .then((response) => {
      if (response.data) {
        return response.data;
      }
      return null;
    })
}

export function getBaiVietTheoIdApi(id) {
  return request
    .get(formatString(API.GET_BAI_VIET_ID, id))
    .then((response) => {
      if (response.data) {
        return response.data;
      }
      return null;
    })
}
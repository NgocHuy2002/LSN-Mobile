export const API_URL_35 = 'http://10.168.4.231:5035';
export const API_URL_34 = 'http://10.168.4.231:5034';
// export const SOCKET_URL = 'wss://truysuat.thinklabs.com.vn';

export const API = {
  LOGIN: 'http://10.168.4.231:5035/connect/token',
  LOGOUT: 'http://10.168.4.231:5035/connect/endsession',
  REGISTER: 'http://10.168.4.231:5034/api/user-mobile/register',
  CHANGE_PASSWORD: 'http://10.168.4.231:5034/api/user-mobile/change-password',
  SEND_OTP_EMAIL: 'http://10.168.4.231:5034/api/user-mobile/send-email-otp',
  VERIFY_OTP_EMAIL: 'http://10.168.4.231:5034/api/user-mobile/verify-email-otp',
  FORGOT_PASSWORD: 'http://10.168.4.231:5034/api/user-mobile/forgot-password',
  // FORGOT_PASSWORD: 'http://10.168.4.231:5023/api/MobileAPI/get-list-linh-vuc',
  UPDATE_USER_INFO: 'http://10.168.4.231:5034/api/user-mobile/update',

  GET_CONTACT_CONTENTS: 'http://10.168.4.231:5023/api/MobileAPI/get-list-noi-dung-lien-he?PageNumber={0}&PageSize={1}',
  POST_CONTACT_CONTENTS: 'http://10.168.4.231:5023/api/MobileAPI/create-thong-tin-lien-he',

  // -------- BAI VIET API ----------------------------
  GET_LINH_VUC: 'http://10.168.4.231:5023/api/MobileAPI/get-list-linh-vuc?Type={0}&PageNumber={1}&PageSize={2}',
  GET_LATEST_POSTS: 'http://10.168.4.231:5023/api/MobileAPI/get-list-bai-viet-gan-nhat',
  GET_HOTTEST_POSTS: 'http://10.168.4.231:5023/api/MobileAPI/get-list-bai-viet-noi-bat',

  GET_BAI_VIET_ID: 'http://10.168.4.231:5023/api/MobileAPI/{0}',
  GET_LIST_CHUYEN_MUC: 'http://10.168.4.231:5023/api/MobileAPI/get-list-chuyen-muc',
  GET_BAI_VIET_CHUYEN_MUC: 'http://10.168.4.231:5023/api/MobileAPI/get-list-bai-viet-theo-chuyen-muc?Take={0}',
  GET_BAI_VIET_CHUYEN_MUC_ID: 'http://10.168.4.231:5023/api/MobileAPI/get-list-bai-viet-theo-chuyen-muc-id?ChuyenMucId={0}&PageNumber={1}&PageSize={2}',

  // --------- FILE API -----------------------------
  GET_IMAGE: 'http://10.168.4.231:9999/doc-manager/{0}',

  // --------------- HDSD ---------------------------
  GET_HDSD: 'http://10.168.4.231:5023/api/MobileAPI/get-list-hdsd-tree?Type={0}&PageNumber={1}&PageSize={2}',

  // ---------- KHO API -----------------------------
  GET_KHO_BY_LINH_VUC: 'http://10.168.4.231:5023/api/MobileAPI/get-list-kho-theo-linh-vuc?LinhVuc={0}&PageNumber={1}&PageSize={2}',
  GET_DOI_TUONG_BY_KHO_ID: 'http://10.168.4.231:5023/api/MobileAPI/get-list-doi-tuong-theo-kho?IdKho={0}&PageNumber={1}&PageSize={2}',
};

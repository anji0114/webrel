import axios from 'axios';

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      window.location.href = '/login';
    }
    if (error.response?.status === 404) {
      window.location.href = '/404';
    }
    // その他のエラー処理
    return Promise.reject(error);
  },
);

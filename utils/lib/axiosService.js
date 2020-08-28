import axios from 'axios';

const axiosService = axios.create({
  baseURL: 'https://5f4933a98e271c001650c7a7.mockapi.io/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// singleton instance
export default axiosService;

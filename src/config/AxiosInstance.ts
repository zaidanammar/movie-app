import axios from "axios";

const axiosInstance = () => {
  return axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    params: {
      apikey: process.env.REACT_APP_API_KEY,
    },
  });
};

export default axiosInstance;

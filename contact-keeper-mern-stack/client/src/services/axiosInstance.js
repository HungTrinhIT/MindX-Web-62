import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3001/api/v1",
  timeout: 5000,
});

export default axiosInstance;

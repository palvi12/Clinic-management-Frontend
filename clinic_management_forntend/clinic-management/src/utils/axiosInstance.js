import axios from "axios";

// Create an instance with custom configurationconst 
const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/cities/",
});

export default axiosInstance;
import Axios from "axios";
import config from "../utils/config";

const axiosInstance = Axios.create({
  baseURL: config.serverUrl,
  headers: {
    Authorization: `Bearer ${config.authToken}`,
  },
});



export default axiosInstance;
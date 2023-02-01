import axios from "axios";
import { BASE_URL } from "./endpoints";

export const axiosInstance = () => {
  const instance = axios.create({
    baseURL: BASE_URL,
  });
  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      console.log("API ERROR==>", error);
      throw error;
    }
  );
  return instance;
};

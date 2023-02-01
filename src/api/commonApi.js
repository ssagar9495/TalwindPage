import { axiosInstance } from "./client";

export const listApi = (endpoint, params) => {
  return axiosInstance()
    .get(endpoint, { params })
    .then((response) => response.data);
};

import { IQueryParams } from "../../types/common.type";
import axiosInstance from "../configs/apiConfig";
import qs from "querystringify";

const getAll = async (params: IQueryParams) => {
  const response = await axiosInstance.get(`/image/?${qs.stringify(params)}`);
  return response;
};

const getByType = async (type: string) => {
  const response = await axiosInstance.get(`/image/${type}`);
  return response;
};

export const imageApi = {
  getAll,
  getByType,
};

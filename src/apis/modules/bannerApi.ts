import qs from "querystringify";
import { IQueryParams } from "../../types/common.type";
import axiosInstance from "../configs/apiConfig";

const getAll = async (params: IQueryParams) => {
  const response = axiosInstance.get(`/banner/?${qs.stringify(params)}`);
  return response;
};

const getById = async (id: number) => {
  const response = axiosInstance.get(`/banner/${id}`);
  return response;
};

export const bannerApi = {
  getAll,
  getById,
};

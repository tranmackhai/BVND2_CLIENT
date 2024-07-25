import qs from "querystringify";
import { TUsePostDto } from "../../hooks/usePost";
import axiosInstance from "../configs/apiConfig";

const getAll = async (params: TUsePostDto) => {
  const response = await axiosInstance.get(`/post?${qs.stringify(params)}`);
  return response;
};

const getById = async (id: number) => {
  const response = await axiosInstance.get(`/post/${id}`);
  return response;
};

export const postApi = {
  getAll,
  getById,
};

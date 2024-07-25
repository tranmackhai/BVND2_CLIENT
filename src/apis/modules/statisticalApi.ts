import axiosInstance from "../configs/apiConfig";

const getAll = async () => {
  const response = await axiosInstance.get(`/statistical/`);
  return response;
};

const getById = async (id: number) => {
  const response = await axiosInstance.get(`/statistical/${id}`);
  return response;
};

export const statisticalApi = {
  getAll,
  getById,
};
import qs from "querystringify";
import { TUsePostDto } from "../../hooks/usePost";
import axiosInstance from "../configs/apiConfig";

export type isActive = {
  isActive: boolean;
};

export type TPostsDto = {
  title: string;
  content: string;
  thumbnail?: string;
  file?: string;
  isActive: boolean;
  groupCategorySlug: string;
  slug?: string;
  postCategory?: Specialty;
};

export enum Specialty {
  InternalMedicine = "InternalMedicine", // Chuyên khoa nội
  SurgicalSpecialty = "SurgicalSpecialty", // Chuyên khoa ngoại
  ClinicalMedicine = "ClinicalMedicine", // Cận lâm sàn
}

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

import qs from "querystringify";
import { IQueryParams } from "../../types/common.type";
import axiosInstance from "../configs/apiConfig";

export type TDoctorDto = {
  image: string;
  name: string;
  position: string;
  specialty: Specialty;
  status: boolean;
};

enum Specialty {
  InternalMedicine = "InternalMedicine", // Chuyên khoa nội
  SurgicalSpecialty = "SurgicalSpecialty", // Chuyên khoa ngoại
  ClinicalMedicine = "ClinicalMedicine", // Cận lâm sàn
}

const getAll = async (params: IQueryParams) => {
  const response = await axiosInstance.get(`/doctor?${qs.stringify(params)}`);
  return response;
};

const getById = async (id: number) => {
  const response = await axiosInstance.get(`/doctor/${id}`);
  return response;
};


export const doctorApi = {
  getAll,
  getById,
};

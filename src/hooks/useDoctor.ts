import { useQuery } from "@tanstack/react-query";
import { isNil } from "lodash";
import { doctorApi } from "../apis/modules/doctorApi";

export type TUseDoctorDto = {
  id?: number;
  page?: number;
  pageSize?: number;
  keyword?: string;
};

const useDoctor = (payload: TUseDoctorDto) => {
  //getAll + search
  const {
    data: doctors,
    refetch,
    isError,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["doctors", payload.page, payload.pageSize, payload.keyword],
    queryFn: async () => {
      const response = await doctorApi.getAll({
        page: payload.page,
        pageSize: payload.pageSize,
        keyword: payload.keyword,
      });
      const { data } = response;
      return { data };
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  //getByID
  const { data: doctor } = useQuery({
    queryKey: ["post"],
    queryFn: async () => {
      if (isNil(payload.id)) return null;
      const response = await doctorApi.getById(payload.id);
      const { data } = response;
      return { data };
    },
  });

  return {
    refetch,
    doctors,
    doctor,
    isError,
    isLoading,
    error,
  };
};

export { useDoctor };

import { useQuery } from "@tanstack/react-query";
import { doctorApi } from "../apis/modules/doctorApi";
import { isNil } from "lodash";
import { IQueryParams } from "../types/common.type";

const useDoctor = (payload: IQueryParams) => {
  //getAll + search
  const {
    data: doctors,
    refetch,
    isError,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      const response = await doctorApi.getAll({});
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
    refetchOnWindowFocus: false,
    enabled: !isNil(payload.id),
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

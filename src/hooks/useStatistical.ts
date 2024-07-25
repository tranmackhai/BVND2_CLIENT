import { useQuery } from "@tanstack/react-query";
import { statisticalApi } from "../apis/modules/statisticalApi";
import { isNil } from "lodash";
import { IQueryParams } from "../types/common.type";

const useStatistical = (payload: IQueryParams) => {
  //getAll
  const {
    data: statisticals,
    refetch,
    isError,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["statisticals"],
    queryFn: async () => {
      const response = await statisticalApi.getAll();

      const { data } = response;

      return {
        data,
      };
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  //getById
  const { data: statistical } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      if (isNil(payload.id)) return null;
      const response = await statisticalApi.getById(payload.id);
      const { data } = response;
      return {
        data,
      };
    },
    refetchOnWindowFocus: false,
    enabled: !isNil(payload.id),
  });

  return {
    refetch,
    statisticals,
    statistical,
    isError,
    isLoading,
    error,
  };
};

export { useStatistical };

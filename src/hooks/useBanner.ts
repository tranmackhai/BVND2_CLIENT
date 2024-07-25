import { useQuery } from "@tanstack/react-query";
import { isNil } from "lodash";
import { bannerApi } from "../apis/modules/bannerApi";
import { IQueryParams } from "../types/common.type";

const useBanner = (payload: IQueryParams) => {
  //getAll
  const {
    data: banners,
    refetch,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["banners"],
    queryFn: async () => {
      const response = await bannerApi.getAll({});
      const { data } = response;
      return { data };
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  //getById
  const { data: banner } = useQuery({
    queryKey: ["banner"],
    queryFn: async () => {
      if (isNil(payload.id)) return null;
      const response = await bannerApi.getById(payload.id);
      const { data } = response;
      return { data };
    },
    refetchOnWindowFocus: false,
    enabled: !isNil(payload.id),
  });

  return {
    refetch,
    banners,
    banner,
    isLoading,
    isError,
    error,
  };
};

export { useBanner };

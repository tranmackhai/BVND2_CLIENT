import { useQuery } from "@tanstack/react-query";
import { imageApi } from "../apis/modules/imageApi";
import { isNil } from "lodash";

export type TUseImage = {
  type?: string;
  keyword?: string;
  page?: number;
  pageSize?: number;
};

const useImage = (payload: TUseImage) => {
  const { data: images, refetch } = useQuery({
    queryKey: ["images", payload.page, payload.pageSize, payload.keyword],
    queryFn: async () => {
      const response = await imageApi.getAll({
        keyword: payload.keyword,
        page: payload.page,
        limit: payload.pageSize,
      });
      const { data } = response;
      return {
        data,
      };
    },
    refetchOnWindowFocus: false,
  });

  const { data: imageType } = useQuery({
    queryKey: ["imageType"],
    queryFn: async () => {
      if (isNil(payload.type)) {
        return null;
      }
      const response = await imageApi.getByType(payload.type);

      const { data } = response;

      return {
        data,
      };
    },
    refetchOnWindowFocus: false,
  });

  return {
    images,
    imageType,
    refetch,
  };
};

export { useImage };

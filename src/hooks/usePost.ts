import { useQuery } from "@tanstack/react-query";
import { isNil } from "lodash";
import { postApi } from "../apis/modules/postApi";

export type TUsePostDto = {
  id?: number;
  keyword?: string;
  groupCategorySlug?: string;
  slug?: string;
  isActive?: boolean;
};

const usePosts = (payload: TUsePostDto) => {
  const {
    data: posts,
    refetch,
    isError,
    isLoading,
    error,
  } = useQuery({
    queryKey: [
      "posts",
      payload.keyword,
      payload.groupCategorySlug,
      payload.slug,
      payload.isActive,
    ],
    queryFn: async () => {
      const response = await postApi.getAll({
        keyword: payload.keyword,
        groupCategorySlug: payload.groupCategorySlug,
        slug: payload.slug,
        isActive: payload.isActive,
      });
      const { data } = response;
      return { data };
    },
    refetchOnWindowFocus: false,
    enabled:
      !isNil(payload.slug) ||
      !isNil(payload.groupCategorySlug) ||
      !isNil(payload.keyword) ||
      !isNil(payload.isActive),
  });

  return {
    refetch,
    posts,
    isError,
    isLoading,
    error,
  };
};

export { usePosts };

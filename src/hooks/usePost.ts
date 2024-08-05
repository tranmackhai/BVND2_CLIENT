import { useQuery } from "@tanstack/react-query";
import { isNil } from "lodash";
import { postApi } from "../apis/modules/postApi";

export type TUsePostDto = {
  id?: number;
  page?: number;
  pageSize?: number;
  keyword?: string;
  groupCategorySlug?: string;
  slug?: string;
  isActive?: boolean;
};

const usePosts = (payload: TUsePostDto) => {
  //getAll + search
  const {
    data: posts,
    refetch,
    isError,
    isLoading,
    error,
  } = useQuery({
    queryKey: [
      "posts",
      payload.page,
      payload.pageSize,
      payload.keyword,
      payload.groupCategorySlug,
      payload.slug,
      payload.isActive,
    ],
    queryFn: async () => {
      const response = await postApi.getAll({
        page: payload.page,
        pageSize: payload.pageSize,
        keyword: payload.keyword,
        groupCategorySlug: payload.groupCategorySlug,
        slug: payload.slug,
        isActive: payload.isActive,
      });
      // keepPreviousData: true;
      const { data } = response;
      return { data };
    },
    refetchOnWindowFocus: false,
    enabled:
      !isNil(payload.slug) ||
      !isNil(payload.page) ||
      !isNil(payload.groupCategorySlug),
  });

  //getById
  const { data: post } = useQuery({
    queryKey: ["post"],
    queryFn: async () => {
      if (isNil(payload.id)) return null;
      const response = await postApi.getById(payload.id);
      const { data } = response;
      return { data };
    },
    refetchOnWindowFocus: false,
    enabled: !isNil(payload.id),
  });

  return {
    refetch,
    posts,
    post,
    isError,
    isLoading,
    error,
  };
};

export { usePosts };

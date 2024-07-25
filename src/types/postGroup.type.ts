import { PostsDTo } from "./post.type";

type PostGroupDto = {
  title: string;
  status: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
  posts: PostsDTo[];
};

export type { PostGroupDto };

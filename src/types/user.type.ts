import { PostsDTo } from "./post.type";
import { RoleDTo } from "./role.type";

type UserDto = {
  fullName: string;
  userName: string;
  hash: string;
  email?: string;
  phoneNumber?: string;
  role: RoleDTo;
  roleId: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
  posts?: PostsDTo[];
};

export type { UserDto };

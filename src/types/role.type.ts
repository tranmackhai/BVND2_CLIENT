import { PermissionDTo } from "./permission.type";
import { RolePermissionDTo } from "./rolePermission.type";
import { UserDto } from "./user.type";

type RoleDTo = {
  label: string;
  value: string;
  permissions: PermissionDTo[];
  rolePermissions: RolePermissionDTo[];
  users: UserDto[];
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
};

export type { RoleDTo };

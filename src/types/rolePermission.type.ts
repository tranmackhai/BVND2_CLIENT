import { PermissionDTo } from "./permission.type";
import { RoleDTo } from "./role.type";

type RolePermissionDTo = {
  role: RoleDTo;
  roleId: number;
  permission: PermissionDTo;
  permissionId: number;
  createdAt: string;
  updatedAt: string;
};

export type { RolePermissionDTo };

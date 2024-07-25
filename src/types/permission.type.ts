import { RoleDTo } from "./role.type";
import { RolePermissionDTo } from "./rolePermission.type";

type PermissionDTo = {
  label: string;
  value: string;
  status: boolean;
  roles: RoleDTo[];
  rolePermissions: RolePermissionDTo[];
  createdAt: string;
  updatedAt: string;
};

export type { PermissionDTo };

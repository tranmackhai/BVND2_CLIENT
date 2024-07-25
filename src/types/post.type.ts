import { PostGroupDto } from "./postGroup.type";
import { UserDto } from "./user.type";

type PostsDTo = {
  title: string;
  content: string;
  thumbnail?: string;
  file?: string;
  isActive: boolean;
  author: UserDto;
  authorId: number;
  postGroup: PostGroupDto;
  groupId: number;
  postCategory?: Specialty;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
};

enum Specialty {
  InternalMedicine = "InternalMedicine", // Chuyên khoa nội
  SurgicalSpecialty = "SurgicalSpecialty", // Chuyên khoa ngoại
  ClinicalMedicine = "ClinicalMedicine", // Cận lâm sàng
}

export type { PostsDTo };

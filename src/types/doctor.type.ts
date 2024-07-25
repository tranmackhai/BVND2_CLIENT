type DoctorDTo = {
  path: string;
  name: string;
  position: string;
  specialty: Specialty;
  status: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
};

enum Specialty {
  InternalMedicine = "InternalMedicine", // Chuyên khoa nội
  SurgicalSpecialty = "SurgicalSpecialty", // Chuyên khoa ngoại
  ClinicalMedicine = "ClinicalMedicine", // Cận lâm sàng
}

export type { DoctorDTo };

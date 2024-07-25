type ImageDTo = {
  path: string;
  displayName: string;
  department: string;
  type: ImageType;
  status: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
};

enum ImageType {
  Banner = "Banner",
  Letter = "Letter",
  Icon = "Icon",
}

export type { ImageDTo };

export interface Education {
  name: string;
  organization: string;
  description: string;
  startDate: string;
  endDate: string;
}

export interface WorkExperience {
  name: string;
  organization: string;
  description: string;
  startDate: string;
  endDate: string;
}

export interface ProfilePicture {
  inputType: string;
  file: string | null;
  imageUrl: string;
}

export interface UserFormValues {
  fullName: string;
  email: string;
  profilePicture: ProfilePicture;
  education: Education[];
  workExperience: WorkExperience[];
}

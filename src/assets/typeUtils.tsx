import { FormikProps } from "formik";

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

export interface Skills {
  skill: string;
}

export interface Languages {
  name: string;
  level: string;
}

export interface UserFormValues {
  fullName?: string;
  email?: string;
  profilePicture?: ProfilePicture;
  pertinentEducation?: Education[];
  pertinentWorkExperience?: WorkExperience[];
  extraEducation?: Education[];
  extraWorkExperience?: WorkExperience[];
  languages?: Languages[];
  softSkills?: Skills[];
  technicalHardSkills?: Skills[];
  [key: string]:
    | string
    | Array<string | Education | WorkExperience | Languages | Skills>
    | null
    | undefined
    | ProfilePicture;
}

export type ArrayTypesInitialValues =
  | string[]
  | Education[]
  | WorkExperience[]
  | { name: string; level: string }[]
  | { skill: string }[];

export type InitialValues = {
  [key: string]:
    | {
        inputType?: string;
        file?: File | null;
        imageUrl?: string;
      }
    | string
    | ArrayTypesInitialValues
    | null;
};

export enum FieldType {
  Text = "text",
  File = "file",
  Array = "array",
  Email = "email",
}

export type UserFormConfig = {
  field: string;
  type: FieldType;
  subFields?: string[];
  initialEntry?: string | null | {};
}[];

export type FieldSwitcherProps = {
  field: UserFormConfig[number];
  values: UserFormValues;
  form: FormikProps<UserFormValues>;
  toggleProfilePicture?(): void;
};

export type FromFieldProps = {
  field: UserFormConfig[number];
  index: number;
  subField: string;
};

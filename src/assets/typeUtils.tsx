import { FormikProps } from 'formik'

export interface InputWithDates {
  [FieldName.Title]: string
  [FieldName.Organization]: string
  [FieldName.Description]: string
  [FieldName.StartDate]: string | null
  [FieldName.EndDate]: Date | string | null
}

export interface InputProfilePicture {
  [FieldName.InputType]: string
  [FieldName.File]: File | string | null
  [FieldName.ImageURL]: string
}

export interface InputWithLevel {
  [FieldName.Language]?: string
  [FieldName.Skill]?: string
  [FieldName.Level]?: string
}

export interface UserFormValuesWithSubfields {
  [FieldName.Languages]: InputWithLevel[]
  [FieldName.SoftSkills]: InputWithLevel[]
  [FieldName.TechnicalHardSkills]: InputWithLevel[]
  [FieldName.PertinentEducation]: InputWithDates[]
  [FieldName.PertinentWorkExperience]: InputWithDates[]
  [FieldName.ExtraEducation]: InputWithDates[]
  [FieldName.ExtraWorkExperience]: InputWithDates[]
}

export interface UserFromValuesCustoms {
  [FieldName.ProfilePicture]: InputProfilePicture
}

export interface UserFormValuesWithoutSubfields {
  [FieldName.FullName]: string
  [FieldName.Email]: string
}

export type UserFormValues = UserFormValuesWithSubfields &
  UserFormValuesWithoutSubfields &
  UserFromValuesCustoms

export enum ValueType {
  String = 'string',
  Number = 'number',
  Boolean = 'boolean',
  Undefined = 'undefined',
  Null = 'null',
  Object = 'object',
}

export enum FieldType {
  Text = 'text',
  File = 'file',
  Array = 'array',
  Email = 'email',
  Date = 'date',
  Textarea = 'textarea',
}

export enum TopLevelFieldName {
  FullName = 'fullName',
  Email = 'email',
  ProfilePicture = 'profilePicture',
  Languages = 'languages',
  SoftSkills = 'softSkills',
  TechnicalHardSkills = 'technicalHardSkills',
  PertinentEducation = 'pertinentEducation',
  PertinentWorkExperience = 'pertinentWorkExperience',
  ExtraEducation = 'extraEducation',
  ExtraWorkExperience = 'extraWorkExperience',
}

export enum SubFieldName {
  Level = 'level',
  Skill = 'skill',
  Language = 'language',
  Title = 'title',
  Name = 'name',
  Organization = 'organization',
  Description = 'description',
  StartDate = 'startDate',
  EndDate = 'endDate',
  InputType = 'inputType',
  File = 'file',
  ImageURL = 'imageUrl',
}

export enum FieldName {
  FullName = 'fullName',
  Email = 'email',
  ProfilePicture = 'profilePicture',
  Languages = 'languages',
  SoftSkills = 'softSkills',
  TechnicalHardSkills = 'technicalHardSkills',
  PertinentEducation = 'pertinentEducation',
  PertinentWorkExperience = 'pertinentWorkExperience',
  ExtraEducation = 'extraEducation',
  ExtraWorkExperience = 'extraWorkExperience',
  Level = 'level',
  Skill = 'skill',
  Language = 'language',
  Title = 'title',
  Name = 'name',
  Organization = 'organization',
  Description = 'description',
  StartDate = 'startDate',
  EndDate = 'endDate',
  InputType = 'inputType',
  File = 'file',
  ImageURL = 'imageUrl',
}

export type SubField = {
  name: FieldName
  type: FieldType
}

export type UserFormConfig = {
  fieldName: FieldName
  type: FieldType
  subFields?: SubField[]
  initialEntry?: string | Date | null | {}
}[]

export type FieldSwitcherProps = {
  field: UserFormConfig[number]
  values: UserFormValues
  form: FormikProps<UserFormValues>
  toggleProfilePicture?(): void
  showProfilePicture: boolean
}

export type FormFieldProps = {
  field: UserFormConfig[number]
  index: number
  subField?: SubField
  values: UserFormValues
}

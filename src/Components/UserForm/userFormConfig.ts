import { generateDefaultInitialEntry } from '../../assets/logicUtils'
import { FieldName, FieldType } from '../../assets/typeUtils'

export const userFormSubFieldsConfig = {
  [FieldName.Languages]: [
    { name: FieldName.Language, type: FieldType.Text },
    { name: FieldName.Level, type: FieldType.Text },
  ],
  [FieldName.SoftSkills]: [{ name: FieldName.Skill, type: FieldType.Text }],
  [FieldName.TechnicalHardSkills]: [
    { name: FieldName.Skill, type: FieldType.Text },
    { name: FieldName.Level, type: FieldType.Text },
  ],
  [FieldName.PertinentEducation]: [
    { name: FieldName.Title, type: FieldType.Text },
    { name: FieldName.Organization, type: FieldType.Text },
    { name: FieldName.Description, type: FieldType.Textarea },
    { name: FieldName.StartDate, type: FieldType.Date },
    { name: FieldName.EndDate, type: FieldType.Date },
  ],
  [FieldName.PertinentWorkExperience]: [
    { name: FieldName.Title, type: FieldType.Text },
    { name: FieldName.Organization, type: FieldType.Text },
    { name: FieldName.Description, type: FieldType.Textarea },
    { name: FieldName.StartDate, type: FieldType.Date },
    { name: FieldName.EndDate, type: FieldType.Date },
  ],
  [FieldName.ExtraEducation]: [
    { name: FieldName.Title, type: FieldType.Text },
    { name: FieldName.Organization, type: FieldType.Text },
    { name: FieldName.Description, type: FieldType.Textarea },
    { name: FieldName.StartDate, type: FieldType.Date },
    { name: FieldName.EndDate, type: FieldType.Date },
  ],
  [FieldName.ExtraWorkExperience]: [
    { name: FieldName.Title, type: FieldType.Text },
    { name: FieldName.Organization, type: FieldType.Text },
    { name: FieldName.Description, type: FieldType.Textarea },
    { name: FieldName.StartDate, type: FieldType.Date },
    { name: FieldName.EndDate, type: FieldType.Date },
  ],
}

const userFormConfig = [
  {
    fieldName: FieldName.FullName,
    type: FieldType.Text,
    initialEntry: generateDefaultInitialEntry(),
  },
  {
    fieldName: FieldName.Email,
    type: FieldType.Email,
    initialEntry: generateDefaultInitialEntry(),
  },
  { fieldName: FieldName.ProfilePicture, type: FieldType.File },
  {
    fieldName: FieldName.Languages,
    type: FieldType.Array,
    subFields: userFormSubFieldsConfig[FieldName.Languages],
    initialEntry: generateDefaultInitialEntry(
      userFormSubFieldsConfig[FieldName.Languages]
    ),
  },
  {
    fieldName: FieldName.SoftSkills,
    type: FieldType.Array,
    subFields: userFormSubFieldsConfig[FieldName.SoftSkills],
    initialEntry: generateDefaultInitialEntry(
      userFormSubFieldsConfig[FieldName.SoftSkills]
    ),
  },
  {
    fieldName: FieldName.TechnicalHardSkills,
    type: FieldType.Array,
    subFields: userFormSubFieldsConfig[FieldName.TechnicalHardSkills],
    initialEntry: generateDefaultInitialEntry(
      userFormSubFieldsConfig[FieldName.TechnicalHardSkills]
    ),
  },
  {
    fieldName: FieldName.PertinentEducation,
    type: FieldType.Array,
    subFields: userFormSubFieldsConfig[FieldName.PertinentEducation],
    initialEntry: generateDefaultInitialEntry(
      userFormSubFieldsConfig[FieldName.PertinentEducation]
    ),
  },
  {
    fieldName: FieldName.PertinentWorkExperience,
    type: FieldType.Array,
    subFields: userFormSubFieldsConfig[FieldName.PertinentWorkExperience],
    initialEntry: generateDefaultInitialEntry(
      userFormSubFieldsConfig[FieldName.PertinentWorkExperience]
    ),
  },
  {
    fieldName: FieldName.ExtraEducation,
    type: FieldType.Array,
    subFields: userFormSubFieldsConfig[FieldName.ExtraEducation],
    initialEntry: generateDefaultInitialEntry(
      userFormSubFieldsConfig[FieldName.ExtraEducation]
    ),
  },
  {
    fieldName: FieldName.ExtraWorkExperience,
    type: FieldType.Array,
    subFields: userFormSubFieldsConfig[FieldName.ExtraWorkExperience],
    initialEntry: generateDefaultInitialEntry(
      userFormSubFieldsConfig[FieldName.ExtraWorkExperience]
    ),
  },
]

export default userFormConfig

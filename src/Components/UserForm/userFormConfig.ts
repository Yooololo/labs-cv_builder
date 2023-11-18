import { FieldType } from "../../assets/typeUtils";

const userFormConfig = [
  { field: "fullName", type: FieldType.Text },
  { field: "email", type: FieldType.Email },
  { field: "profilePicture", type: FieldType.File },
  {
    field: "languages",
    type: FieldType.Array,
    subFields: ["name", "level"],
    initialEntry: {},
  },
  {
    field: "softSkills",
    type: FieldType.Array,
    subFields: ["skill"],
    initialEntry: {},
  },
  {
    field: "technicalHardSkills",
    type: FieldType.Array,
    subFields: ["skill"],
    initialEntry: {},
  },
  {
    field: "pertinentEducation",
    type: FieldType.Array,
    subFields: ["name", "organization", "description", "startDate", "endDate"],
    initialEntry: {},
  },
  {
    field: "pertinentWorkExperience",
    type: FieldType.Array,
    subFields: ["name", "organization", "description", "startDate", "endDate"],
    initialEntry: {},
  },
  {
    field: "extraEducation",
    type: FieldType.Array,
    subFields: ["name", "organization", "description", "startDate", "endDate"],
    initialEntry: {},
  },
  {
    field: "extraWorkExperience",
    type: FieldType.Array,
    subFields: ["name", "organization", "description", "startDate", "endDate"],
    initialEntry: {},
  },
];

export default userFormConfig;

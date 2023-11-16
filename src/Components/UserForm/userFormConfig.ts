const userFormConfig = [
  // Personal Data
  { field: "fullName", type: "text" },
  { field: "email", type: "email" },
  { field: "profilePicture", type: "file" },
  {
    field: "languages",
    type: "array",
    subFields: ["name", "level"],
    initialEntry: {},
  },
  {
    field: "softSkills",
    type: "array",
    subFields: ["skill"],
    initialEntry: {},
  },
  {
    field: "technicalHardSkills",
    type: "array",
    subFields: ["skill"],
    initialEntry: {},
  },
  {
    field: "education",
    type: "array",
    subFields: ["name", "organization", "description", "startDate", "endDate"],
    initialEntry: {},
  },
  {
    field: "workExperience",
    type: "array",
    subFields: ["name", "organization", "description", "startDate", "endDate"],
    initialEntry: {},
  },
];

export default userFormConfig;

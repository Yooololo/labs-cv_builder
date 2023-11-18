import userFormConfig from "./userFormConfig";
import { InitialValues } from "../../assets/typeUtils";

const userFormInitialValues: InitialValues = userFormConfig.reduce(
  (acc, field) => {
    if (field.type === "file") {
      acc[field.field] = {
        inputType: "local",
        file: null,
        imageUrl: "",
      };
    } else if (field.type === "array") {
      acc[field.field] =
        typeof field.initialEntry === "string" ? [field.initialEntry] : [];
    } else {
      acc[field.field] = field.type === "text" ? "" : null;
    }
    return acc;
  },
  {} as InitialValues
);

export default userFormInitialValues;

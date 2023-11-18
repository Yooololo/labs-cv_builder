import { Field, ErrorMessage } from "formik";
import { FromFieldProps } from "../../assets/typeUtils";

const FormField = ({ field, index, subField }: FromFieldProps) => (
  <div key={subField}>
    <label htmlFor={`${field.field}.${index}.${subField}`}>
      {subField.charAt(0).toUpperCase() + subField.slice(1)}:
    </label>
    <Field
      type={subField === "description" ? "textarea" : "text"}
      id={`${field.field}.${index}.${subField}`}
      name={`${field.field}.${index}.${subField}`}
      as={subField === "description" ? "textarea" : undefined}
    />
    <ErrorMessage
      name={`${field.field}.${index}.${subField}`}
      component="div"
      className="error"
    />
  </div>
);

export default FormField;

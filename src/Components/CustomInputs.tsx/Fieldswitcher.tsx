import { Field, FieldArray, ErrorMessage } from "formik";
import ProfilePictureInput from "../CustomInputs.tsx/ProfilePictureInput";
import {
  ArrayTypesInitialValues,
  FieldSwitcherProps,
} from "../../assets/typeUtils";
import FormField from "./FormField";

const FieldSwitcher: React.FC<FieldSwitcherProps> = ({
  field,
  values,
  form,
  toggleProfilePicture,
}) => {
  switch (field.type) {
    case "file":
      return (
        <div>
          <h2>{field.field}</h2>
          {toggleProfilePicture && (
            <>
              <Field
                name={field.field}
                render={() => (
                  <>
                    <ProfilePictureInput
                      onChange={(value) => {
                        form.setFieldValue(field.field, value);
                      }}
                    />
                    <ErrorMessage
                      name={field.field}
                      component="div"
                      className="error"
                    />
                  </>
                )}
              />
            </>
          )}
          {toggleProfilePicture && (
            <button type="button" onClick={toggleProfilePicture}>
              Toggle Profile Picture
            </button>
          )}
        </div>
      );
    case "array":
      return (
        <div>
          <h2>{field.field}</h2>
          <FieldArray
            name={field.field}
            render={(arrayHelpers) => (
              <div>
                {(values[field.field] as ArrayTypesInitialValues)?.map(
                  (_, index: number) => (
                    <div key={index}>
                      {(field.subFields as string[]).map((subField) => (
                        <FormField
                          field={field}
                          index={index}
                          subField={subField}
                        />
                      ))}
                      <button
                        type="button"
                        onClick={() => arrayHelpers.remove(index)}
                      >
                        Remove
                      </button>
                    </div>
                  )
                )}
                <button type="button" onClick={() => arrayHelpers.push({})}>
                  Add {field.field.slice(0, -1)}
                </button>
              </div>
            )}
          />
        </div>
      );
    default:
      return <FormField field={field} index={0} subField={""} />;
  }
};

export default FieldSwitcher;

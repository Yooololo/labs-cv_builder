import { Formik, Field, FieldArray, Form, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import ProfilePictureInput from "../CustomInputs.tsx/ProfilePictureInput";
import userFormConfig from "./userFormConfig";

const UserForm = () => {
  const navigate = useNavigate();

  const initialValues = userFormConfig.reduce((acc, field) => {
    if (field.type === "file") {
      acc[field.field] = {
        inputType: "local",
        file: null,
        imageUrl: "",
      };
    } else if (field.type === "array") {
      acc[field.field] = [field.initialEntry]; // Use the initial entry
    } else {
      acc[field.field] = field.type === "text" ? "" : null;
    }
    return acc;
  }, {});

  const handleSubmit = (values, { resetForm }) => {
    console.log("CV Data:", values);
    // You can perform any additional logic here

    // Navigate to /curriculum and pass the form data as state
    navigate("/curriculum", { state: { cvData: values } });

    resetForm();
  };

  return (
    <div>
      <h1>Curriculum Vitae Builder</h1>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values }) => (
          <Form>
            {userFormConfig.map((field) => (
              <div key={field.field}>
                {field.type === "array" ? (
                  <FieldArray
                    name={field.field}
                    render={(arrayHelpers) => (
                      <div>
                        <h2>{field.field}</h2>
                        {values[field.field].map((entry, index) => (
                          <div key={index}>
                            {field.subFields.map((subField) => (
                              <div key={subField}>
                                <label
                                  htmlFor={`${field.field}.${index}.${subField}`}
                                >
                                  {subField.charAt(0).toUpperCase() +
                                    subField.slice(1)}
                                  :
                                </label>
                                <Field
                                  type={
                                    subField === "description"
                                      ? "textarea"
                                      : "text"
                                  }
                                  id={`${field.field}.${index}.${subField}`}
                                  name={`${field.field}.${index}.${subField}`}
                                  as={
                                    subField === "description"
                                      ? "textarea"
                                      : undefined
                                  }
                                />
                              </div>
                            ))}
                            <button
                              type="button"
                              onClick={() => arrayHelpers.remove(index)}
                            >
                              Remove
                            </button>
                          </div>
                        ))}
                        <button
                          type="button"
                          onClick={() => arrayHelpers.push({})}
                        >
                          Add {field.field.slice(0, -1)}
                        </button>
                      </div>
                    )}
                  />
                ) : (
                  <div>
                    {field.type === "file" ? (
                      <div>
                        <h2>{field.field}</h2>
                        <Field
                          name={field.field}
                          render={({ form }) => (
                            <ProfilePictureInput
                              onChange={(value) => {
                                form.setFieldValue(field.field, value);
                              }}
                            />
                          )}
                        />
                      </div>
                    ) : (
                      <>
                        <label htmlFor={field.field}>
                          {field.field.charAt(0).toUpperCase() +
                            field.field.slice(1)}
                          :
                        </label>
                        <Field
                          type={
                            field.type === "textarea" ? "textarea" : field.type
                          }
                          id={field.field}
                          name={field.field}
                          as={
                            field.type === "textarea" ? "textarea" : undefined
                          }
                        />
                        {field.field === "softSkills" ||
                        field.field === "technicalHardSkills" ? (
                          <ul>
                            {values[field.field].map((skill, index) => (
                              <li key={index}>{skill.skill}</li>
                            ))}
                          </ul>
                        ) : null}
                      </>
                    )}
                  </div>
                )}
              </div>
            ))}
            <button type="submit">Generate CV</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UserForm;

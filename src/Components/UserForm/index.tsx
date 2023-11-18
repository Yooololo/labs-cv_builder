import { Formik, Form, FormikHelpers, FormikProps } from "formik";
import { useNavigate } from "react-router-dom";
import userFormConfig from "./userFormConfig";
import { UserFormValues } from "../../assets/typeUtils";
import FieldSwitcher from "../CustomInputs.tsx/Fieldswitcher";
import userFormInitialValues from "./userFormInitialValues";
import userFormValidationSchema from "./userFormValidationSchema";

const UserForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (
    values: UserFormValues,
    { resetForm }: FormikHelpers<UserFormValues>
  ) => {
    navigate("/curriculum", { state: { cvData: values } });
    resetForm();
  };

  return (
    <div>
      <h1>Curriculum Vitae Builder</h1>
      <Formik
        initialValues={userFormInitialValues as Partial<UserFormValues>}
        onSubmit={handleSubmit}
        validationSchema={userFormValidationSchema}
      >
        {(formikProps: FormikProps<UserFormValues>) => (
          <Form>
            {userFormConfig.map((field) => (
              <FieldSwitcher
                key={field.field}
                field={field}
                values={formikProps.values}
                form={formikProps}
              />
            ))}
            <button type="submit">Generate CV</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UserForm;

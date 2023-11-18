import * as Yup from "yup";

const userFormValidationSchema = Yup.object().shape({
  fullName: Yup.string().required("Full Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
});

export default userFormValidationSchema;

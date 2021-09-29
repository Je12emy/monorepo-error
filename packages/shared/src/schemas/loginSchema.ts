import * as yup from "yup";

export const loginSchema = yup.object().shape({
  usernameOrEmail: yup.string().required("Email or Username are required")
});

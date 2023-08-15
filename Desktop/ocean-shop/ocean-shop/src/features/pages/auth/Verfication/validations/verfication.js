/* eslint-disable no-useless-escape */
import * as YUP from "yup";
const validationSchema = YUP.object({
  password: YUP.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
  confirmPassword: YUP.string()
    .oneOf([YUP.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});
export default validationSchema;

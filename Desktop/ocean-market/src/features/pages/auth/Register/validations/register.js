/* eslint-disable no-useless-escape */
import * as YUP from "yup";
const phoneRegExp = /^(?!0)((\+[1-9]{1,4}[ \-]*)|(\([0-9]{1,5}\)[ \-]*)|([0-9]{1,5})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;

const validationSchema = YUP.object({
  fullName: YUP.string()
    .required("full Name is required")
    .min(4, "FullName must be at least 5 characters"),
  phoneNumber: YUP.string()
    .required("Phone Number is required")
    .matches(phoneRegExp, "Phone number is not valid"),
  password: YUP.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
  confirmPassword: YUP.string()
    .oneOf([YUP.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

export default validationSchema;

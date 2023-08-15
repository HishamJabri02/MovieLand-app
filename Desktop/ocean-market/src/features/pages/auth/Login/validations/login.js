import * as YUP from "yup";
const phoneRegExp = /^(?!0)((\+[1-9]{1,4}[ \-]*)|(\([0-9]{1,5}\)[ \-]*)|([0-9]{1,5})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
const validationSchema = YUP.object({
  phoneNumber: YUP.string()
    .required("Phone Number is required")
    .matches(phoneRegExp, "Phone number is not valid"),
  password: YUP.string().required("Password is required"),
});
export default validationSchema;

import * as YUP from "yup";
const validationSchema = YUP.object({
  phoneNumber: YUP.string().required("Phone Number is required"),
});
export default validationSchema;

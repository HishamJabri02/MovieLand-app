import axiosData from "../../../../api/axiosData";
import decryptionState from "../../../auth/helpers/decryptionState";
export const allProductsApi = async (type, pageNumber) => {
  const token = localStorage.getItem("token")
    ? localStorage.getItem("token")
    : null;
  const secretKey = localStorage.getItem("ver")
    ? localStorage.getItem("ver")
    : null;
  const decrypted =
    token === null || secretKey === null
      ? ""
      : decryptionState(token, secretKey);
    const url= localStorage.getItem("curr")? `/v2/api/products/with-filter?filter=${type}&pageNumber=${pageNumber}&cur=${localStorage.getItem("curr")}`:`/v2/api/products/with-filter?filter=${type}&pageNumber=${pageNumber}`
  try {
    const response = await axiosData.get(
      url,
      {
        headers: {
          Authorization: `Bearer ${decrypted}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response.data.userMessage
      ? error.response.data.userMessage
      : error.response.data.message;
  }
};

import axiosData from "../../../../api/axiosData";
import decryptionState from "../../../auth/helpers/decryptionState";
export const allProductsApi = async (type, pageNumber) => {
  const token = localStorage.getItem("token");
  const secretKey = localStorage.getItem("ver");
  const decrypted = decryptionState(token, secretKey);
  try {
    const response = await axiosData.get(
      `/v2/api/products/with-filter?filter=${type}&pageNumber=${pageNumber}`,
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

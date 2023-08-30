import axiosData from "../../../../api/axiosData"; 
import decryptionState from "../../../auth/helpers/decryptionState";
export const addProductApi = async (data) => {
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
      const url =localStorage.getItem("curr") ? `/api/carts/add-item?cur=${localStorage.getItem("curr")}` : "/api/carts/add-item" 
  try {
    const response = await axiosData.put(
        url , data,
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

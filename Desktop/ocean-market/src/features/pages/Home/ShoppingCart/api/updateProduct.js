import axiosData from "../../../../api/axiosData"; 
import decryptionState from "../../../auth/helpers/decryptionState";
export const updateProduct = async (item) => {
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
      const url = `/api/carts/update-item?cur=${localStorage.getItem("curr")}`
  try {
    const response = await axiosData.put(
        url ,item,
      {
        headers: {
          Authorization: `Bearer ${decrypted}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error)
    throw error.response.data.userMessage
      ? error.response.data.userMessage
      : error.response.data.message;
  }
};

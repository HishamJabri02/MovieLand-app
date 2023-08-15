import axiosData from "../../../../api/axiosData"; 
import decryptionState from "../../../auth/helpers/decryptionState";
export const deleteProductApi = async (id) => {
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
  try {
    const response = await axiosData.delete(
        `/api/carts/item/${id}` ,
      {
        headers: {
          Authorization: `Bearer ${decrypted}`,
        },
      }
    );
    location.reload()
    return response.data;
  } catch (error) {
    throw error.response.data.userMessage
      ? error.response.data.userMessage
      : error.response.data.message;
  }
};

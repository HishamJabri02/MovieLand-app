import axiosData from "../../../../api/axiosData"; 
import decryptionState from "../../../auth/helpers/decryptionState";
export const shoppingCartApi = async () => {
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
      const url = `/api/carts?cur=${localStorage.getItem("curr")}`
  try {
    const response = await axiosData.get(
        url ,
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

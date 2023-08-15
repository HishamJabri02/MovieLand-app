/* eslint-disable no-useless-catch */
import axiosData from "../../../../api/axiosData";
import decryptionState from "../../../auth/helpers/decryptionState";
export const getUserApi = async () => {
    const token = localStorage.getItem("token");
    const secretKey = localStorage.getItem("ver");
    const decrypted = decryptionState(token, secretKey);
  try {
    const response = await axiosData.get("/api/users/me",
    {
        headers: {
          Authorization: `Bearer ${decrypted}`,
        },
      });
    console.log(response)
    return response.data;
  } catch (error) {
    throw error.response.data.userMessage
      ? error.response.data.userMessage
      : error.response.data.message;
  }
};

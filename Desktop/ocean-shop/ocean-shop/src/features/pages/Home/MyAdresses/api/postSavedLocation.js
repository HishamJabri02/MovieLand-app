/* eslint-disable no-useless-catch */
import axiosData from "../../../../api/axiosData";
import decryptionState from "../../../auth/helpers/decryptionState";
export const postSavedLocation = async (data) => {
  const token = localStorage.getItem("token");
  const secretKey = localStorage.getItem("ver");
  const decrypted = decryptionState(token, secretKey);
  try {
    const response = await axiosData.post(
      "/api/users/saved_location",
      JSON.stringify(data),
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
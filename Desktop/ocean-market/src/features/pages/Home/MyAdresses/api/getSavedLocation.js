/* eslint-disable no-useless-catch */
import axiosData from "../../../../api/axiosData";
import decryptionState from "../../../auth/helpers/decryptionState";
export const getSavedLocation = async () => {
  const token = localStorage.getItem("token");
  const secretKey = localStorage.getItem("ver");
  const decrypted = decryptionState(token, secretKey);
  try {
    const response = await axiosData.get(
      "api/users/saved_location",
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

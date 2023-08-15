/* eslint-disable no-useless-catch */
import axiosData from "../../../../api/axiosData";
import decryptionState from "../../../auth/helpers/decryptionState";
export const getAddressApi = async () => {
  const token = localStorage.getItem("token");
  const secretKey = localStorage.getItem("ver");
  const decrypted = decryptionState(token, secretKey);
  const url = localStorage.getItem("curr")
    ? `/api/users/saved_location?cur=${localStorage.getItem("curr")}`
    : `/api/users/saved_location`;

  try {
    const response = await axiosData.get(url, {
      headers: {
        Authorization: `Bearer ${decrypted}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response.data.userMessage
      ? error.response.data.userMessage
      : error.response.data.message;
  }
};
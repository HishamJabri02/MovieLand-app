/* eslint-disable no-useless-catch */
import axiosData from "../../../../api/axiosData";
import decryptionState from "../../../auth/helpers/decryptionState";
export const confirmOrder = async (id) => {
  const token = localStorage.getItem("token");
  const secretKey = localStorage.getItem("ver");
  const decrypted = decryptionState(token, secretKey);
  try {
    const response = await axiosData.put(`/v2/api/orders/${id}/confirm-order`, {
      headers: {
        Authorization: `Bearer ${decrypted}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error.response.data.message;
  }
};
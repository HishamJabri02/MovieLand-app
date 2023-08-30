/* eslint-disable no-useless-catch */
import axiosData from "../../../../api/axiosData";
import decryptionState from "../../../auth/helpers/decryptionState";
export const createOrder = async (data) => {
  const token = localStorage.getItem("token");
  const secretKey = localStorage.getItem("ver");
  const decrypted = decryptionState(token, secretKey);
  const url =localStorage.getItem("curr") ? `/v2/api/orders?cur=${localStorage.getItem("curr")}` : "/v2/api/orders";

  try {
    const response = await axiosData.post(url, data, {
      headers: {
        Authorization: `Bearer ${decrypted}`,
      },
    });
    console.log(response);
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};

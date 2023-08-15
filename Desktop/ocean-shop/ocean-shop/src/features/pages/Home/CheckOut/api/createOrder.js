/* eslint-disable no-useless-catch */
import axiosData from "../../../../api/axiosData";
import decryptionState from "../../../auth/helpers/decryptionState";
export const createOrder = async (data) => {
  console.log(data)
  const token = localStorage.getItem("token");
  const secretKey = localStorage.getItem("ver");
  const decrypted = decryptionState(token, secretKey);
  try {
    const response = await axiosData.post("/v2/api/orders", data,{
      headers:{
        Authorization: `Bearer ${decrypted}`,
      }
    });
    console.log(response)
    return response.data;
  } catch (error) {
    console.log(error)
    throw error.response.data.message;
  }
};

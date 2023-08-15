import axiosData from "../../../../api/axiosData";
import decryptionState from "../../../auth/helpers/decryptionState";

export const WishListApi = async (id) => {
  const token = localStorage.getItem("token");
  const secretKey = localStorage.getItem("ver");
  const decrypted = decryptionState(token, secretKey);
  try {
    const response = await axiosData.put(
      `/api/users/like/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${decrypted}`,
        },
      }
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error.response.data.userMessage
      ? error.response.data.userMessage
      : error.response.data.message;
  }
};

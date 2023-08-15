import axiosData from "../../../../api/axiosData";
import decryptionState from "../../../auth/helpers/decryptionState";
export const notificationApi = async (number) => {
    const token = localStorage.getItem("token");
    const secretKey = localStorage.getItem("ver");
    const decrypted = decryptionState(token, secretKey);
    
  try {
    const response = await axiosData.get(
      `/v2/api/notifications/user-notifications?pageNumber=${number}&pageSize=10`,{
        headers: {
            Authorization: `Bearer ${decrypted}`,
          }
      }
    )
    return response.data;
  } catch (error) {
    throw error.response.data.userMessage
      ? error.response.data.userMessage
      : error.response.data.message;
  }
};

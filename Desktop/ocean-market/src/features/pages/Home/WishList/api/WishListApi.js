import axiosData from "../../../../api/axiosData";
import decryptionState from "../../../auth/helpers/decryptionState";

export const WishListApi = async (id) => {
  const language = localStorage.getItem("i18nextLng");
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
  try {
    const response = await axiosData.put(
      `/api/users/like/${id}?lang=${language}`,
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

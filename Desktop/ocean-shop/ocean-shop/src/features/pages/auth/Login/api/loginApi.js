/* eslint-disable no-useless-catch */
import axiosData from "../../../../api/axiosData";
export const loginApi = async (data) => {
  try {
    const response = await axiosData.post(
      "/api/auth/login",
      JSON.stringify(data)
    );
    return response.data;
  } catch (error) {
    throw error.response.data.userMessage
      ? error.response.data.userMessage
      : error.response.data.message;
  }
};

/* eslint-disable no-useless-catch */
import axiosData from "../../../../api/axiosData";
export const sliderApi = async () => {
  try {
    const response = await axiosData.get("/api/slider");
    return response.data;
  } catch (error) {
    throw error.response.data.userMessage
      ? error.response.data.userMessage
      : error.response.data.message;
  }
};
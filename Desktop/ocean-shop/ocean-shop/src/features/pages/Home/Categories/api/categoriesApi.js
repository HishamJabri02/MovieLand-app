/* eslint-disable no-useless-catch */
import axiosData from "../../../../api/axiosData";
export const categoriesApi = async () => {
  try {
    const response = await axiosData.get("/api/categories/");
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error.response.data.userMessage
      ? error.response.data.userMessage
      : error.response.data.message;
  }
};

/* eslint-disable no-useless-catch */
import axiosData from "../../../../api/axiosData";
export const brandsApi = async () => {
  try {
    const response = await axiosData.get("/v2/api/brands");
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error.response.data.userMessage
      ? error.response.data.userMessage
      : error.response.data.message;
  }
};

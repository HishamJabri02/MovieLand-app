/* eslint-disable no-useless-catch */
import axiosData from "../../../../api/axiosData";
export const getRegionsApi = async (id) => {
  try {
    const response = await axiosData.get(`/api/regions/for-city/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data.userMessage
      ? error.response.data.userMessage
      : error.response.data.message;
  }
};

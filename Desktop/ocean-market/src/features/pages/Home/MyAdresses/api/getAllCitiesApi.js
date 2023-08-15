/* eslint-disable no-useless-catch */
import axiosData from "../../../../api/axiosData";
export const getAllCitiesApi = async (id) => {
    try {
    const response = await axiosData.get(`/api/cities/country/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data.userMessage
      ? error.response.data.userMessage
      : error.response.data.message;
  }
};

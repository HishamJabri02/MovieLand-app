/* eslint-disable no-useless-catch */
import axiosData from "../../../../api/axiosData";
export const subCategoriesApi = async (id) => {
  try {
    const response = await axiosData.get(
      `/api/subCategories/specific-category/${id}`
    );
    return response.data;
  } catch (error) {
    throw error.response.data.userMessage
      ? error.response.data.userMessage
      : error.response.data.message;
  }
};

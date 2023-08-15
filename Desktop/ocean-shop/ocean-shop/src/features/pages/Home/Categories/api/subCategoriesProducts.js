/* eslint-disable no-useless-catch */
import axiosData from "../../../../api/axiosData";
export const subCategoriesProducts = async (id) => {
  try {
    const response = await axiosData.get(
      `/api/products/specific-subcategory/${id}`
    );
    return response.data;
  } catch (error) {
    throw error.response.data.userMessage
      ? error.response.data.userMessage
      : error.response.data.message;
  }
};

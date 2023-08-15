/* eslint-disable no-useless-catch */
import axiosData from "../../../../api/axiosData";
export const subCategoriesProducts = async (id) => {
  const url =localStorage.getItem("curr") ? `/api/products/specific-subcategory/${id}?cur=${localStorage.getItem("curr")}` : `/api/products/specific-subcategory/${id}`
  try {
    const response = await axiosData.get(
      url
    );
    return response.data;
  } catch (error) {
    throw error.response.data.userMessage
      ? error.response.data.userMessage
      : error.response.data.message;
  }
};

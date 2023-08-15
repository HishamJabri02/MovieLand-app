/* eslint-disable no-useless-catch */
import axiosData from "../../../../api/axiosData";
export const getProductsApi = async (brandId) => {
  try {
    const response = await axiosData.get(
      `/v2/api/products/product-by-brand/${brandId}`
    );
    return response.data.data;
  } catch (error) {
    throw error.response.data.userMessage
      ? error.response.data.userMessage
      : error.response.data.message;
  }
};

/* eslint-disable no-useless-catch */
import axiosData from "../../../../api/axiosData";
export const getProductsApi = async (brandId) => {
  const url =localStorage.getItem("curr") ? `/v2/api/products/product-by-brand/${brandId}?cur=${localStorage.getItem("curr")}` : `/v2/api/products/product-by-brand/${brandId}`

  try {
    const response = await axiosData.get(
      url
    );
    return response.data.data;
  } catch (error) {
    throw error.response.data.userMessage
      ? error.response.data.userMessage
      : error.response.data.message;
  }
};

import axiosData from "../../../../api/axiosData";
export const verifyAccount = async (data) => {
  try {
    const response = await axiosData.post(
      "/api/confirm/verify-account",
      JSON.stringify(data)
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

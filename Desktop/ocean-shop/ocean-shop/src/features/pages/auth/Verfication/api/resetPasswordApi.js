import axiosData from "../../../../api/axiosData";
export const resetPasswordApi = async (data) => {
  try {
    const response = await axiosData.put(
      "/api/confirm/reset-password",
      JSON.stringify(data)
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

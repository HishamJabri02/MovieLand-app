import axiosData from "../../../../api/axiosData";
export const resetPasswordApi = async (data) => {
  const language = localStorage.getItem("i18nextLng");
  try {
    const response = await axiosData.put(
      `/api/confirm/reset-password?lang=${language}`,
      JSON.stringify(data)
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

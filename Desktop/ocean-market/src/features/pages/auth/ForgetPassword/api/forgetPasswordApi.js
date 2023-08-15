import axiosData from "../../../../api/axiosData";
export const forgetPasswordApi = async (data) => {
  const language = localStorage.getItem("i18nextLng");
  try {
    const response = await axiosData.post(
      `/api/confirm/send-otp-reset-password?lang=${language}`,
      JSON.stringify(data)
    );
    return response.data;
  } catch (error) {
    throw error.response.data.userMessage
      ? error.response.data.userMessage
      : error.response.data.message;
  }
};

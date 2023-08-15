import axiosData from "../../../../api/axiosData";
export const forgetPasswordApi = async (data) => {
  try {
    const response = await axiosData.post(
      "/api/confirm/send-otp-reset-password",
      JSON.stringify(data)
    );
    return response.data;
  } catch (error) {
    throw error.response.data.userMessage
      ? error.response.data.userMessage
      : error.response.data.message;
  }
};

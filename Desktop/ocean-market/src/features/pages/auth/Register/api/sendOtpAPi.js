import axiosData from "../../../../api/axiosData";
export const sendOtpApi = async (data) => {
  try {
    const response = await axiosData.post(
      "/api/confirm/send-otp",
      JSON.stringify(data)
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

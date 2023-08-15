import axiosData from "../../../../api/axiosData";
export const registerApi = async (data) => {
  try {
    const response = await axiosData.post(
      "/api/auth/signup",
      JSON.stringify(data)
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

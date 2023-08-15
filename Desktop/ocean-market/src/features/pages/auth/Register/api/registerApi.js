import axiosData from "../../../../api/axiosData";
export const registerApi = async (data) => {
  const language = localStorage.getItem("i18nextLng");
  try {
    const response = await axiosData.post(
      `/api/auth/signup?lang=${language}`,
      JSON.stringify(data)
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

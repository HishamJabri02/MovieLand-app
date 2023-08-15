import axiosData from "../../../../api/axiosData";
export const statusApi = async (token) => {
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  try {
    const response = await axiosData.put(
      "/v2/api/users/user-status",
      JSON.stringify({
        firebaseToken: "hello",
      }),
      {
        headers,
      }
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

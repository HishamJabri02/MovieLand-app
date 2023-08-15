import { statusApi } from "../api/statusApi";
async function checkStatus(token) {
  let response = await statusApi(token);
  return response;
}
export default checkStatus;

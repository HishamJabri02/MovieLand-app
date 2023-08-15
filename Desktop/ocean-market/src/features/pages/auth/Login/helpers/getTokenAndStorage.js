import encryption from "../../helpers/encryptionState";
const getTokenAndStorage = (remember, token) => {
  const storage = remember ? localStorage : sessionStorage;
  const encryptionToken = encryption(token);
  console.log(encryptionToken.secretKey)
  storage.setItem("ver", encryptionToken.secretKey);
  storage.setItem("token", encryptionToken.encryptedData);
};
export default getTokenAndStorage;

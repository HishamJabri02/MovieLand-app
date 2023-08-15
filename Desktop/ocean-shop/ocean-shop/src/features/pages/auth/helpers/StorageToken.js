import encryption from "./encryptionState";
const StorageToken = (token) => {
  const encryptionToken = encryption(token);
  //this is the secretkey
  localStorage.setItem("ver", encryptionToken.secretKey);
  localStorage.setItem("token", encryptionToken.encryptedData);
};
export default StorageToken;

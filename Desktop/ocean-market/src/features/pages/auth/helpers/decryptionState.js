import sjcl from 'sjcl';
export default function decryptionState(encryptedData, secretKey) {
  const decryptedData = sjcl.decrypt(secretKey, encryptedData);
  return decryptedData;
}
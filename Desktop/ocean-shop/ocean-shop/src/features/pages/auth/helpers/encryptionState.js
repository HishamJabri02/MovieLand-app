import sjcl from 'sjcl';
import { v4 as uuidv4 } from "uuid";

function encryption(data) {
  const secretKey = uuidv4();
  const encryptedData = sjcl.encrypt(secretKey, data);
  return { encryptedData: encryptedData, secretKey: secretKey };
}
export default encryption;
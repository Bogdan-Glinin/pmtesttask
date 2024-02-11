import CryptoJS from "crypto-js";

const secretKey = "e4po4mack";

export const encryptData = (data: any): string => {
  const encrypted = CryptoJS.AES.encrypt(JSON.stringify(data), secretKey).toString();
  return encrypted;
};

export const decryptData = (encryptedData: string): any => {
  const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
  const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  return decryptedData;
};
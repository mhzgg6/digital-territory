import CryptoJS from "crypto-js"
const SECRET_KEY = "digital-territory"
/**
 * @description: 加密
 * @param {string} data
 * @param {string} key
 * @return {string} encryptedData
 */
const encrypt = (data: string): string => {
  const encryptedData = CryptoJS.AES.encrypt(data, SECRET_KEY).toString()
  return encryptedData
}

/**
 * @description: 解密
 * @param {string} cipher
 * @param {string} key
 * @return {string} decryptedData
 */
const decrypt = (cipher: string): string => {
  const bytes = CryptoJS.AES.decrypt(cipher, SECRET_KEY)
  const decryptedData = bytes.toString(CryptoJS.enc.Utf8)
  return decryptedData
}

export { encrypt, decrypt }

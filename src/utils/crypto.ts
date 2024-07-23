import CryptoJS from "crypto-js"
/**
 * @description: 加密
 * @param {string} data
 * @param {string} key
 * @return {string} encryptedData
 */
const encrypt = (data: string): string => {
  const encryptedData = CryptoJS.SHA256(data).toString()
  return encryptedData
}

export { encrypt }

const crypto = require("crypto");

const algorithm = "aes-256-ctr";
const secretKey = "vWm3s6vWm3s6vWm3s6vWm3s6";
const encrypt = (text) => {
  try {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(algorithm, secretKey, iv);
    const encrypted = cipher.update(text, "utf8", "hex") + cipher.final();
    return {
      chiper: encrypted.toString("hex"),
      key: iv.toString("hex"),
    };
  } catch (err) {
    throw err;
  }
};

const decrypt = (chiper, iv) => {
  try {
    const decipher = crypto.createDecipheriv(
      algorithm,
      secretKey,
      Buffer.from(iv, "hex")
    );
    const decrypted = decipher.update(chiper, "hex", "utf8") + decipher.final();
    return decrypted;
  } catch (err) {
    throw err;
  }
};

module.exports = { encrypt, decrypt };

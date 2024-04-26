function encodeToBase64(str) {
  const buffer = Buffer.from(str, "utf8");
  return buffer.toString("base64");
}

function decodeFromBase64(base64Str) {
  const buffer = Buffer.from(base64Str, "base64");
  return buffer.toString("utf8");
}

const originalString = "justapassword";
const encodedString = encodeToBase64(originalString);
const decodedString = decodeFromBase64(encodedString);

console.log("Original String:", originalString);
console.log("Encoded String:", encodedString);
console.log("Decoded String:", decodedString);

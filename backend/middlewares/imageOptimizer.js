const sharp = require("sharp");
const path = require("path");

async function optimizeImage(inputBuffer, width, format = "webp") {
  try {
    const outputBuffer = await sharp(inputBuffer)
      .resize(width)
      .toFormat(format, {
        quality: format === "jpeg" ? 80 : format === "webp" ? 85 : 100,
      })
      .toBuffer();

    return outputBuffer;
  } catch (err) {
    throw new Error(`Image optimization failed: ${err.message}`);
  }
}

module.exports = optimizeImage;

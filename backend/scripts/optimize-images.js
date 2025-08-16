const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const imageDir = path.join(__dirname, "../public/images");

console.log("🔄 Optimizing images...");

fs.readdirSync(imageDir).forEach(async (file) => {
  if (/\.(jpg|jpeg|png)$/i.test(file)) {
    const inputPath = path.join(imageDir, file);
    const outputPath = inputPath.replace(/\.(jpg|jpeg|png)$/i, ".webp");

    await sharp(inputPath)
      .resize(1200) // Max width
      .webp({ quality: 80 })
      .toFile(outputPath);

    console.log(`✅ Optimized ${file} → ${path.basename(outputPath)}`);
  }
});

import sharp from "sharp";
import { copyFileSync, mkdirSync } from "fs";

const src = "D:/Documenten/Hardwareheld/icon.png";
const out = "public";

const sizes = [
  { file: "favicon-16x16.png",        size: 16  },
  { file: "favicon-32x32.png",        size: 32  },
  { file: "apple-touch-icon.png",     size: 180 },
  { file: "android-chrome-192x192.png", size: 192 },
  { file: "android-chrome-512x512.png", size: 512 },
];

// Copy original as high-res source
copyFileSync(src, `${out}/icon.png`);
console.log("  Copied: icon.png");

for (const { file, size } of sizes) {
  await sharp(src)
    .resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(`${out}/${file}`);
  console.log(`  Generated: ${file} (${size}x${size})`);
}

// favicon.ico: 32x32 PNG renamed (browsers accept .ico with PNG data)
await sharp(src)
  .resize(32, 32, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toFile(`${out}/favicon.ico`);
console.log("  Generated: favicon.ico (32x32)");

console.log("\nKlaar.");

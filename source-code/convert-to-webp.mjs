/**
 * convert-to-webp.mjs
 * Run from source-code/ directory: node convert-to-webp.mjs
 */
import sharp from "sharp";
import { readdir, stat } from "fs/promises";
import { join, extname, basename } from "path";

const QUALITY = 82;

const DIRS = [
  "./public/images",
  "./public/logo",
];

const EXTS = [".png", ".jpg", ".jpeg"];

async function convertDir(dir) {
  const files = await readdir(dir);
  for (const file of files) {
    const ext = extname(file).toLowerCase();
    if (!EXTS.includes(ext)) continue;
    const inputPath = join(dir, file);
    const outputPath = join(dir, basename(file, ext) + ".webp");

    const inputStat = await stat(inputPath);
    const inputKB = Math.round(inputStat.size / 1024);

    try {
      await sharp(inputPath)
        .webp({ quality: QUALITY, effort: 4 })
        .toFile(outputPath);

      const outputStat = await stat(outputPath);
      const outputKB = Math.round(outputStat.size / 1024);
      const pct = Math.round((1 - outputStat.size / inputStat.size) * 100);
      console.log(`OK  ${file.padEnd(48)} ${inputKB.toString().padStart(6)} KB -> ${outputKB.toString().padStart(6)} KB  (-${pct}%)`);
    } catch (err) {
      console.error(`FAIL  ${file}: ${err.message}`);
    }
  }
}

console.log("Converting images to WebP...\n");
for (const dir of DIRS) {
  await convertDir(dir);
}
console.log("\nDone.");

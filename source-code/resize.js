const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');

const images = [
  // Hero watermark logo: displayed at 300-400px CSS, 1x = fine at 400px for retina
  { src: 'logo/PHLOGO.webp', dest: 'logo/PHLOGO-opt.webp', width: 400, height: 400, quality: 60 },
  // Nav logo: displayed at 40x40px, tiny thumbnail
  { src: 'logo/PHLOGO.webp', dest: 'logo/PHLOGO-nav.webp', width: 80, height: 80, quality: 80 },
  // Capitol building: displayed at 475x316px, 2x = 950x632
  { src: 'images/pangasinan-capitol-building.webp', dest: 'images/pangasinan-capitol-building-opt.webp', width: 950, height: 632, quality: 75 },
  // Museum: displayed at 475x271, 2x = 950x542
  { src: 'images/banaan-provincial-museum.webp', dest: 'images/banaan-provincial-museum-opt.webp', width: 950, height: 542, quality: 75 },
];

async function run() {
  for (const img of images) {
    const srcPath  = path.join(publicDir, img.src);
    const destPath = path.join(publicDir, img.dest);
    if (fs.existsSync(srcPath)) {
      const old = fs.statSync(srcPath).size;
      await sharp(srcPath)
        .resize(img.width, img.height, { fit: 'cover' })
        .webp({ quality: img.quality })
        .toFile(destPath);
      const now = fs.statSync(destPath).size;
      console.log(`${img.dest}: ${(old/1024).toFixed(1)}KB → ${(now/1024).toFixed(1)}KB`);
    } else {
      console.warn(`NOT FOUND: ${img.src}`);
    }
  }
}

run().catch(console.error);

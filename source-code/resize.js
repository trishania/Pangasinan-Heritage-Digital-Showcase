const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');

const images = [
  { file: 'logo/PHLOGO.webp', width: 750, height: 750 },
  { file: 'images/pangasinan-capitol-building.webp', width: 950, height: 632 },
  { file: 'images/banaan-provincial-museum.webp', width: 950, height: 542 },
];

async function run() {
  for (const img of images) {
    const filePath = path.join(publicDir, img.file);
    const destFileName = img.file.replace('.webp', '-opt.webp');
    const destPath = path.join(publicDir, destFileName);
    
    if (fs.existsSync(filePath)) {
      console.log(`Processing: ${img.file}`);
      await sharp(filePath)
        .resize(img.width, img.height, { fit: 'cover' })
        .webp({ quality: 80 })
        .toFile(destPath);
      
      console.log(`Created ${destFileName}`);
    } else {
      console.log(`Not found: ${filePath}`);
    }
  }
}

run().catch(console.error);

const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const IMAGES_DIR = path.join(__dirname, "..", "public", "images");
const OUT_DIR = path.join(IMAGES_DIR, "optimized");

if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

const MAX_WIDTH = {
  "serenity-hero.jpg": 1600,
};

async function processImage(file) {
  const ext = path.extname(file).toLowerCase();
  const name = path.basename(file);
  const inputPath = path.join(IMAGES_DIR, file);
  const outName = name.replace(ext, "");
  const defaultMax = 1200;
  const max = MAX_WIDTH[name] || defaultMax;

  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();

    // Resize only if wider than target
    const width = metadata.width && metadata.width > max ? max : metadata.width;

    // Output JPEG/PNG optimized
    const outPath = path.join(OUT_DIR, `${outName}${ext}`);
    await image
      .resize({ width })
      .toFormat(metadata.format === "png" ? "png" : "jpeg", { quality: 82 })
      .toFile(outPath);

    // Output WebP
    const webpPath = path.join(OUT_DIR, `${outName}.webp`);
    await sharp(inputPath)
      .resize({ width })
      .webp({ quality: 78 })
      .toFile(webpPath);

    console.log("Processed", file, "->", path.relative(process.cwd(), outPath));
  } catch (err) {
    console.error("Failed to process", file, err.message);
  }
}

async function run() {
  const files = fs.readdirSync(IMAGES_DIR).filter((f) => f !== "optimized");
  for (const file of files) {
    const p = path.join(IMAGES_DIR, file);
    const stat = fs.statSync(p);
    if (stat.isFile()) {
      const ext = path.extname(file).toLowerCase();
      if ([".jpg", ".jpeg", ".png"].includes(ext)) {
        // eslint-disable-next-line no-await-in-loop
        await processImage(file);
      }
    }
  }
  console.log("Done. Optimized images are in public/images/optimized");
}

run();

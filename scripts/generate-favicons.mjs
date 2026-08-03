import sharp from "sharp";
import pngToIco from "png-to-ico";
import { writeFileSync } from "fs";
import { join } from "path";

const SOURCE = join("public/image/TC007103.jpg");
const OUT = "public";

// Face-focused crop tuned for TC007103.jpg
const CROP = { left: 1200, top: 350, width: 2200, height: 2200 };
const TAB_SIZES = [16, 32, 48];
const SQUARE_SIZES = [180, 192, 512];

function circleMask(size) {
  const radius = size / 2;
  return Buffer.from(
    `<svg width="${size}" height="${size}"><circle cx="${radius}" cy="${radius}" r="${radius}" fill="white"/></svg>`
  );
}

async function renderSquare(size) {
  return sharp(SOURCE)
    .extract(CROP)
    .resize(size, size, { fit: "cover" })
    .png()
    .toBuffer();
}

async function renderCircular(size) {
  const square = await renderSquare(size);
  return sharp(square)
    .composite([{ input: circleMask(size), blend: "dest-in" }])
    .png()
    .toBuffer();
}

async function main() {
  for (const size of TAB_SIZES) {
    const png = await renderCircular(size);
    writeFileSync(join(OUT, `favicon-${size}x${size}.png`), png);
  }

  for (const size of SQUARE_SIZES) {
    const png = await renderSquare(size);
    writeFileSync(join(OUT, `favicon-${size}x${size}.png`), png);
  }

  const appleTouch = await renderSquare(180);
  writeFileSync(join(OUT, "apple-touch-icon.png"), appleTouch);

  const ico = await pngToIco([
    join(OUT, "favicon-16x16.png"),
    join(OUT, "favicon-32x32.png"),
    join(OUT, "favicon-48x48.png"),
  ]);
  writeFileSync(join(OUT, "favicon.ico"), ico);

  console.log("Generated favicons in public/");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

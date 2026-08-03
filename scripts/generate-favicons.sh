#!/usr/bin/env bash
set -euo pipefail

# Regenerate favicons from the hero portrait (face-focused crop).
# Requires: macOS sips, python3 with Pillow (pip install pillow).

SOURCE="public/image/TC007103.jpg"
OUT="public"
TMP="$(mktemp -d)"

cleanup() {
  rm -rf "$TMP"
}
trap cleanup EXIT

# Face-focused square crop — tuned for TC007103.jpg
sips --cropOffset 350 1200 --cropToHeightWidth 2200 2200 "$SOURCE" --out "$TMP/face.jpg" >/dev/null

python3 - "$TMP/face.jpg" "$OUT" <<'PY'
from PIL import Image, ImageDraw
from pathlib import Path
import sys

try:
    import PIL  # noqa: F401
except ImportError:
    sys.exit("Install Pillow first: pip install pillow")

src = Path(sys.argv[1])
out = Path(sys.argv[2])
img = Image.open(src)

def circle_mask(size):
    mask = Image.new("L", (size, size), 0)
    draw = ImageDraw.Draw(mask)
    draw.ellipse((0, 0, size - 1, size - 1), fill=255)
    return mask

def save_square(size, path):
    img.resize((size, size), Image.Resampling.LANCZOS).save(path, format="PNG", optimize=True)

def save_circle(size, path):
    resized = img.resize((size, size), Image.Resampling.LANCZOS).convert("RGBA")
    resized.putalpha(circle_mask(size))
    resized.save(path, format="PNG", optimize=True)

for size in (16, 32, 48):
    save_circle(size, out / f"favicon-{size}x{size}.png")

for size in (180, 192, 512):
    save_square(size, out / f"favicon-{size}x{size}.png")

save_square(180, out / "apple-touch-icon.png")

ico_images = [Image.open(out / f"favicon-{s}x{s}.png").convert("RGBA") for s in (16, 32, 48)]
ico_images[0].save(
    out / "favicon.ico",
    format="ICO",
    sizes=[(16, 16), (32, 32), (48, 48)],
    append_images=ico_images[1:],
)

print("Generated favicons in public/")
PY

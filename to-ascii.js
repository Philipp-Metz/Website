/*
import portraitUrl from "./src/assets/portrait-nobg.png";

export function convertToAscii() {
  const chars = "..:-=++**#%@";
  const img = new Image();
  img.src = portraitUrl;
  img.onload = () => {
    const cols = 60;
    const rows = Math.floor(cols * (img.height / img.width) * 0.55);

    const canvas = document.createElement("canvas");
    canvas.width = cols;
    canvas.height = rows;

    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, cols, rows);
    const pixels = ctx.getImageData(0, 0, cols, rows).data;

    let asciiPreview = "";
    const particleData = [];

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const i = (y * cols + x) * 4;
        const r = pixels[i];
        const g = pixels[i + 1];
        const b = pixels[i + 2];
        const alpha = pixels[i + 3];
        if (alpha < 128) {
          asciiPreview += " ";
        } else {
          const brightness = (r + g + b) / 3;
          const charIndex = Math.floor((brightness / 255) * (chars.length - 1));
          const char = chars[charIndex];
          asciiPreview += char;
          particleData.push({ x, y, char, brightness: Math.round(brightness) });
        }
      }
      asciiPreview += "\n";
    }
    console.log(asciiPreview);
    console.log(JSON.stringify(particleData));
  };
}
*/

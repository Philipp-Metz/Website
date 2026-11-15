import asciiPortraitRaw from "../assets/ASCII-portrait.txt?raw";

const lines = asciiPortraitRaw.replace(/\r\n/g, "\n").split("\n");

export const portraitData = [];

lines.forEach((line, y) => {
  for (let x = 0; x < line.length; x++) {
    const char = line[x];
    if (char !== " ") {
      portraitData.push({ x, y, char });
    }
  }
});

export const portraitCols = Math.max(
  0,
  ...portraitData.map((particle) => particle.x + 1),
);
export const portraitRows = Math.max(
  0,
  ...portraitData.map((particle) => particle.y + 1),
);

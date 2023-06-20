import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const write = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const pathFile = path.join(__dirname, "files", "fileToWrite.txt");
  const writableStream = fs.createWriteStream(pathFile);

  process.stdin.setEncoding("utf8");

  process.stdin.on("readable", () => {
    const chunk = process.stdin.read();
    if (chunk !== null) {
      writableStream.write(chunk);
    }
  });
};

await write();

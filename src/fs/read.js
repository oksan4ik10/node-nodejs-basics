import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const pathFile = path.join(__dirname, "files", "fileToRead.txt");

  fs.access(pathFile, fs.F_OK, (err) => {
    if (err) throw new Error("FS operation failed");
    const fileContent = fs.readFileSync(pathFile, "utf8");
    console.log(fileContent);
  });
};

await read();

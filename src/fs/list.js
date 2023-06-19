import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const list = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const pathFile = path.join(__dirname, "files");
  fs.readdir(pathFile, (err, files) => {
    if (err) throw new Error("FS operation failed");
    else {
      console.log(...files);
    }
  });
};

await list();

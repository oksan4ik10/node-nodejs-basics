import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const rename = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const pathFile = path.join(__dirname, "files", "wrongFilename.txt");
  const pathNewFile = path.join(__dirname, "files", "properFilename.md");
  console.log(pathFile);

  fs.access(pathFile, fs.F_OK, (err) => {
    if (err) {
      throw new Error("FS operation failed");
    }
    fs.access(pathNewFile, fs.F_OK, (err) => {
      if (err) {
        fs.rename(pathFile, pathNewFile, (err) => {
          if (err) throw err; // не удалось переименовать файл
        });
        return;
      }
      throw new Error("FS operation failed");
    });
  });
};

await rename();

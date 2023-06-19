import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const remove = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const pathFile = path.join(__dirname, "files", "fileToRemove.txt");

  fs.access(pathFile, fs.F_OK, (err) => {
    if (err) {
      throw new Error("FS operation failed");
    }
    fs.unlink(pathFile, (err) => {
      if (err) throw err;
    });
  });
};

await remove();

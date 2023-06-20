import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const create = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const pathFile = path.join(__dirname, "files", "fresh.txt");

  fs.access(pathFile, fs.F_OK, (err) => {
    if (err) {
      const rr = fs.createWriteStream(pathFile, "utf-8");
      rr.write("I am fresh and young");
      return;
    }
    throw new Error("FS operation failed");
  });
};

await create();

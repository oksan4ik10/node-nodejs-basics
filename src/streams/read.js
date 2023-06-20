import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const pathFile = path.join(__dirname, "files", "fileToRead.txt");

  const stream = new fs.ReadStream(pathFile, { encoding: "utf-8" });

  stream.on("readable", function () {
    const data = stream.read();
    if (data) process.stdout.write(data);
  });
};

await read();

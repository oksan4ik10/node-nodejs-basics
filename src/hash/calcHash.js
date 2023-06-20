import fs from "fs";
import crypto from "crypto";
import path from "path";
import { fileURLToPath } from "url";

const calculateHash = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const pathFile = path.join(__dirname, "files", "fileToCalculateHashFor.txt");

  const fd = fs.createReadStream(pathFile);
  const hash = crypto.createHash("sha256");
  hash.setEncoding("hex");

  fd.on("end", function () {
    hash.end();
    console.log(hash.read());
  });

  fd.pipe(hash);
};

await calculateHash();

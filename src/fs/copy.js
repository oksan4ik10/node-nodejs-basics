import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const copy = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  fs.stat(path.join(__dirname, "files-copy"), function (err) {
    if (!err) {
      throw new Error("FS operation failed");
    }
  });

  fs.mkdir(path.join(__dirname, "files-copy"), { recursive: true }, (err) => {
    if (err) throw err;
    fs.readdir(path.join(__dirname, "files-copy"), (err, files) => {
      files.forEach((file) => {
        fs.unlink(path.join(__dirname, "files-copy", file), (err) => {
          if (err) throw err;
        });
      });
    });

    fs.readdir(path.join(__dirname, "files"), (err, files) => {
      files.forEach((file) => {
        fs.copyFile(
          path.join(__dirname, "files", file),
          path.join(__dirname, "files-copy", file),
          (err) => {
            if (err) throw err;
          }
        );
      });
    });
  });
};

await copy();

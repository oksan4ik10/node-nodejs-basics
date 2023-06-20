import { Transform } from "stream";
import { pipeline } from "stream/promises";
const transform = async () => {
  process.stdin.setEncoding("utf8");

  const uppercase = new Transform({
    transform(str, encoding, callback) {
      callback(null, str.toString().trim().split("").reverse().join("") + "\n");
    },
  });

  await process.stdin.pipe(uppercase).pipe(process.stdout);
};

await transform();

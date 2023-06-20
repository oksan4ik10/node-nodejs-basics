const parseArgs = () => {
  const args = process.argv;
  let res = "";
  args.forEach((item, index) => {
    if (item.slice(0, 2) === "--") {
      res += `${item} is ${args[index + 1]}, `;
    }
  });
  console.log(res.slice(0, res.length - 2));
};

parseArgs();

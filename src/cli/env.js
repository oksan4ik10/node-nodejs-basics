const parseEnv = () => {
  process.env.RSS_name1 = "2323";
  process.env.RSS_name2 = "23444423";
  process.env.RSS = "23243";
  const env = process.env;

  let res = "";

  for (const key in env) {
    if (key.slice(0, 4) === "RSS_") {
      res = res + `${key}=${env[key]}; `;
    }
  }
  console.log(res.trim());
};

parseEnv();

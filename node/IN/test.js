import fs from "node:fs/promises";

const readPJson = async () => {
  console.log(JSON.parse(await fs.readFile("./package.json", "utf8")));
};

const writeFile = async () => {
  await fs.writeFile("./demo.js", "console.log('yoooo!');");
};

readPJson();
writeFile();

const { readFileSync, writeFileSync, readFile } = require("fs");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/subfolder/test.txt", "utf8");

writeFileSync("./content/second.txt", `here is the result ${first}, ${second}`);

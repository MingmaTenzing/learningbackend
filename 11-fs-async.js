const { writeFile, readFile, read } = require("fs");

readFile("./content/first.txt", "utf-8", (err, res) => {
  if (err) {
    return console.log(err);
  }
  const first = res;
  readFile("./content/second.txt", "utf-8", (err, res) => {
    if (err) {
      return console.log(err);
    }
    const second = res;
    writeFile(
      "./content/third.txt",
      `Heres is the result: ${first}, ${second}`,
      (err, res) => {
        if (err) {
          return console.log(err);
        }
        console.log(res);
      }
    );
  });
});

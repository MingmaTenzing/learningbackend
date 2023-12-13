const { readFile } = require("fs");

console.log("this is the first test");
readFile("./content/first.txt", "utf-8", (res, err) => {
  if (err) {
    return console.log(err);
  }
  console.log(result);
  console.log("testing the event loop");
});

console.log("this is the end of the test");

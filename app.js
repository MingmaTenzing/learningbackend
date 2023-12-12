const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to home page");
  }
  if (req.url === "/about") {
    res.end("a short history");
  }
  res.end(`
    <h1>we'sorry couldn't find the page you are looking for</h1>
    <p>Please contact the customer support </p>
    `);
});

server.listen(5000);

const fs = require("fs");

const path = require("path");

const http = require("http");

const public_dir = path.join(__dirname, "public");

const server = http.createServer(function (req, res) {
  const filePath = path.join(public_dir, req.url);
  fs.readFile(filePath, function (err, data) {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write("404 not found");
      res.end();
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });

      res.end(data);
    }
  });
});

server.listen(3000);

console.log("server run success");

const http = require("http");
const fs = require("fs/promises");
let files;

fs.readdir("./resources")
  .then((data) => {
    files = data;
  })
  .catch((err) => {
    throw err;
  });

http
  .createServer((req, res) => {
    switch (req.url) {
      case "/":
        res.writeHead(200, { "content-type": "text/html" });
        files.map((file) => {
          res.write(`<li><a href="${file}">${file}</a></li><br>`);
        });
        res.end();
        break;
      default:
        files.find((url) => {
          res.writeHead(200, { "content-type": "text/html" });
          if (`/${url}` == req.url) {
            fs.readFile(`./resources/${url}`)
              .then((file) => {
                res.write(file);
                res.end();
              })
              .catch((err) => {
                throw err;
              });
          }
        });
        break;
    }
  })
  .listen("8000", () => console.log("Server is running!"));
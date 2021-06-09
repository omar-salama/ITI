const http = require("http");
const fs = require("fs");
let files;

fs.readdir("./resources", (err, res) => {
  if (err) console.log(err);
  files = res;
});

http
  .createServer((req, res) => {
    // res.writeHead('200');
    const url = req.url;
    switch (url) {
      case "/":
        res.setHeader("content-type", "text/html");
        files.map((file) => {
          res.write(`<li><a href="${file}">${file}</a></li><br>`);
        });
        console.log(files);
        res.end();
        break;
      default:
        files.find((u) => {
          if (`/${u}` == url) {
            fs.readFile(`./resources/${u}`, (err, file) => {
              if (err) console.log(err);
              res.write(file);
              res.end();
            });
          }
        });
        break;
    }
  })
  .listen("8000", () => console.log("Server is running!"));

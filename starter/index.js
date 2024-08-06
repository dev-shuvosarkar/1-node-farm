const fs = require("fs");
const http = require("http");
const { CLIENT_RENEG_LIMIT } = require("tls");
const url = require("url");

//..................file system........................

// ********************blocking -> syncronus way*************************
// const inptuIN = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(inptuIN);

// const now = new Date();
// const txtOut = `the data of (input.txt) is: ${inptuIN} and current time is: ${now.toLocaleTimeString()}`;

// fs.writeFileSync('./txt/output.txt', txtOut);

// ****************non-blocking -> asyncronous way********************
// fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
//   if (err) return console.log("some error occourd!!");

//   fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
//     console.log(data2);
//     fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
//       console.log(data3);

//       fs.writeFile("./txt/final.txt", `${data2}\n${data3}`, "utf-8", (err) => {
//         console.log("Your file has been Writen.");
//       });
//     });
//   });
// });
// console.log("woll read this first!");

//........................server..............................

fs.readFile(`${__dirname}/dev-data/data.json`, "utf-8", (err, data) => {
  const produceData = JSON.parse(data);
});

const server = http.createServer((req, res) => {
  const urlName = req.url;

  if (urlName === "/" || urlName === "/home") {
    res.end("this is the #home page.");
  } else if (urlName === "/about") {
    res.end("this is the #About page.");
  } else if (urlName === "/login") {
    res.end("this is the #Login page.");
  } else if (urlName === "/api") {
    fs.readFile(`${__dirname}/dev-data/data.json`, "utf-8", (err, data) => {
      const produceData = JSON.parse(data);
      res.writeHead(200, { "content-type": "application/json" });
      res.end(data);
    });
  } else {
    res.writeHead(404, {
      "content-type": "text/html",
    });
    res.end("<h1>404 not found!</h1>");
  }
});

server.listen(2000, "127.0.0.1", () => {
  console.log("Server is live on port: 2000");
});

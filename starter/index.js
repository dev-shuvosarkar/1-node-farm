const fs = require("fs");

// // blocking -> syncronus way
// const inptuIN = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(inptuIN);

// const now = new Date();
// const txtOut = `the data of (input.txt) is: ${inptuIN} and current time is: ${now.toLocaleTimeString()}`;

// fs.writeFileSync('./txt/output.txt', txtOut);

// non-blocking -> asyncronous way

fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
  if (err) return console.log("some error occourd!!");

  fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
    console.log(data2);
    fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
      console.log(data3);

      fs.writeFile("./txt/final.txt", `${data2}\n${data3}`, "utf-8", (err) => {
        console.log("Your file has been Writen.");
      });
    });
  });
});
console.log("woll read this first!");

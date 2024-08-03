const fs = require("fs");

// // blocking -> syncronus way
// const inptuIN = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(inptuIN);

// const now = new Date();
// const txtOut = `the data of (input.txt) is: ${inptuIN} and current time is: ${now.toLocaleTimeString()}`;

// fs.writeFileSync('./txt/output.txt', txtOut);


// non-blocking -> asyncronous way
fs.readFile('./txt/start.txt', 'utf-8', (err, data) => {
  console.log(data);
})
console.log('console data!');
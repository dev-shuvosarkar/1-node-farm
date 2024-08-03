const fs = require("fs");

const inptuIN = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(inptuIN);

const now = new Date();
const txtOut = `the data of (input.txt) is: ${inptuIN} and current time is: ${now.toLocaleTimeString()}`;

fs.writeFileSync('./txt/output.txt', txtOut);
const path = require("node:path");


console.log(__dirname); // gives the current file directory path
console.log(__filename); // gives the current file path

console.log(path.basename(__filename))
console.log(path.basename(__dirname))

console.log(path.parse(__filename))
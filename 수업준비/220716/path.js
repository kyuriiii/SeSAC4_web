const path = require("path");
const string = __filename;

console.log("path.sep : ", path.sep);
console.log("pat.delimiter : ", path.delimiter);

console.log("path.dirname() : ", path.dirname(string));
console.log("path.extname() : ", path.extname(string));
console.log("path.basename() : ", path.basename(string));
console.log("path.parse() : ", path.parse(string));
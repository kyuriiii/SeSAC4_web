const os = require("os");

console.log( os.hostname() );

const path = require("path");
const string = __filename;
console.log( path.extname(string) );
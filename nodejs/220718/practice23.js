const os = require( "os" );
const path = require( "path" );

console.log( os.freemem() );
console.log( os.totalmem() );
console.log( os.homedir() );

const string = __filename;
console.log( path.sep );
console.log( path.extname(string) );
console.log( path.parse(string) );




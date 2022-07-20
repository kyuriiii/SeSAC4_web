
const fs = require("fs").promises;

// fs.readFile("./test.txt", function(err, data) {
//     if ( err ) throw err;

//     console.log( data );
    
//     console.log( data.toString() );
// });

// fs.copyFile("./write.txt", "./new.txt")
//     .then(() => {
//         console.log("복사완료");
//     })
//     .catch((err) => {
//         console.log( err );
//     });

async function exec(){
    await fs.writeFile("./write.txt", "안녕");
    await fs.copyFile("./write.txt", "./new2.txt");
}
exec();
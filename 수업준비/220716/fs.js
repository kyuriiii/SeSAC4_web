// const fs = require("fs");

// fs.readFile("./text.txt", (err, data) => {
//     if ( err ) throw err;

//     console.log( data );
//     console.log( data.toString() );
// });

// const fs = require("fs").promises;

// fs.readFile('./text.txt')
//     .then((data) => {
//         console.log( data );
//         console.log( data.toString() );
//     })
//     .catch((err) => {
//         console.error(err);
//     });

const fs = require("fs").promises;

fs.copyFile('./write.txt', './new.txt')
    .then(() => {
        console.log("복사 완료");
    })
    .catch((err) => {
        console.error(err);
    });
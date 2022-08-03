const mysql = require("mysql");
const cnn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: '1234',
    database: 'sesac'
});

exports.get_user = () => {
    cnn.query('SELECT * FROM user', (err, rows) => {
        if ( err ) throw err;
        
        console.log( "UserInfo : ", rows );
        return rows;
    })
}
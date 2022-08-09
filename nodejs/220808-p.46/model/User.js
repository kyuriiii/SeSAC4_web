const mysql = require("mysql");
const cnn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: '1234', // Sesac1234*
    database: 'sesac'
});

exports.post_signup = (data, cb) => {
    let sql = `INSERT INTO user VALUES('${data.id}','${data.pw}','${data.name}');`;
    cnn.query( sql, function(err, rows){
        if ( err ) throw err;
        cb(rows);
    });
}

exports.post_signin = (id, pw, cb) => {
    let sql = `SELECT * FROM user WHERE id=${id} and pw=${pw} limit 1;`;
    cnn.query( sql, function(err, rows){
        if ( err ) throw err;
        cb(rows);
    });
}
exports.get_user = (id, cb) => {
    let sql = `SELECT * FROM user WHERE id=${id} limit 1;`;
    cnn.query( sql, function(err, rows){
        if ( err ) throw err;
        cb(rows);
    });
}

exports.update_profile = (data, cb) => {
    let sql = `UPDATE user SET name='${data.name}', pw='${data.pw}' WHERE id='${data.id}'`;
    cnn.query( sql, ( err, rows ) => {
        if ( err ) throw err;
        cb( rows );
    })

}
exports.delete_user = (id, cb) => {
    cnn.query(`DELETE FROM user WHERE id='${id}'`, (err, rows) => {
        if ( err ) throw err;
        cb(rows);
    });
}
const mysql = require("mysql");
const cnn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: '1234',
    database: 'sesac'
});

exports.insert = (data, cb) => {
    cnn.query("INSERT INTO visitor(name, comment) VALUES('" + data.name + "', '" + data.comment + "');", (err, rows) => {
        if ( err ) throw err;

        console.log( "visitors : ", rows );
        
        cb(rows.insertId);
    });
}
exports.get_one = (id, cb) => {
    cnn.query('SELECT * FROM visitor WHERE id=' + id, (err, rows) => {
        if ( err ) throw err;

        console.log( "visitors : ", rows );
        
        cb(rows[0]);
    });
}
exports.get_visitors = (cb) => {
    cnn.query('SELECT * FROM visitor', (err, rows) => {
        if ( err ) throw err;

        console.log( "visitors : ", rows );
        
        cb(rows);
    });
}

exports.update = (data, cb) => {
    cnn.query("UPDATE visitor SET name='" + data.name + "', comment='" + data.comment + "' WHERE id=" + data.id, (err, rows) => {
        if ( err ) throw err;        
        cb(true);
    });
}
exports.delete = (id, cb) => {
    cnn.query("DELETE FROM visitor WHERE id=" + id, (err, rows) => {
        if ( err ) throw err;        
        cb(true);
    });
}
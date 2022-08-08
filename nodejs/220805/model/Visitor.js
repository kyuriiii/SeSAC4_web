const mysql = require("mysql");
const cnn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: '1234', // Sesac1234*
    database: 'sesac'
});

exports.get_visitors = (cb) => {
    cnn.query( 'SELECT * FROM visitor', (err, rows) => {
        if ( err ) throw err;
        console.log( rows);
        cb(rows);
    });
}
exports.insert = ( name, comment, cb ) => {
    var sql = "INSERT INTO visitor(name, comment) VALUES('" + name + "', '" + comment + "')";
    cnn.query( sql, (err, rows) => {
        if ( err ) throw err;

        console.log( rows );
        cb( rows.insertId );
    });
}

exports.get_visitor = ( id, cb) => {
    // id 컬럼의 값이 id 인 데이터를 1개만 검색한다.
    cnn.query( `select * from visitor where id = ${id} limit 1;`, (err, rows) => {
        if ( err ) throw err;

        cb(rows);
    });
}

exports.update = (data, cb) => {
    let sql = `UPDATE visitor SET name='${data.name}', comment='${data.comment}' WHERE id=${data.id}`;
    cnn.query( sql, ( err, rows ) => {
        if ( err ) throw err;
        cb( rows );
    })
}

exports.delete = ( id, cb ) => {
    cnn.query( `DELETE FROM visitor WHERE id=${id}`, (err, rows) => {
        if ( err ) throw err;
        cb(rows);
    });
}
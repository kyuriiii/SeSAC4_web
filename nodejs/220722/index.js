const express = require("express");
const app = express();
const port = 8000;

app.set( 'view engine', 'ejs' );
app.use( '/abc/aa', express.static( 'public' ) );

app.get('/', (req, res) => {
    var list = ['apple', 'banana']; // DB에서 정보를 가져왔다.
    res.render("test", {list: list});
});

app.listen(port, ()=>{
    console.log( 'Server port : ', port );
});
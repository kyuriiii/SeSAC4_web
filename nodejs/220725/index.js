const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use( express.static( "public" ) );
app.use(express.urlencoded({extended: true}));
app.use( bodyParser.json() );

app.get("/", function(req,res){
    res.render("index");
});

app.get("/receive", function(req,res){
    console.log( req );
    console.log( req.query );
    res.render("receive", req.query);
});

app.post("/receive", function(req,res){
    console.log( req.body );
    res.render("receive", req.body);

    //res.render("receive", { a:1, b:2 });
});

app.listen(port, ()=>{
    console.log( "Server Port : ", port );
})
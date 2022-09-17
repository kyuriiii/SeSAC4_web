const express = require("express");
const app = express();
const port = 8000;
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use( express.static( "public" ) );
app.use(express.urlencoded({extended: true}));
app.use( bodyParser.json() );

app.get("/", function(req,res){
    res.render("index");
});

app.get("/receive", function(req,res){
    console.log( "receive-get" );
    console.log( req.query );
    res.send(req.query.name + " 안녕!");
});

app.post("/receive", function(req,res){
    console.log( "receive-post" );
    console.log( req.body );
    res.send(req.body.name + " 안녕!");
});
app.post("/receive_form", function(req,res){
    console.log( "receive-post" );
    console.log( req.body );
    res.send(req.body.name + " 안녕! 너는 " + req.body.gender + "구나.");
});

app.listen(port, ()=>{
    console.log( "Server Port : ", port );
})
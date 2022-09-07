var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.get("/", function(req,res){
    console.log("client");
    res.sendFile( __dirname + "/index.html" );
});

io.on("connection", function(socket){
    console.log( "connected" );
    socket.emit("hello", "server hello");
    socket.on("click", function(data){
        console.log( "client click");
        socket.emit("clickResponse", 'success');
        io.emit("clickResponse", "io success");
    });
});

http.listen( 8000, function(){
    console.log( "Server port : ", 8000 );
});
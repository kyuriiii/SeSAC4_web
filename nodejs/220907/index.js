var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.get("/", function(req,res){
    console.log("client");
    res.sendFile( __dirname + "/index.html" );
});

var msg = {hello: "안녕하세요?", study: "공부합시다~"};
io.on("connection", function(socket){
    console.log( "connected" );
    socket.on("send", function(data){
        // data로 hello가 들어왔을 때
        console.log( "client : ", data );
        socket.emit("response", data + " : " + msg[data]);
        // socket.emit( "response", "hello : 안녕하세요?");
        // if ( data == "hello" ) socket.emit("response", "hello : 안녕하세요?");
    })
    socket.on("hello", function(data){
        console.log( "client : ", data );
        socket.emit("response", "hello : 안녕하세요?");
    });
    socket.on("study", function(data){
        console.log( "client : ", data );
        socket.emit("response", "study : 공부합시다~");
    })
});

http.listen( 8000, function(){
    console.log( "Server port : ", 8000 );
});
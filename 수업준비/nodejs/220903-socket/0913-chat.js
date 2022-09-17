var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.get("/", function(req,res){
    console.log("client");
    res.sendFile( __dirname + "/0913-chat.html" );
});

// (1) 닉네임 받기
var list = {};
// (1) ----------
io.on("connection", function(socket){
    console.log( "connected : ", socket.id );

    // (1) 닉네임 받기
    socket.on("info", function(data){
        // list에 id를 key로, nickname을 value로 추가한다.
        list[socket.id] = data.nickname;
        io.emit("list", { list: list });
        io.emit("notice", list[socket.id] + "님이 입장하셨습니다.");
    });
    // (1) ----------
    socket.on("send", function(send){
        var data = { is_dm : false, msg: send.msg, nickname: list[socket.id] };
        if ( send.to != "전체" ){
            data["is_dm"] = true;
            let DM_socketID = Object.keys(list).find( key => list[key] === send.to);
            io.to(DM_socketID).emit("newMessage", data);
            data["msg"] = `(DM) ${data["msg"]}`;
            socket.emit("newMessage", data);
        } 
        else io.emit("newMessage", data);
    });

    socket.on("disconnect", function(){
        io.emit("notice", list[socket.id] + "님이 퇴장하셨습니다.");
        delete list[socket.id];
    });
});

http.listen( 8000, function(){
    console.log( "Server port : ", 8000 );
});
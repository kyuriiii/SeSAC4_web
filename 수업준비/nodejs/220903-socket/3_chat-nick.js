var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/3_chat-nick.html");
});

var nickList = {};
io.on("connection", function (socket) {
  console.log("Server Socket Connected");
  socket.on("entrance", (data) => {
    nickList[socket.id] = data.nickname;
    io.emit("entrance", `${data.nickname}님이 입장하셨습니다.`);
  });
  socket.on("sendMSG", (data) => {
    io.emit("newMSG", {
      nick: nickList[socket.id],
      msg: `${nickList[socket.id]} : ${data.msg}`,
    });
  });

  socket.on("disconnect", function () {
    console.log("Server Socket Disconnected : ", nickList[socket.id]);
    io.emit("entrance", `${nickList[socket.id]}님이 퇴장하셨습니다.`);
    delete nickList[socket.id];
  });
});

http.listen(3000, function () {
  console.log("Listening on *:3000");
});

var express = require( "express" );
var app = express();
var http = require( "http" ).Server( app );
var io = require( "socket.io" )( http );
const bodyParser = require("body-parser");

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use( bodyParser.json() );
app.get( "/", function( req, res ){
    res.render("index", {rooms});
});
app.post( "/room", function(req,res) {
    if ( rooms.indexOf(req.body.name) < 0 ) {
        rooms.push( req.body.name );
        var data = {
            return: true,
            index: rooms.indexOf(req.body.name)
        }
        res.send(data);
    } else {
        res.send({return: false});
    }
});
let rooms = [];
let people = {};
app.get("/chat", function( req, res){
    if ( people[req.query.no] == null ) people[req.query.no] = {};
    res.render("chat", { no: req.query.no });
});
io.on( "connection", function ( socket ){
    socket.on("info", function(data){
        people[data.no][socket.id] = data.nickname;
        for ( let [key,value] of Object.entries(people[data.no]) ){
            io.to(key).emit("notice", `${data.nickname} 님이 입장했습니다.`);
        }
    });
});
// io는 socker에 연결된 모든 사람
// socket은 지금 내가 통신하고 있는 한 사람. 즉, 클라이언트 한 명에 대한 정보. socket에 담겨 있는 정보는 화면마다 다르다. ( 다른 접속이라 판단하기 때문 )


http.listen( 3000, function(){
	console.log( "Listening on *:3000" );
});
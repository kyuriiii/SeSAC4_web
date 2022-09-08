var express = require( "express" );
var app = express();
var http = require( "http" ).Server( app );
var io = require( "socket.io" )( http );

app.get( "/", function( req, res ){
	res.sendFile( __dirname + "/practice2.html" );
});

// io는 socker에 연결된 모든 사람
// socket은 지금 내가 통신하고 있는 한 사람. 즉, 클라이언트 한 명에 대한 정보. socket에 담겨 있는 정보는 화면마다 다르다. ( 다른 접속이라 판단하기 때문 )
io.on( "connection", function ( socket ){
	console.log( "Server Socket Connected" );

	console.log( socket.id );
	io.emit( "entry", socket.id);

	socket.on( "sendMSG", ( data ) => {
		console.log( data["msg"] );
        io.emit( "newMSG", data );
	});

	socket.on( "disconnect", function() {
		console.log( "Server Socket Disconnected" );
	});
});

http.listen( 3000, function(){
	console.log( "Listening on *:3000" );
});
var express = require( "express" );
var app = express();
var http = require( "http" ).Server( app );
var io = require( "socket.io" )( http );

app.get( "/", function( req, res ){
	console.log( "client connected" );

	res.sendFile( __dirname + "/practice1.html" );
});

io.on( "connection", function ( socket ){
	console.log( "Server Socket Connected" );

	socket.on( "hello", ( data ) => {
		console.log( "client : ", data.msg );
		socket.emit( "hello_reply", "안녕하세요." );
	});

	socket.on( "study", ( data ) => {
		console.log( "client : ", data.msg );
		socket.emit( "study_reply", "공부합시다!" );
	});

	socket.on( "bye", ( data ) => {
		console.log( "client : ", data.msg );
		socket.emit( "bye_reply", "잘가~" );
	});

	socket.on( "disconnect", function() {
		console.log( "Server Socket Disconnected" );
	});
});

http.listen( 3000, function(){
	console.log( "Listening on *:3000" );
});
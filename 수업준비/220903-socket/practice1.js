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
	socket.on( "hello", ( arg ) => {
        console.log( "hello : ", arg );
        socket.emit("response", "hello : "+ arg );
	});
	socket.on( "study", ( arg ) => {
        console.log( "study : ", arg );
        socket.emit("response", "study : "+ arg );
	});
	socket.on( "bye", ( arg ) => {
        console.log( "bye : ", arg );
        socket.emit("response", "bye : "+ arg );
	});

	socket.on( "disconnect", function() {
		console.log( "Server Socket Disconnected" );
	});
});

http.listen( 3000, function(){
	console.log( "Listening on *:3000" );
});
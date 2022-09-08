var express = require( "express" );
var app = express();
var http = require( "http" ).Server( app );
var io = require( "socket.io" )( http );

app.get( "/", function( req, res ){
	console.log( "client connected" );

	res.sendFile( __dirname + "/index.html" );
});

io.on( "connection", function ( socket ){
	console.log( "Server Socket Connected" );

	socket.emit( "welcome", { msg: "Welcome from server" } );

	socket.on( "hello_from_client", ( arg ) => {
		console.log( arg["msg"] );
	});

	socket.on( "disconnect", function() {
		console.log( "Server Socket Disconnected" );
	});
});

http.listen( 3000, function(){
	console.log( "Listening on *:3000" );
});
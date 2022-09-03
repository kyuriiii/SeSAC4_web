var express = require( "express" );
var app = express();
var http = require( "http" ).Server( app );
var io = require( "socket.io" )( http );

app.get( "/", function( req, res ){
	res.sendFile( __dirname + "/chat.html" );
});

io.on( "connection", function ( socket ){
	console.log( "Server Socket Connected" );

	socket.emit( "welcome", { msg: "Welcome from server" } );

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
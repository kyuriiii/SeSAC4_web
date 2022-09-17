const express = require( "express" );
const app = express();
const http = require( "http" ).Server( app );

const path = require( "path" );
const multer = require( 'multer' );
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb( null, "uploads" );
	},
	filename: (req, file, cb) => {
		var ext = path.extname( file.originalname );
		var newname = path.basename( file.originalname, ext ) + "_" + Date.now() + ext;
		cb( null, newname );
	},
	limits: {fileSize: 5*1024*1024},
})
const upload = multer({ storage: storage })

app.set( "view engine", "ejs" );

app.get( "/", function( req, res ){
    res.render( "upload" );
});

app.post( "/upload", upload.single( "userfile" ), function( req, res ){
    res.send( "Uploaded : " + req.file.filename );
});

app.post( "/upload-multiple" , upload.array( "userfiles" ), (req, res) => {
		console.log( req.files, req.body );
    res.send( "Uploaded Success" );
});


http.listen( 8080, function(){
	console.log( "Listening on *:8080" );
});

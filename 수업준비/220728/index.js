const express = require("express");
const app = express();
const port = 8000;
const bodyParser = require("body-parser");
const path = require("path");
const multer = require("multer");

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, done){
            done( null, 'uploads/');
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname);
            done(null, path.basename(file.originalname, ext) + Date.now() + ext);
        },
    }),
    limits: { fileSize: 5*1024*1024 },
});

app.set("view engine", "ejs");
app.use( express.static( "public" ) );
app.use(express.urlencoded({extended: true}));
app.use( bodyParser.json() );

app.get("/", function(req,res){
    res.render("index");
});
app.post("/upload", upload.single('userfile'), function(req, res){
    console.log( req.file );
    console.log( req.body );
    res.send("Upload");
});
app.post("/upload/array", upload.array('userfile'), function(req, res){
    console.log( req.files );
    console.log( req.body );
    res.send("Upload");
});
app.post("/upload/fields", upload.fields([{name: 'image1'}, {name:'image2'}]), function(req, res){
    console.log( req.files );
    console.log( req.body );
    res.send("Upload");
});

app.listen(port, ()=>{
    console.log( "Server Port : ", port );
});


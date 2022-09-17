const express = require("express");
const app = express();
const port = 8000;
const bodyParser = require("body-parser");
const path = require("path");
const multer = require("multer");

app.set("view engine", "ejs");
app.use( express.static( "uploads" ) );
app.use(express.urlencoded({extended: true}));
app.use( bodyParser.json() );

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, done){
            done( null, 'uploads/');
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname);
            done(null, req.body.id + ext);
        },
    }),
    limits: { fileSize: 5*1024*1024 },
});

app.get("/", function(req,res){
    res.render("index");
});
app.get("/register", function(req,res) {
    res.render("register");
});
app.post("/register", upload.single('profile'), function(req,res){
    res.render("result", {img: req.file.filename});
});

app.post("/upload", upload.single('userfile'), function(req, res){
    console.log( req.file );
    console.log( req.body );
    res.send("Upload");
});
app.post("/upload/array", upload.array('userfile'), function(req, res){
    console.log( req.files );
    console.log( req.body );
    res.send("Upload Array");
});
app.post("/upload/fields", upload.fields([{name: 'image1'}, {name:'image2'}]), function(req, res){
    console.log( req.files );
    console.log( req.body );
    res.send("Upload Fields");
});

app.listen(port, ()=>{
    console.log( "Server Port : ", port );
});


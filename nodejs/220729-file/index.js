const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");

app.set("view engine", "ejs");
app.use( express.static( "public" ) );
app.use(express.urlencoded({extended: true}));
app.use( bodyParser.json() );

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {
            console.log( "destination : ", req.body );
            done( null, 'uploads/');
        },
        filename( req, file, done) {
            console.log( "filename : ", req.body );
            const ext = path.extname(file.originalname);
            done(null, path.basename(file.originalname, ext) + req.body.name + ext );
        },
    }),
    limits: { fileSize: 5*1024*1024 },
});

app.get("/", function(req,res) {
    res.render("index");
});
app.post("/upload", upload.single('userfile'), function(req,res) {
    res.send("Upload");
});
app.post("/upload/array", upload.array('userfile'), function(req,res){
    console.log(req.body);
    console.log( req.files );
    res.send("Upload Array");
});
app.post("/upload/fields", upload.fields([{name:'userfile'},{name:'userfile2'},{name:'userfile3'}]), function(req,res){
    console.log(req.body);
    console.log( req.files );
    res.send("Upload Array");
});
app.listen(port, ()=>{
    console.log( "Server Port : ", port );
})
const express = require('express');
const cookieParser = require("cookie-parser");
const session = require("express-session");
const app = express();

app.set("view engine", "ejs");
app.use(cookieParser('1234'));
app.use(session({
    secret: 'secret key',
    // resave: false,
    // saveUninitialized: true
}))

app.get("/login", (req,res) => {
    res.render("login");
});
app.post("/login", (req,res) => {
    var flag = true;
    if ( flag ) {
        req.session.id = req.body.id;
        res.redirect("/profile");
    } else res.redirect("/login");
});
app.get("/profile", (req,res) => {
    if ( req.session.id == undefined || req.session.id == "" ){
        res.redirect("/login");
        return false;
    }

    req.session.id 로 작업~~
    res.render("profile");
})

const cookieConfig = {
    maxAge: 30000,
    path: '/get', // /get /get/a/  /get/a/b
    signed: true,
};

app.get("/index", (req,res) => {
    req.session.key = "value";
    req.session.name = "1";
    req.session.num  = "2";
    res.cookie('key', 'value', cookieConfig);
    res.cookie('key2', 'value2', cookieConfig);
    res.render("index");
});

app.get("/get", (req,res) => {
    console.log( req.session );
    // console.log( req );
    console.log( req.cookies );
    res.send( req.cookies );
});
app.get("/cookie", (req,res) => {
    res.render("cookie");
})
app.get("/destroy", (req,res) => {
    // res.render("cookie");
    // req.session.destroy(function(err){
    //     res.send("삭제");
    // })
    req.session.name = "";
    res.send("123");
})

app.listen(8000, ()=>{
    console.log( "Server : ", 8000 );
})
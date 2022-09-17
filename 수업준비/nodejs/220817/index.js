const express = require('express');
const session = require("express-session");
const app = express();

const info = {id: "a", pw: "1"};
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use( bodyParser.json() );

app.set("view engine", "ejs");
app.use(session({
    secret: 'secret key',
    // resave: false,
    // saveUninitialized: true
}))

app.get("/", (req,res) => {
    const user = req.session.user;

    if ( user != undefined ) {
        res.render("index", {isLogin: true, user: user});
    } else {
        res.render("index", {isLogin: false});
    }
});
app.get("/login", (req,res) => {
    res.render("login");
})
app.post("/login", (req,res) => {
    if ( req.body.id == info.id && req.body.pw == info.pw ) {
        req.session.user = req.body.id;
        res.redirect("/");
    } else {
        res.send(
            `<script>
                alert('로그인에 실패하셨습니다.');
                location.href='/';
            </script>`
        );
    }
});
app.get("/logout", (req,res) => {
    const user = req.session.user;

    if ( user != undefined ) {
        req.session.destroy(function(err){
            res.send(
                `<script>
                    alert('로그아웃 성공');
                    location.href='/';
                </script>`
            );
        });
    } else {
        res.send(
            `<script>
                alert('잘못된 접근입니다.');
                location.href='/';
            </script>`
        );
    }
})

app.listen(8000, ()=>{
    console.log( "Server : ", 8000 );
})
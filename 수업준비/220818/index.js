const express = require('express');
const session = require("express-session");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const app = express();
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use( bodyParser.json() );

app.set("view engine", "ejs");
app.use(cookieParser('cookieSecret'));
app.use(session({
    secret: 'secret key'
}));

/* passport middleware */
app.use(passport.initialize());
app.use(passport.session());

const authRouter = require('./routes');
app.use('/',authRouter);

app.listen(8000, ()=>{
    console.log( "Server : ", 8000 );
})
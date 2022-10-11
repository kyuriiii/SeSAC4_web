const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');

const app = express();
app.set('port', 3001);
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('COOKIE_SECRET'));
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: 'COOKIE_SECRET',
  cookie: {
    httpOnly: true,
    secure: false,
  },
}));

app.use(passport.initialize());
app.use(passport.session());

const auth = require('./routes/auth');
app.use('/auth', auth);

app.use((req, res, next) => {
  res.send(`${req.method} ${req.url} 라우터가 없습니다.`);
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기중');
});
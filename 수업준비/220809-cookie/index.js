const express = require('express');
const cookieParser = require('cookie-parser');
 
const app = express();
app.set("view engine", "ejs");
app.use(cookieParser('12345678'));

// 쿠키 옵션 설정
const cookieConfig = {
  maxAge: 30000
};

// 쿠키 설정
app.get('/set', (req, res) => {
  res.cookie('key', 'key value', cookieConfig);
  res.send('set cookie');
});

// 쿠키 확인
app.get('/get', (req, res) => {
  // res.send(req.cookies);
  console.log( req.cookies );
  res.render("index");
});

app.listen(9999, ()=>{
    console.log( "Server Port : ", 9999 );
});
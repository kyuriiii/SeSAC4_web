const express = require('express');
const cookieParser = require('cookie-parser');
 
const app = express();
app.use(cookieParser('12345678'));

// 쿠키 옵션 설정
const cookieConfig = {
  maxAge: 1000000
};

// 쿠키 설정
app.get('/set', (req, res) => {
  res.cookie('key', 'key value', cookieConfig);
  res.send('set cookie');
});

// 쿠키 확인
app.get('/get', (req, res) => {
  res.send(req.cookies);
});

app.listen(8000, ()=>{
    console.log( "Server Port : ", 8000 );
});
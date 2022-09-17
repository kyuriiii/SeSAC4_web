const express = require('express');
const session = require('express-session');
 
const app = express();
app.use(session({
  secret: 'secret key',   // 반드시 필요한 옵션으로 세션 암호화하는 것
  resave: false,          // 세션이 변경되지 않아도 계속 저장. 덮어쓰기 가능하게 하기
  saveUninitialized: true   // 세션을 초기값이 지정되지 않은 상태에서도 미리 만들어 저장
}));

app.get("/", (req,res) => {
  req.session.name = "홍길동";
  res.send("세션 설정 완료!");
});

app.get("/name", (req,res) => {
  res.send( req.session.name );
});

app.get("/destroy", (req,res) => {
  req.session.destroy(function(err){
    res.send("세션 삭제 완료");
  });
});

app.listen(8000, ()=>{
  console.log( "Server Port : ", 8000 );
});
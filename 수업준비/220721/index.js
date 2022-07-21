const express = require("express"); // express 모듈 요청
const app = express();              // app을 express 프레임워크로 킨다
const port = 8080;

app.set("view engine", "ejs");      // app에 view engine을 설치, ejs를 템플릿으로
app.use(express.static(__dirname + 'views')); // views 폴더 경로는 프로젝트 폴더.(__dirname이 폴더 위치)

app.use( express.static( 'public' ) );

app.get("/", function(req, res){
    
    console.log("안녕 테스트 페이지!");
    
    res.render("test");
    
})

app.listen(port, () => {
    console.log( 'Server port : ', port );
});

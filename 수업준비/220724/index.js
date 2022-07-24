const express = require("express"); // express 모듈 요청
const app = express();              // app을 express 프레임워크로 킨다
const port = 8080;

app.set("view engine", "ejs");      // app에 view engine을 설치, ejs를 템플릿으로
app.use( express.static( 'public' ) );

app.get("/", function(req, res){    
   
    res.render("index");
});

app.post("/post", function(req, res){   
    console.log( req.query );
});

app.get("/get", function(req, res){   
    console.log( req.query );
});


app.listen(port, () => {
    console.log( 'Server port : ', port );
});

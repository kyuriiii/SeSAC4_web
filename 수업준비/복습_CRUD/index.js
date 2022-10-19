const express = require("express");
const app = express();
const port = 8000;
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use( bodyParser.json() );

/**
 * 데이터베이스 연결을 위한 model 불러오기
 * 현재 const models 는 아래와 같은 형태로 되어 있다. ( ./model/index.js 에서 내보낸 형태가 아래와 같기 때문 )
 * {
 *      Sequelize: ~~~,
 *      sequelize: ~~~,
 *      User: ~~~
 * }
 */
const models = require("./model");

// async / await 이용하기
app.get("/", async (req,res) => {
    console.log( "path : /, method : get" );
    // user 테이블에 존재하는 사용자들 가져와 index.ejs 로 전달하기
    let users = await models.User.findAll();
    await res.render("index", { result: users });
});
app.get("/react", async (req,res) => {
    console.log( "path : /react, method : get" );
    // user 테이블에 존재하는 사용자들 가져와 index.ejs 로 전달하기
    let users = await models.User.findAll();
    await res.send({ result: users });
});
// async / await 가 아니라 promise - then/catch 이용하기
app.post("/", (req,res) => {
    console.log( "path : /, method : post" );
    console.log( "req.body : ", req.body );
    
    let newUser = {
        name: req.body.name,
        pw: req.body.pw
    };

    models.User.create(newUser)
        .then((user) => {
            // user에는 새롭게 만들어진 사용자에 대한 모든 정보(컬럼) 들이 들어있다.
            res.send({return: true, user: user}); 
        }).catch((err) => {
            res.send({return: false, msg: err});
        });
});

app.patch("/", (req,res) => {
    console.log( "path : /, method : patch" );
    console.log( "req.body : ", req.body );

    let updateUser = {
        name: req.body.name,
        pw: req.body.pw
    };
    
    models.User.update( updateUser, { where: { id: req.body.id } } )
    .then(function(result){
        if ( result ) res.send({return: true, user: result}); 
        else res.send({return: false, msg: "id가 존재하지 않습니다."});
    }).catch((err) => {
        res.send({return: false, msg: err});
    });
});
app.delete("/", (req,res) => {
    console.log( "path : /, method : delete" );
    console.log( "req.body : ", req.body );

    models.User.destroy({ where: { id: req.body.id } })
    .then(function(result){
        // 삭제 성공 시 result 가 1, 삭제 실패 시 ( 삭제할 게 없을 때 ) result 가 0
        if ( result ) res.send({return: true}); 
        else res.send({return: false, msg: "id가 존재하지 않습니다."});
    }).catch((err) => {
        res.send({return: false, msg: err});
    });
});
app.post("/form", (req,res) => {
    console.log( "path : /form, method : post" );
    console.log( "req.body : ", req.body );
    
    let newUser = {
        name: req.body.name,
        pw: req.body.pw
    };

    models.User.create(newUser)
        .then((user) => {
            // user에는 새롭게 만들어진 사용자에 대한 모든 정보(컬럼) 들이 들어있다.
            res.send({return: true, user: user}); 
        }).catch((err) => {
            res.send({return: false, msg: err});
        });
});

app.listen(port, ()=>{
    console.log( "Server Port : ", port );
});

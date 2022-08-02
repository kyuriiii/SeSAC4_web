exports.get_register = (req,res) => {
    res.render("register");
}

exports.post_register = (req,res) => {
    console.log( req.body );
    
    var result = {
        id : req.body.id,
        pw: req.body.pw,
        name: req.body.name,
        age: req.body.age,
        msg: req.body.name + "님 회원가입을 환영합니다."
    };

    res.render("result", result );
}

const user = require("../model/User");
exports.get_login = (req, res) => {
    res.render("login");
}

exports.post_login =  async (req,res) => {
    const info = await user.get_user();
    console.log( info );
    if ( info[0] != req.body.id ) {
        res.send({return: false, msg: "아이디가 다릅니다."});
    } else if ( info[1] != req.body.pw ) {
        res.send({ return: false, msg: "비밀번호가 다릅니다."});
    } else {
        res.send( { return: true, msg: "로그인 성공"} );
    }
}
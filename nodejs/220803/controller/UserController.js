const User = require("../model/User");

exports.index = (req,res) => {
    res.render("index");
}
exports.register = (req,res) => {
    res.render("register");  
}

exports.post_register = (req,res) => {
    User.post_user(req.body);
    res.send( req.body );
}
exports.login = (req,res) => {
    res.render("login");
}
exports.post_login = async (req,res) => {
    var data = await User.get_user();

    var info = data.split("//");
    // { "asdf", "asdf", "dfdf", "{age}"}

    if ( info[0] != req.body.id ){
        res.send( "아이디 다름" );
    } else if ( info[1] != req.body.pw ) {
        res.send( "비밀번호가 다름" );
    } else {
        res.send("로그인 성공!");
    }
    console.log( data );
}
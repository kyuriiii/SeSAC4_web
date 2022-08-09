const User = require("../model/User");

exports.index = (req,res) => {
    res.render("index");
}

exports.signup = (req,res) => {
    res.render("signup");
}
exports.post_signup = (req,res) => {
    User.post_signup(req.body, function(result){
        res.send(true);
    });
}

exports.signin = (req,res) => {
    res.render("signin");
}
exports.post_signin = (req,res) => {
    User.post_signin(req.body.id, req.body.pw, function(result){
        if ( result.length > 0 ) res.send(true);
        else res.send(false);
    });
}

exports.profile = (req,res) => {
    User.get_user(req.body.id, function(result){
        if ( result.length > 0 ) res.render("profile", {data: result[0]});
        else res.redirect("/user/signin");
    })
}

exports.profile_edit = (req,res) => {
    User.update_profile(req.body, function(result){
        res.send("회원정보 수정 성공!");
    })
}
exports.profile_delete = (req,res) => {
    User.delete_user(req.body.id, function(result){
        res.redirect("/user/signin");
    })
}
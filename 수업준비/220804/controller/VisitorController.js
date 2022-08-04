const Visitor = require("../model/Visitor");

exports.get_visitors = async (req,res) => {
    Visitor.get_visitors(function(result){
        console.log( result );
        res.render("index", { visitors:result } );
    });
}
exports.get_visitor = (req,res) => {
    Visitor.get_one(req.query.id, function(result){
        res.send(result);
    });
}

exports.post_comment = (req,res) => {
    console.log( req.body );
    Visitor.insert(req.body, function(result){
        console.log( "result : ", result );
        res.send({id : result });
    });

}
exports.edit_comment = (req,res) => {
    Visitor.update(req.body, function(result){
        res.send("수정 성공");
    });
}
exports.delete_comment = (req,res) => {
    Visitor.delete(req.body.id, function(result){
        res.send("삭제 성공");
    });
}

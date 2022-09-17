const models = require("../model");
// const { Visitor } = require("../model");

exports.get_visitors = (req,res) => {
    // Visitor.get_visitors(function( result ){
    //     console.log( "result : ", result );
    //     console.log( "index" );
    //     res.render("index", { data: result });
    // });
    models.Visitor.findAll()
        .then((result) => {
            console.log( "result : ", result );
            res.render("index", {data : result});
        })
}

exports.post_comment = (req,res) => {
    console.log( req.body );

    // Visitor.insert( req.body.name, req.body.comment, function( result ){
    //     res.send({ id: result });
    // } );
    let object = {
        name: req.body.name,
        comment: req.body.comment
    };
    models.Visitor.create(object)
        .then((result) =>{
            console.log( result );
            res.send( {id: result.id});
        });
}

exports.get_visitor = (req,res) => {
    // Visitor.get_visitor( req.query.id, function(result) {
    //     console.log( "result : ", result );
    //     res.send( { result : result[0] } );
    // })
    models.Visitor.findOne({
        where: { id: req.query.id }
    }).then((result) => {
        res.send( { result : result } );
    })
}

exports.patch_comment = (req,res) => {
    // Visitor.update( req.body, function(result){
    //     console.log( result );
    //     res.send( "수정 성공" );
    // });
    let newObject = {
        name : req.body.name,
        comment : req.body.comment
    };
    models.Visitor.update(newObject, {
        where: { id: req.body.id }
    }).then((result) => {
        console.log(result);
        res.send("수정 성공");
    });
}

exports.delete_comment = (req,res) => {
    // Visitor.delete( req.body.id, function(result){
    //     console.log( result );
    //     res.send( "삭제 성공" );
    // });
    models.Visitor.destroy({
        where: {id: req.body.id}
    }).then((result)=> {
        console.log( result );
        res.send( "삭제 성공" );
    })
}
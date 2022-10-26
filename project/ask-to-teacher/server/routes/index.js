var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    console.log('hi');
    res.send({greeting:'Hello React x Node.js'});
});
module.exports = router;
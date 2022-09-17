const express = require("express");
const user = require("../controller/UserController");
const router = express.Router();

router.get("/", function(req,res){
    res.send("Index 페이지입니다.");
});

router.get("/register", user.get_register);
router.post("/register", user.post_register);

router.get("/login", user.get_login);
router.post("/login", user.post_login);

router.get("/user", user.get_user);
module.exports = router;
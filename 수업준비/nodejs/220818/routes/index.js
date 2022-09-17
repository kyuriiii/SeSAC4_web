const express = require("express");
const passport = require('../passport/local.js');
const router = express.Router();

router.get("/", (req,res) => {
    if ( req.user ) {
        res.send(`${req.user.email}님 반갑습니다.`);
    } else {
        res.redirect("/login");
    }
});
router.get("/login", (req,res) => {
    res.render("login");
});
router.post("/login", passport.authenticate('local', {failureRedirect: '/login',}), (req,res) => {
    res.redirect("/");
});

module.exports = router;
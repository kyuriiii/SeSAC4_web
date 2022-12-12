const router = require("express").Router();
const createError = require('http-errors');
const passport = require("passport");

// TODO
router.use("/auth", require("./authRouter"));
router.use("/user", require("./userRouter"));
router.use("/planet", require("./planetRouter"));


//& JWT verify
router.all("*", (req, res, next) => {
  console.log("passport-jwt");
  passport.authenticate("jwt", { session: false }, (err, user, info) => {

    if (err | !user) res.status(400).json({ errors: info.message });
    next();
  })(req, res, next); // 미들웨어 내의 미들웨어
});

router.use("/diary", require("./diaryRouter"));
// router.use('/album', require('./albumRouter'));
// router.use('/payment', require('./paymentRouter'));
// router.use('/alarm', require('./alarmRouter'));

// 예외 처리
router.all("*", (req, res, next) => {
  next(createError(404, e.message));
});


module.exports = router;

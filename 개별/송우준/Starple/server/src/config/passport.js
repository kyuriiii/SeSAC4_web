const passport = require("passport");
const googleStrategy = require("./passport/googleStrategy");
const naverStrategy = require("./passport/naverStrategy");
const kakaoStrategy = require("./passport/kakaoStrategy");
const localStrategy = require("./passport/localStrategy");
const jwtStrategy = require("./passport/jwtStrategy");
const User = require("../models/User");

/*  if controller session false, console x */
// 로그인 성공시 실행
passport.serializeUser((user, done) => {
  console.log("a: ", user.userID);
  done(null, user._id);
});

// 로그인 성공 후 클라이언트 요청마다 호출
passport.deserializeUser(async (_id, done) => {
  //사용자식별자로 유저정보를 복원해 req.user에 저장, 회원정보가 필요할 때 api에서 사용
  console.log("b: ", _id);
  const user = await User.findById({ _id });
  try {
    done(null, user);
  } catch (err) {
    done(err);
  }
});

passport.use("google", googleStrategy);
passport.use("naver", naverStrategy);
passport.use("kakao", kakaoStrategy);
passport.use("local", localStrategy);
passport.use("jwt", jwtStrategy);

module.exports = passport;

const router = require("express").Router();
const passport = require("../../config/passport");
const jwt = require("jsonwebtoken");
const secret = require("../../config/default").secretOrKey;
const User = require("../../models/User");
const bcrypt = require("bcrypt");

router.all("/*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

//! 회원가입
router.post("/signup", async (req, res) => {
  try {
    const { userID, hashedPW, username, email } = req.body;
    // DB에서 사용자 검색
    const exUser = await User.findByUserID(userID);
    // 사용자 있으면 에러메세지
    if (exUser != null) {
      console.log("*****User exists*****");
      return res.status(400).json({ errors: "User already exists" });
    } else {
      // 사용자 없으면 가입 진행
      const newUser = await new User({ userID, hashedPW, username, email });
      newUser.save((err, userInfo) => {
        if (err) return res.status(400).json(err);
        // 가입성공
        console.log("*****회원가입!*****", userInfo);
        res.status(201).json({ success: true, userInfo: userInfo });
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ errors: "server Error" });
  }
});

//? 로컬 로그인
router.post("/login", async (req, res, next) => {
  // 지정전략(strategy)를 사용해 로그인에 성공/실패할경우 이동할 경로와 메시지 설정
  passport.authenticate("local", (authErr, user, info) => {
    console.log("passport-local");
    // 인증이 실패했거나 유저 데이터가 없으면 에러 발생
    if (authErr | !user) return next(authErr);
    // 유저 데이터로 로그인 진행
    return req.login(user, { session: false }, (loginError) => {
      if (loginError) return next(loginError);
      // 로그인 성공시 JWT토큰 생성 후 클라이언트에게 반환
      // const token = setUserToken(req.user);
      return res.status(201).json({
        result: "ok",
        userInfo: req.user,
        token: `${setUserToken(user)}`,
      });
    });
  })(req, res, next); // 미들웨어 내의 미들웨어
});

// 구글 간편 로그인
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/auth",
  }),
  (req, res) => {
    // res.redirect('/auth/token');
    // res.status(200).json(`${setUserToken(user)}`);
    const token = setUserToken(req.user);
    res.status(200).json({ result: "ok", token: token });
  }
);

// 네이버 간편 로그인
router.get("/naver", passport.authenticate("naver"));
router.get(
  "/naver/callback",
  passport.authenticate("naver", {
    successRedirect: "/auth/token",
    failureRedirect: process.env.FRONT_URL + "/login",
    failureFlash: true,
  }),
  (req, res) => {
    const token = setUserToken(req.user);
    res.status(200).json({ result: "ok", token: token });
  }
);

// 카카오 간편 로그인
router.get("/kakao", passport.authenticate("kakao", { scope: ["", ""] }));
router.get(
  "/kakao/callback",
  passport.authenticate("kakao", {
    failureRedirect: "/auth",
  }),
  (req, res) => {
    const token = setUserToken(req.user);
    res.status(200).json({ result: "ok", token: token });
  }
);

router.get("/token", (req, res) => {
  res.redirect(process.env.FRONT_URL + "?token=" + setUserToken(req.user));
});

// 아이디 찾기
router.post("/findID", async (req, res) => {
  console.log("findID!");
  const { username, email } = req.body;

  try {
    // DB에서 사용자 검색
    User.findOne({ $and: [{ username }, { email }] }).exec((err, r) => {
      // 사용자 있으면 아이디 반환
      if (err) return res.status(400).json(err);
      console.log("findUser: ", r);
      return res.status(200).json({ success: true, userID: r.userID });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ errors: "server Error" });
  }
});
// 비밀번호 재설정
router.post("/resetPW1", async (req, res) => {
  console.log("resetPW!");
  const { userID, username, email } = req.body;

  try {
    // DB에서 사용자 검색
    User.findOne({ $and: [{ userID }, { username }, { email }] }).exec(
      (err, r) => {
        // 사용자 있으면 _id 반환
        if (err) return res.status(400).json(err);
        console.log("findUser: ", r);
        return res.status(200).json({ success: true, uid: r.id });
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).json({ errors: "server Error" });
  }
});
router.post("/resetPW2", async (req, res) => {
  console.log("updatePW!");
  const { uid, hashedPW } = req.body;

  try {
    // 비밀번호의 Plain Text를 hash로 교체
    console.log("before PW:", hashedPW);
    const newhashedPW = await bcrypt.hash(hashedPW, 10);
    console.log(" after PW: ", newhashedPW);

    // DB에서 사용자 비밀번호 업데이트
    await User.updateOne({ _id: uid }, { $set: { hashedPW: newhashedPW } });
    console.log("PW updated!");
    return res.status(200).json({ success: true, msg: "PW updated!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ errors: "server Error" });
  }
});

//& jwt토큰 발급
function setUserToken(user) {
  user.type = "JWT";
  const token = jwt.sign(user.toJSON(), secret, {
    expiresIn: "3h", // 만료시간 3시간
    issuer: "starplanet",
  });
  console.log("token : ", token);
  return token;
}

//& JWT verify
const verify = function (req, res, next) {
  passport.authenticate("jwt", { session: false }, (err, user, info) => {
    console.log("passport-jwt");
    if (err | !user) res.status(400).json({ errors: info.message });

    next();
  })(req, res, next); // 미들웨어 내의 미들웨어
};

// 로그아웃
router.get("/logout", verify, (req, res) => {
  req.logout();
  req.session.destroy();
  res.cookie("token", null, {
    maxAge: 0,
  });
  res.status(200).json({ message: "logout" });
});

module.exports = router;

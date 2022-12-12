const { ExtractJwt, Strategy: JWTStrategy } = require("passport-jwt");
const secret = require("../default").secretOrKey;
const User = require("../../models/User");

// const token = req.header("x-auth-token");
const JWTConfig = {
  // Authorization header의 JWT 기반 Bearer스키마에 담겨온 토큰 해석
  jwtFromRequest: ExtractJwt.fromHeader("authorization"),
  secretOrKey: secret, // 복호화 방식
};

const JWTVerify = async (jwtPayload, done) => {
  console.log("___jwtPayload", jwtPayload);

  try {
    // palyload의 유저id값으로 유저 데이터 검색
    const exUser = await User.findByUserID(jwtPayload.userID);
    if (exUser) {
      // 유저 데이터 있을 경우 유저 데이터 객체 전송
      done(null, exUser);
    } else {
      // 유저 데이터 없을 경우 에러 표시
      done(null, false, { message: "token expired or unauthorized" });
    }
  } catch (error) {
    console.error(error);
    done(error);
  }
};

module.exports = new JWTStrategy(JWTConfig, JWTVerify);

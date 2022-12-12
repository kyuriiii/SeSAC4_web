const LocalStrategy = require("passport-local").Strategy;
const User = require("../../models/User");
const bcrypt = require("bcrypt");

const passportConfig = {
  usernameField: "userID",
  passwordField: "hashedPW",
};

// UserID, password가 서버에 저장된 정보와 일치하는지 확인 후 로그인 승인
const passportVerify = async (username, password, done) => {
  console.info("___new localStrategy()");

  try {
    // 유저 아이디로 일치하는 유저 데이터 검색
    const exUser = await User.findByUserID(username);
    if (exUser) {
      // 검색된 유저 데이터가 있다면 암호화된 비밀번호 비교
      const match = await bcrypt.compare(password, exUser.hashedPW);
      if (match)
        done(null, exUser, {
          message: "로그인 성공",
        }); // 해쉬된 비밀번호가 같다면 유저 데이터 객체 전송
      else done(null, false, { message: "비밀번호가 일치하지 않습니다." }); // 비밀번호가 다를경우 에러 표시
    } else {
      // 검색된 유저 데이터가 없다면 에러 표시
      done(null, false, { message: "존재하지 않는 사용자입니다." });
    }
  } catch (error) {
    console.error(error);
    done(error);
  }
};

module.exports = new LocalStrategy(passportConfig, passportVerify);

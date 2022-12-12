const KakaoStrategy = require("passport-kakao").Strategy;

const { User } = require("../../models/User");
const kakaoOAuth = require("../default").kakaoOAuth;

module.exports = new KakaoStrategy(
  {
    clientID: kakaoOAuth.clientID,
    callbackURL: process.env.KAKAO_CALLBACK,
  },
  async (accessToken, refreshToken, profile, done) => {
    console.log("___kakao profile", profile);

    try {
      // DB에서 사용자 검색
      const exUser = await User.findByUserID(profile.id);
      if (exUser) {
        console.log("___kakao exUser", exUser);
        done(null, exUser);
      } else {
        // DB에 사용자가 저장되어 있지 않으면 DB에 새로 저장
        const newUser = await new User({
          userID: profile.id,
          username: profile.displayName,
          email: profile._json && profile._json.kakao_account.email,
          provider: "kakao",
        });
        newUser.save((err, userInfo) => {
          if (err) console.log(err);
          console.log("___kakao newUser", userInfo);
          return done(null, newUser);
        });
      }
    } catch (error) {
      console.error(error);
      done(error);
    }
  }
);

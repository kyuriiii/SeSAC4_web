const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;

const { User } = require("../../models/User");
const googleOAuth = require("../default").googleOAuth;

module.exports = new GoogleStrategy(
  {
    clientID: googleOAuth.clientID,
    clientSecret: googleOAuth.clientSecret,
    callbackURL: process.env.GOOGLE_CALLBACK,
  },
  async (accessToken, refreshToken, profile, done) => {
    console.log("___google profile", profile);

    try {
      // DB에서 사용자 검색
      const exUser = await User.findByUserID(profile.id);
      if (exUser) {
        console.log("___google exUser", exUser);
        done(null, exUser);
      } else {
        // DB에 사용자가 저장되어 있지 않으면 DB에 새로 저장
        const newUser = await new User({
          userID: profile.id,
          username: profile.displayName,
          email: profile._json && profile._json.google_account_email,
          provider: "google",
        });
        newUser.save((err, userInfo) => {
          if (err) console.log(err);
          console.log("___google newUser", userInfo);
          return done(null, newUser);
        });
      }
    } catch (error) {
      console.error(error);
      done(error);
    }
  }
);

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

let fakeUser = {
    email: 'test@gmail.com',
    name: 'test'
}

module.exports = new GoogleStrategy(
  {
    clientID: "구글ID",
    clientSecret: "구글 비밀 키",
    callbackURL: '/auth/google/callback',
  },
  async (accessToken, refreshToken, profile, done) => {
    console.info('___new GoogleStrategy()');
    console.log('___google profile', profile);
    try {
        // sequelize에서 검색
      if (fakeUser.email == (profile._json && profile._json.email)) {
        console.log('___google fakeUser1', fakeUser);
        done(null, fakeUser);
      } else {
        // DB에 사용자가 저장되어 있지 않으면 DB에 새로 저장
        fakeUser = {
            email: profile._json && profile._json.email,
            name: profile.displayName
        }
        console.log('___google fakeUser2', fakeUser);
        done(null, fakeUser);
      }
    } catch (error) {
      console.error(error);
      done(error);
    }
  }
);
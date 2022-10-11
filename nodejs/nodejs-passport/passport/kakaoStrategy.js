const KakaoStrategy = require('passport-kakao').Strategy;

let fakeUser = {
    email: 'test@gmail.com',
    name: 'test'
}

module.exports = new KakaoStrategy(
  {
    clientID: '카카오ID',
    callbackURL: '/auth/kakao/callback',
  },
  async (accessToken, refreshToken, profile, done) => {
    console.info('___new KakaoStrategy()');
    try {
      if (fakeUser.email == (profile._json && profile._json.email)) {
        console.log('___kakao fakeUser1', fakeUser);
        done(null, fakeUser);
      } else {
        // DB에 사용자가 저장되어 있지 않으면 DB에 새로 저장
        fakeUser = {
            email: profile._json && profile._json.email,
            name: profile.displayName
        }
        console.log('___kakao fakeUser2', fakeUser);
        done(null, fakeUser);
      }
    } catch (error) {
      console.error(error);
      done(error);
    }
  }
);
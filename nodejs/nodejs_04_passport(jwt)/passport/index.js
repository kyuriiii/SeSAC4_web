const passport = require('passport');
const google = require('./googleStrategy');
const kakao = require('./kakaoStrategy');
const local = require('./localStrategy');
const jwt = require('./jwtStrategy');


let fakeUser = {
  name: 'test',
  password: '1234',
  email: 'test@test.test'
}

//아래 사용하는 코드는 session을 사용할 때 이용한다.
passport.serializeUser((user, done) => {
  done(null, user.name);
});

passport.deserializeUser((username, done) => {
  // DB를 사용할 경우에는 여기서 serializeUser에서 받아온 username을 기반으로 db에서 검색하기
  done(null, fakeUser);
});


passport.use(local);
passport.use(google);
passport.use(kakao);
passport.use(jwt);

module.exports = passport;

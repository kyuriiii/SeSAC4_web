const passport = require('passport');
const local = require('./localStrategy');

let fakeUser = {
  username: 'test',
  password: '1234',
  email: 'test@test.test'
}

module.exports = () => {
  passport.serializeUser((user, done) => {
    console.log( 'user : ', user );
    done(null, user.username);
  });

  passport.deserializeUser((username, done) => {
    // DB를 사용할 경우에는 여기서 serializeUser에서 받아온 username을 기반으로 db에서 검색하기
    done(null, fakeUser);
  });

  local();
};

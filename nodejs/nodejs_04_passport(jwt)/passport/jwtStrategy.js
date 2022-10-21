const passport = require('passport');
const { ExtractJwt, Strategy: JWTStrategy } = require('passport-jwt');

let fakeUser = {
  name: 'test',
  password: '1234',
  email: 'test@test.test'
}

const secret = 'JWT-SECRET-KEY';
module.exports = new JWTStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken('authorization'),
    secretOrKey: secret,
  }, async (payload, done) => {
    console.log( "payload" );
    try {
      console.log( "payload : ", payload );
      // palyload의 id값으로 유저의 데이터 조회 ( id까지 저장한다면 )
      // sequelize를 이용할 경우
      // const user = await User.findOne({ where: { id: jwtPayload.id }})
      // if ( user ) { done(null, user); return; }
      // else done(null, false, {reason: '올바르지 않은 인증정보입니다.'});  // 유저 데이터가 없을 경우 에러 표시
      done(null, fakeUser);
    } catch (error) {
      console.error(error);
      done(error);
    }
  });

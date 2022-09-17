const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;

let user = {
    email: 'test@email.com',
    password: '1234',
    name: '1'
};

// 로그인 성공 시 호출, 사용자 식별자를 req.session에 저장
passport.serializeUser((user, done) => {
    console.log( 'serializeUser - user : ', user );
    done(null, user);
});

// 로그인 후 서버 요청시마다 req.session에 저장된 사용자 식별자를 이용해 사용자 정보를 읽어 req.user에 저장
passport.deserializeUser((user, done) => {
    console.log( 'deserializeUser - user : ', user );
    done( null, user );
});

passport.use(
    new LocalStrategy(
        {
            // option
            usernameField: 'id',
            passwordField: 'pw',
            session: true,
            passReqToCallback: false,
        },
        (id, pw, done) => {
            if ( id === user.name ) {
                // username 통과
                if ( pw === user.password ) {
                    // password 통과
                    console.log( 'LocalStrategy - username & password ok' );
                    return done(null, user);
                } else {
                    return done( null, false, { message: 'password incorrect' } );
                }
            } else {
                return done( null, false, { message: 'username incorrect' } );
            }
        }
    )
);

module.exports = passport;
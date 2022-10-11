const express = require('express');
const passport = require('../passport/index.js');

const router = express.Router();

router.get('/', (req,res) => {
  if ( req.query.loginError != null ) console.log("***** Error : ", req.query.loginError, "*****" );
  console.log('path : /auth');
  console.log( 'req.user : ', req.user );
  console.log( 'req.session : ', req.session );
  if ( req.user ) {
      res.send(`${req.user.name}(${req.user.email})님 환영합니다.`);
  } else {
      res.redirect('/auth/login');
  }
});
router.get('/login', (req,res) => {
  res.render('login');
})
router.post('/login', (req, res, next) => {
  passport.authenticate('local', (authError, user, info) => {
    if (authError) return next(authError);
    if (!user) return res.redirect(`/?loginError=${info.message}`);
    return req.login(user, (loginError) => {
      if (loginError) return next(loginError);
      else return res.redirect('/auth');
    });
  })(req, res, next); // 미들웨어 내의 미들웨어에는 (req, res, next)를 붙입니다.
});

router.get('/google', passport.authenticate('google', {scope: ['profile','email']}));
router.get(
  '/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/auth',
  }),
  (req,res) => {
    res.redirect('/auth');
  }
);

router.get('/kakao', passport.authenticate('kakao'));
router.get(
  '/kakao/callback',
  passport.authenticate('kakao', {
    failureRedirect: '/auth',
  }),
  (req,res) => {
    res.redirect('/auth');
  }
);

router.get('/logout', (req, res) => {
  req.logout();
  req.session.destroy();
  res.redirect('/');
});
module.exports = router;

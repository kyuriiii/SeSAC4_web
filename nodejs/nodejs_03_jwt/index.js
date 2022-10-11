const express = require('express');
const jwt = require('jsonwebtoken');
const secret = 'JWT-SECRET-KEY';
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req,res) => {
    res.sendFile( __dirname + "/index.html" );
});

app.post('/make', (req,res) => {
    console.log('req.post : ', req.body);

    const token = jwt.sign({
        type: 'JWT',
        name: req.body.name,
        email: req.body.email
    }, secret, {
        expiresIn: '15m', // 만료시간 15분
        issuer: '토큰발급자',
    });
    
    res.status(200).json({
        code: 200,
        message: '토큰 발급 성공',
        token: token
    });
});

app.get('/verify', verifyToken, (req,res) => {
    res.status(200).json({
        code: 200,
        message: `토큰 인증 성공! 이름은 ${req.decoded.name}, 이메일은 ${req.decoded.email} `
    });
});

function verifyToken(req,res,next) {
    // 요청 헤더에 저장된 토큰(req.headers.authorization)과 비밀키를 사용해 토큰을 req.decoded 에 저장
    try {
        req.decoded = jwt.verify(req.headers.authorization, secret);
        return next();
    }
    // 인증 실패
    catch (err ){
        // 유효 시간이 초과된 경우
        if ( err.name == 'TokenExpiredError' ) {
            return res.status(419).json({
                code: 419,
                message: '토큰이 만료되었습니다.'
            });
        }
        // 토큰의 비밀키가 일치하지 않는 경우
        if ( err.name == 'JsonWebTokenError') {
            return res.status(401).json({
                code: 401,
                message: '유효하지 않은 토큰입니다.'
            });
        }

        // 위의 두 error가 아닌데 인증이 실패한 경우
        return res.status(400).json({
            code: 400,
            message: err.name
        });
    }

}

app.listen(port, () => {
    console.log(port, '번 포트에서 대기중');
});
  
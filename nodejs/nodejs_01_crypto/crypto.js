const crypto = require("crypto");

const createHashedPassword = (password) => {
	return crypto.createHash("sha512").update(password).digest("base64");
};
// 레인보우 테이블
console.log(createHashedPassword("1234"));
console.log(createHashedPassword("1234"));
console.log(createHashedPassword("1234"));

// 비밀번호 암호화를 진행하는 함수 createdHash
const createdHash = (password) => {
    // 64 바이트 길이로 랜덤 salt 생성
    const salt = crypto.randomBytes(64).toString('base64');
    // salt와 실제 비밀번호를 이용해 만들어진 암호화된 비밀번호 hashed
    const hashed = crypto.pbkdf2Sync(password, salt, 10, 64, 'sha512').toString('base64');

    return { hashed, salt };
}
console.log( "비밀번호 암호화" );
console.log( createdHash("1234") );

const result = createdHash("1234");
console.log( result );
const result2 = createdHash("qwer");
console.log( result2 );

console.log( "비밀번호 검증" );
const verifyPassword = (password, salt, userPassword) => {
    // 암호화할 때 사용했던 비밀번호와 salt로 재암호화
    const hashed = crypto.pbkdf2Sync(password, salt, 10, 64, 'sha512').toString('base64');
    
    // 만들어진 암호화된 비밀번호와 비교 후, 비밀번호 검증
    if ( hashed === userPassword ) return true;
    return false;
}
console.log( "result 1 검증 : ", verifyPassword("123", result.salt, result.hashed ) );
console.log( "result 1 검증 : ", verifyPassword("1234", result.salt, result.hashed) );
console.log( "result 2 검증 : ", verifyPassword("qwer", result2.salt, result2.hashed) );
console.log( "result 2 검증 : ", verifyPassword("qwertt", result2.salt, result2.hashed) );

// bcrypt
const crypto = require("crypto");

const createHashedPassword = (password) => {
	return crypto.createHash("sha512").update(password).digest("base64");
};
// 레인보우 테이블
console.log(createHashedPassword("1234"));
console.log(createHashedPassword("1234"));
console.log(createHashedPassword("1234"));

const createdHash = (password) => {
    const salt = crypto.randomBytes(64).toString('base64');
    const hashed = crypto.pbkdf2Sync(password, salt, 10, 64, 'sha512').toString('base64');

    return { hashed, salt };
}
console.log( "비밀번호 암호화" );
console.log( createdHash("1234") );

const result = createdHash("1234");
console.log( result );

console.log( "비밀번호 검증" );
const verifyPassword = (password, salt, userPassword) => {
    const hashed = crypto.pbkdf2Sync(password, salt, 10, 64, 'sha512').toString('base64');
    
    if ( hashed === userPassword ) return true;
    return false;
}
console.log( verifyPassword("123", result.salt, result.hashed ) );
console.log( verifyPassword("1234", result.salt, result.hashed) );
// Router는 엔드포인트를 나누어 각 요청에 대한 처리를 한다.

const express = require("express");
const userRouter = express.Router();
const user = require("../controller/UserController");

userRouter.get("/", user.index); // ~~/ 로 접속 시 UserController의 index 함수를 실행한다.
userRouter.get("/register", user.register); 
userRouter.post("/register", user.post_register);

userRouter.get("/login", user.login);
userRouter.post("/login", user.post_login);
// ~~/register 로 접속 시 UserController의 register 함수를 실행한다.

module.exports = userRouter; 
// 경로와 컨트롤러 내의 함수를 연결시켜놓은 내용을 module로 내보낸다.
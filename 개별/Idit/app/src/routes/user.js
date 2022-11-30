const express = require("express");
const IDI = require("../controller/IDI_Controller");
const router = express.Router();

// get 처리 라우팅
router.get("/", IDI.get_home);
router.get("/signup", IDI.get_signup);
router.get("/login", IDI.get_login);
// 로그인 후 메인 페이지
router.post("/dashboard", IDI.get_dashboard);
router.get("/dashboard", IDI.get_dashboard);
router.get("/get_data", IDI.get_dashboard_data);

// 로그아웃 후 메인페이지
router.get("/logout", IDI.get_logout);

// 마이페이지
router.get("/userinfo", IDI.get_userinfo);
// 아이디 찾기 페이지
router.get("/forgot/id", IDI.get_id_forgot);
router.post("/forgot/get_id", IDI.post_id_forgot);
// 비밀번호 찾기 페이지
router.get("/forgot/pw", IDI.get_pw_forgot);
router.post("/forgot/pw/certify_post", IDI.post_pw_forgot_certify);
router.get("/forgot/pw/modify", IDI.get_pw_forgot_modify);
router.post("/forgot/pw/modify_post", IDI.post_pw_forgot_modify);
// 일정
// 404 페이지
router.get("/404", IDI.get_404);

// post 처리 라우팅
router.post("/", IDI.get_home);
router.post("/signup", IDI.post_signup);
router.post("/login", IDI.post_login);
// router.post("/userInfo", IDI.post_userinfo);
// 회원 정보 수정
router.patch("/userInfo/edit", IDI.patch_userinfo);
// 회원 탈퇴
router.delete("/userInfo/delete", IDI.delete_user);

//아이디 중복 검사
router.post("/signup/checkID", IDI.post_checkID);
//이메일 중복 검사
router.post("/signup/checkEmail", IDI.post_checkEmail);
//닉네임 중복 검사
router.post("/signup/checkNickname", IDI.post_checkNickname);

module.exports = router;

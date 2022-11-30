const express = require("express");
const IDI = require("../controller/IDI_Controller");
const router = express.Router();

// get 처리 라우팅
// 일정
router.get("/", IDI.get_calendar);
router.post("/modaldata", IDI.post_calendar_modal_data);
router.post("/calendardata", IDI.post_calendar_calendar_data);

// post 처리 라우팅

module.exports = router;

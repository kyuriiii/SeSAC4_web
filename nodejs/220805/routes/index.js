const express = require("express");
const visitor = require("../controller/VisitorController");
const router = express.Router();

router.get("/", visitor.get_visitors);
router.post("/write", visitor.post_comment);
module.exports = router;
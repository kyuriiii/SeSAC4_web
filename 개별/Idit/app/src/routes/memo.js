const express = require("express");
const IDI = require("../controller/IDI_Controller");
const router = express.Router();

router.get("/", IDI.get_memo);
router.get("/getmemoes", IDI.get_memoes);
router.post("/write", IDI.post_writememo);
router.post("/modify", IDI.post_modifymemo);
router.delete("/delete", IDI.post_deletememo);

module.exports = router;

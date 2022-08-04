const express = require("express");
const visitor = require("../controller/VisitorController");
const router = express.Router();

router.get("/", visitor.get_visitors);
router.get("/get", visitor.get_visitor);
router.post("/write", visitor.post_comment);
router.patch("/edit", visitor.edit_comment);
router.delete("/delete", visitor.delete_comment);

router.get("/visitors", );
module.exports = router;
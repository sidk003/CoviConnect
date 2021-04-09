const router = require("express").Router();
const { addUser,userLogin,addData } = require("../service/app.service.js");

router.post("/addData", addData);
router.post("/addUser", addUser);
router.post("/login", userLogin);

module.exports = router;
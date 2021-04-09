const router = require("express").Router();
const { addUser } = require("../service/app.service.js");

router.post("/addData", addUser);

module.exports = router;
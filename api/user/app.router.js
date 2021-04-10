const router = require("express").Router();
const { addUser,userLogin} = require("../service/login.service.js");
const { validationBody,schemas} = require("./helper/helper.validation");
const { addData,main } = require("../service/data.service");

router.post("/addData", addData);
router.post("/addUser",validationBody(schemas.registerValidation), addUser);
router.post("/login", userLogin);
router.get("/image", main);

module.exports = router;
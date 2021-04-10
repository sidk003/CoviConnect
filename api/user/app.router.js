const router = require("express").Router();
const { addUser,userLogin} = require("../service/login.service.js");
const { validationBody,schemas} = require("./helper/helper.validation");
const { addData,main,getVaccineData} = require("../service/data.service");
const { tokenVerification } = require("../user/helper/helper.token_verification");

router.post("/addData", [tokenVerification(), validationBody(schemas.addData)], addData);
router.post("/addUser",validationBody(schemas.registerValidation), addUser);
router.post("/login", userLogin);
router.get("/image", main);
router.get("/getVaccineData", getVaccineData);

module.exports = router;
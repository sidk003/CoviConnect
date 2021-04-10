const router = require("express").Router();
const { addUser,userLogin,changePassword } = require("../service/login.service.js");
const { validationBody,schemas} = require("./helper/helper.validation");
const { addVaccineData,main,getVaccineData,uploadFile} = require("../service/vaccineData.service");
const { tokenVerification } = require("../user/helper/helper.token_verification");
const { addCovidData,getCovidData } = require("../service/covidData.service")


router.post("/addUser",validationBody(schemas.registerValidation), addUser);
router.post("/login", userLogin);
router.post("/changePassword", changePassword);
router.get("/image", main);
router.post("/addVaccineData", [tokenVerification(), validationBody(schemas.vaccineData)], addVaccineData);
router.get("/getVaccineData", getVaccineData);
//router.post("/uploadFile" , uploadFile);
router.post("/addCovidData", [tokenVerification(), validationBody(schemas.vaccineData)], addCovidData);
router.get("/getVaccineData", getCovidData);


module.exports = router;
const Joi = require("@hapi/joi");

module.exports = {
    schemas: {
      //schema for register api
      registerValidation: Joi.object({
        username: Joi.string().required(),
        password: Joi.string().required().min(8),
      }),
      vaccineData: Joi.object({
        username: Joi.string().required(),
        fname: Joi.string().required(),
        lname: Joi.string().required(),
        age: Joi.number().required(),
        occupation: Joi.string().required(),
        vaccineTaken: Joi.string().required(),
        dosesTaken: Joi.number().required(),
        hospital: Joi.string().required(),
        hospitalAddress: Joi.string(),
        locationAddress: Joi.string(),
        locationPinCode: Joi.number().required(),
        locationCity: Joi.string().required(),
        locationState: Joi.string().required(),
        symptoms: Joi.string().required(),
        medicinesTaken: Joi.string().required(),
        comments: Joi.string()
      }),
      covidData: Joi.object({
        username: Joi.string().required(),
        fname: Joi.string().required(),
        lname: Joi.string().required(),
        age: Joi.number().required(),
        occupation: Joi.string().required(),
        doctorName: Joi.string().required(),
        doctorMobile: Joi.number().min(10).max(10),
        doctorRating: Joi.number().min(0).max(5),
        treatment: Joi.string(),
        recoveryPeriod: Joi.number().required(),
        vaccineTaken: Joi.string().required(),
        hospitalAddress: Joi.string(),
        locationAddress: Joi.string(),
        locationPinCode: Joi.number().required(),
        locationCity: Joi.string().required(),
        locationState: Joi.string().required(),
        symptoms: Joi.string().required(),
        medicinesTaken: Joi.string().required(),
        comments: Joi.string()
      })
    },
    validationBody: (schema) => {
      return (req, res, next) => {
        //generate error through joi
        const err = schema.validate(req.body);
  
        if (err.error) {
          if (err.error.isJoi) {
            let errDetail = [];
            if (err.error.details) {
              err.error.details.map(function (item) {
                var temp = {};
                temp[item.context.key] = item.message;
                errDetail.push(temp);
              });
            }
            return res.status(400).json({
              Status: false,
              Data: errDetail,
              Message: "Model InValid"
            });
          } else {
            return res.json({
              Status: false,
              Data: {},
              Message: "Error Occured"
            });
          }
          //
        }
        // call the next middleware function
        next();
      };
    },
  };
  
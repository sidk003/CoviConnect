const Joi = require("@hapi/joi");

module.exports = {
    schemas: {
      //schema for register api
      registerValidation: Joi.object({
        username: Joi.string().required(),
        password: Joi.string().required().min(8),
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
            res.status(400).json({
              Status: false,
              Data: errDetail,
              Message: "Model InValid"
            });
          } else {
            res.json({
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
  
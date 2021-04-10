var jwt = require("jsonwebtoken");

module.exports.tokenVerification = function () {
    return (req, res, next) => {
      const token = req.query.token;
  
      if (token) {
        req.token = token;
  
        jwt.verify(req.token, process.env.JWT_SECRET , (err, authdata) => {
          if (err) {
            res.status(403).json({
                status: false,
                message: "access denied"
            })
          } else {
            req.body.username = authdata.username;
            //call next middleware function
            next();
          }
        });
      } else {
        res.status(403).json({
            status: false,
            message: "access denied"
        })
      }
    };
  };
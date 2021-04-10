var jwt = require("jsonwebtoken");

module.exports.tokenVerification = function () {
    return (req, res, next) => {
      const bearerHeader = req.headers["authorization"];
  
      if (bearerHeader) {
        //if header present then retrieve token
        const bearer = bearerHeader.split(" ");
  
        const bearerToken = bearer[1];
        req.token = bearerToken;
  
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
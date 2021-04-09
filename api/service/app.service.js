const User = require("../../model/user");

exports.addUser = async (req,res) => {
    try{
        let user = await User.create({
            "name": req.body.text,
            "age" : req.body.age,
        });
        return res.status(201).json({
            success: true,
            data: user,
        });
    }
    catch(e){
        return res.status(401);
    }
}
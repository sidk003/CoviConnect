const User = require("../../model/user");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const JWT_SECRET = 'hack36_CoviConnect'
exports.addData = async (req,res) => {
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

exports.addUser = async (req,res) => {
    const { username, password: plainTextPassword } = req.body;
    const password = await bcrypt.hash(plainTextPassword, 10);

    try{const response = await User.create({
        username,
        password
    })
    return res.status(201).json({
        success: true,
        data: response,
    }); 
    }
    catch(e){
        if (e.code === 11000) {
            // duplicate key
            return res.json({ status: 'error', error: 'Username already in use' })
        }
        else{
            // return res.status(401).json({
            //     error: 'something went wrong'
            // })
            throw e;
        }
        
    }
}

exports.userLogin = async (req,res) => {
    const { username, password } = req.body
	const user = await User.findOne({ username }).lean()

	if (!user) {
		return res.status(403).json({ error: 'Invalid username/password' })
	}

	if (await bcrypt.compare(password, user.password)) {
		// the username, password combination is successful

		const token = jwt.sign(
			{
				id: user._id,
				username: user.username
			},
			process.env.JWT_SECRET
		)

		return res.status(200).json({ token });
	}

	res.status(403).json({ status: 'error', error: 'Invalid username/password' })
}
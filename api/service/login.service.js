const User = require("../../model/user");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.addUser = async (req,res) => {
    const { username, password: plainTextPassword } = req.body;
    const password = await bcrypt.hash(plainTextPassword, 10);

    try{const response = await User.create({
        username,
        password
    })
    return res.status(200).json({
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
            return res.status(401).json({
                error: 'something went wrong'
            })
            //throw e;
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

exports.changePassword = async (req, res) => {
	const { newpassword: plainTextPassword } = req.body
    const token = req.query.token;
  
    if (token) {
        
        if (!plainTextPassword || typeof plainTextPassword !== 'string') {
            return res.json({ status: 'error', error: 'Invalid password' })
        }

        if (plainTextPassword.length < 5) {
            return res.json({
                status: 'error',
                error: 'Password too small. Should be atleast 6 characters'
            })
        }

        try {
            const user = jwt.verify(token, process.env.JWT_SECRET)

            if(user){
                const _id = user.id

                const password = await bcrypt.hash(plainTextPassword, 10)

                await User.updateOne(
                    { _id },
                    {
                        $set: { password }
                    }
                )
                res.status(200).json({ 
                    status: 'ok',
                    message: "password changed" 
                })
            }else{
                return res.status(403).json({
                    message: "invalid token. Please login again"
                });
            }
        } catch (e) {
            res.status(401).json({ status: 'error', error: 'something went wrong' })
        }
    }
    else{
        return res.status(403).json({
            message: "please login again"
        });
    }
}
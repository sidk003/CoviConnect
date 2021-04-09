const mongoose = require("mongoose");

const Userschema = new mongoose.Schema(
    {
        username: { type: String,required: true},
        password : { type: String, required: true}
    },
    {
        collection: 'users'
    }
)

const model = mongoose.model('UserSchema', Userschema)

module.exports = model;
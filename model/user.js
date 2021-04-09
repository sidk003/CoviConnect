const mongoose = require("mongoose");

const Userschema = new mongoose.Schema(
    {
        name: { type: String},
        age : { type: Number}
    },
    {
        collection: 'users'
    }
)

const model = mongoose.model('UserSchema', Userschema)

module.exports = model;
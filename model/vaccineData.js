const mongoose = require("mongoose");

const Userschema1 = new mongoose.Schema(
    {
        username: { type: String,required: true,unique: true},
        name: { type: String,required: true},
        age : { type: Number, required: true},
        occupation: {type: String, required: true},
        vaccineTaken: { type: String,required: true},
        dosesTaken: { type: Number, required: true},
        hospital: {type: String, required: true},
        hospitalAddress: { type: String},
        locationAddress: {type: String},
        locationPinCode: { type: Number, required: true},
        locationCity: {type: String, required: true},
        locationState: {type: String, required: true},
        symptoms: {type: String, required: true},
        medicinesTaken: {type: String, required: true},
        comments: {type: String},
    },
    {
        collection: 'vaccine_data'
    }
)

const model = mongoose.model('DataSchema', Userschema1)

module.exports = model;
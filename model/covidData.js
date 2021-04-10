const mongoose = require("mongoose");

const Userschema2 = new mongoose.Schema(
    {
        username: { type: String,required: true,unique: true},
        fname: { type: String,required: true},
        lname: { type: String,required: true},
        age : { type: Number, required: true},
        occupation: {type: String, required: true},
        doctorName: { type: String,required: true},
        doctorMobile: { type: Number},
        doctorRating: { type: Number},
        treatment: { type: String},
        recoveryPeriod: { type: Number, required: true},
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
        collection: 'covid_data'
    }
)

const model = mongoose.model('CovidDataSchema', Userschema2)

module.exports = model;
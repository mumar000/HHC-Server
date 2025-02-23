const mongoose = require('mongoose')

const appointmentFormSchema = mongoose.Schema({
    service: {
        type:String,
        require:true
    },
    doctor: {
        type:String,
        require:true
    },
    name: {
        type:String,
        require:true
    },
    email: {
        type:String,
        unique:true,
        require:true
    },
    phone: {
        type:String,
        require:true
    },
    time: {
        type:String,
        require:true
    },
    date : {
        type:Date,
        require:true
    }

})

const appointmentForm = new mongoose.model('AppointmentForm',appointmentFormSchema)
module.exports = appointmentForm
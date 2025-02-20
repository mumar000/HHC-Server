const mongoose = require('mongoose')

const appointmentFormSchema = mongoose.Schema({
    clinic: {
        type:String,
        enum : ['Clinic 1','Clinic 2']
    },
    doctor: {
        type:String,
        enum : ['Dr.Chaudory Mehmud','Dr Ismail Rehan'],
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
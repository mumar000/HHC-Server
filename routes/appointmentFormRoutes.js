const express = require('express') 
const router = express.Router();
const appointmentController = require('../controller/appointmentForm')
const { getAppointmentRequest,createAppointmentRequest } = appointmentController

//@get
router.get('/appointmentForm',  getAppointmentRequest)
router.post('/appointmentForm', createAppointmentRequest)

module.exports  = router ;
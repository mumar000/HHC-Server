const express = require('express') 
const router = express.Router();
const appointmentController = require('../controller/appointmentForm')
const { getAppointmentRequest } = appointmentController

//@get
router.get('/api/appointmentForm',  getAppointmentRequest) 

module.exports  = router ;
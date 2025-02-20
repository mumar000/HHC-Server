const express = require('express');
const router = express.Router();
const contactUsController = require('../controller/contactUsController')
const  { getContactUsRequests,
        createContactUsRequest,
        updateContactUsRequest,
        deleteContactUsRequest } = contactUsController;

//@GET 
router.get('/api/contactUs/', getContactUsRequests)

//@POST 
router.post('/api/ContactUs', createContactUsRequest)

//@UPDATE 
router.put('/api/contactUs/:id', updateContactUsRequest)

//@DELETE
router.delete('/api/contactUs/:id', deleteContactUsRequest)

module.exports = router;

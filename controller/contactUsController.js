const contactUs = require('../model/contactUsSchema');

//@desc Get contact
//@route GET api/contactUs
//@access Private
const getContactUsRequests = async (req, res) => {
    try {
        const contacts = await contactUs.find();
        res.status(200).send({
            status: true,
            message: 'Data of the Clients',
            data: contacts
        });
    } catch (error) {
        console.error('Error fetching contact requests:', error);
        res.status(500).send({
            status: false,
            message: 'Internal Server Error'
        });
    }
};

//@desc create contact
//@route POST api/contactUs
//@access Private
const createContactUsRequest = async (req, res) => {
    try {
        const { name, phone, email, subject, message } = req.body;

        // Validate required fields
        if (!name) {
            return res.status(400).send({
                status:false,
                message:'Please enter Name field'
            })
        }
        else if(!phone) {
            return res.status(400).send({
                status:false,
                message:'Please enter valid Phone field'
            })
        }
        else if (!email) {
            return res.status(400).send({
                status:false,
                message:'Please enter valid Email'
            })
        }
        else if (!subject) {
            return res.status(400).send({
                status:false,
                enum: ['Subject 1', 'Subject 2'],
                message:'Please enter valid subject'
            })
        }
        else if(!message) {
            return res.status(400).send({
                status:false,
                message:'Please enter valid Message'
            })
        }

        
        // Crea te and save contact request
        const contactData = new contactUs({ name, phone, email, subject, message });
        const savedContact = await contactData.save();

        res.status(201).send({
            status: true,
            message: 'Success',
            data: savedContact
        });
    } catch (error) {
        console.error('Error saving contact request:', error);
        res.status(500).send({
            status: false,
            message: 'Internal Server Error'
        });
    
 }
};

//@desc  update Conact
//@route PUT api/contactUs/:id
//@access Private
const updateContactUsRequest = async (req, res) => {
        
        const { id } = req.params
        const { name, phone, email, subject, message } = req.body

        if (!name && !phone && !email && !subject && !message ) {
            return res.status(400).send ({
                status:false,
                message :'At least one field is required to update'
            })
        }

       contactUs.findOneAndUpdate (
         { _id: id},
         { name, phone, email, subject, message },
         { new:true }
       )
       .then((updatedContact) => {
            if(!updatedContact) {
                return res.status(400).send({
                    status:false,
                    message:'Internal Server Error',
                })
            }

            return res.status(200).send({
                status:true,
                message:'Information Updated',
            })
       })

       .catch((error) => {
            console.log('Error updating contact request', error);
            return res.status(500).send({
                status:false,
                messsage:'Error Updaing the Contact'
            })
       })   
};


//@desc delete contact
//@route DELETE api/contactUs/:id
//@access Private
const deleteContactUsRequest = async (req, res) => {
    
    const { id } = req.params

    if (!id) {
        return res.status(500).send({
            status:false,
            message:'Unable to delete the data'
        })
    }

    contactUs.findByIdAndDelete(id)
    .then((deleteRequest) => {
            if(!deleteRequest) {
                return res.status(404).send({
                    status:false,
                    message:'Unable to find the Id'
                })
            }

            return res.status(200).send({
                status:true,
                message:'Data Delete successfully'
            })
        })
    .catch((error) => {
        console.log('Error deleting the Data',error)
        return res.status(500).send({
            status:false,
            message:'Internal Server Error'
        })
    });
};
module.exports = {
    getContactUsRequests,
    createContactUsRequest,
    updateContactUsRequest,
    deleteContactUsRequest
};

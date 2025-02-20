const appointmentForm = require('../model/appointmentformSchema')

const getAppointmentRequest = async (req, res) => {
    try {
        const appointment = await appointmentForm.find();
        res.status(200).send({
            status:true,
            message:'Data of the clients',
            data: appointment
        })
    } catch (error) {
        console.log('Error finding the clients',error)
        res.status(500).send({
            status:false,
            message:'Internal Server Error'
        })
    }
}

const createAppointmentRequest = async (req,res ) => {
    try {
        const { clinic, doctor,name,email, phone, time, date } = req.body

        if(!clinic){
            res.status(400).send({
                status:true,
                message:'Please fill clinic field'
            })
        }
        else if(!doctor) {
            res.status(400).send({
                status:true,
                message:'Please fill doctor field'
            })
        }
        else if (!name) {
            res.status(400).send({
                status:true,
                message:'Please fill name field'
            })
        }
        else if(!email) {
            res.status(400).send({
                status:true,
                message:'Please fill email field'
            })
        }
        else if(!phone){
            res.status(400).send({
                status:true,
                message:'Please fill phone field'
            })
        }
        else if(!time) {
            res.status(400).send({
                status:true,
                message:'Please fill time field' 
            })
        }
        else if(!date){
            res.status(400).send({
                status:false,
                message:'Please fill date field'
            })
        }

        const appointmentData = new appointmentForm({ clinic, website, doctor, name, email, phone, time, date})
        const savedAppointment = await appointmentData.save()

    } catch (error) {
        
    }
}


module.exports = {
 getAppointmentRequest 
}
const express = require('express')
const port = process.env.PORT || 3040 
const app = express();
const dotenv = require('dotenv').config()

//Cross orgin Resource sharing
const cors = require('cors')
app.use(cors({
    origin:'https://7oroof.netlify.app',
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
}))

//Database Connection
const connectDB = require('./config/db')
connectDB()

app.use(express.json())

app.get('/', (req, res) => {
    return res.status(200).send({
        status:true,
        message:'Clinic Website is Running',
    })
})

//ContactForm Routes 
const contactFormRoute = require('./routes/contactFormRoute')
app.use('/', contactFormRoute)

//ApointmentForm Routes
 const apppointFormRoutes = require('./routes/appointmentFormRoutes')
app.use('/',apppointFormRoutes)

// Start the server and listen on the specified port
app.listen(port, () => 
    {console.log(`Port is running on ${port}`)
});
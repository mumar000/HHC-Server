const mongoose = require('mongoose');

const contactUsSchema = mongoose.Schema({
    name: {
        type:String,
        require:true
    },
    phone: {
        type:String,
        require:true
    },
    email: {
        type:String,
        require:true,
        unique:true
    },
    service: {
        type:String,
        require:true
    },
    message:{
        type:String,
        require:true
    }
},
{
    timestamps:true
}
)
const contactUs = new mongoose.model ('Contact',contactUsSchema)
module.exports = contactUs
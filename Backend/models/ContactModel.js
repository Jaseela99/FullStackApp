const mongoose= require("mongoose")
const contactSchema = new mongoose.Schema({
    fullName:{
     type:String
    },
    email:{
        type:String,
        lowerCase:true
    },
    message:{
        type:String
    }
})

const Contact = mongoose.model("Contact",contactSchema)
module.exports= Contact
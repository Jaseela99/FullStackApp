const mongoose= require("mongoose")
const aboutSchema = new mongoose.Schema({
    skill:{
     type:String
    },
    efficiency:{
        type:Number
    }
})

const About = mongoose.model("About",aboutSchema)
module.exports= About
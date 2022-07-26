const mongoose= require("mongoose")
const aboutSchema = new mongoose.Schema({
    skills:{
     type:String
    }
})

const About = mongoose.model("About",imageSchema)
module.exports= About
const mongoose= require("mongoose")
const homeSchema = new mongoose.Schema({
    userName:{
     type:String
    },
    title:{
        type:String
    },
    bio:{
        type:String
    },
   /*  image:
    {
        data: Buffer,
        contentType: String
    } */
    
})

const Home = mongoose.model("Home",homeSchema)
module.exports= Home
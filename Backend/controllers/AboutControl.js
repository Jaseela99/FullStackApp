const About = require("../models/AboutModel")

const aboutControl={
     createAbout:async(req,res)=>{
     try{
        const {skill,efficiency}=req.body
        const about = new About({
            skill:skill,
            efficiency:efficiency
        })
        await about.save()
        res.status(200).json({
            success: true,
            about,
          })
    }catch(err){
        res.status(500).json({
            success: false,
            message: err.message,
          })  
    }
},

getAbout:async (req, res) => {
    try {
      const about = await About.find()
      res.status(200).json({
        success: true,
        about,
      })
    } catch (err) {
      res.status(500).json({
        success: false,
        message: err.message,
      })
    }
  },

}
module.exports= aboutControl
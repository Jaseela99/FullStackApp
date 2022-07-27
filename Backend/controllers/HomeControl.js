const Home = require("../models/HomeModel")

const homeControl={
     createHome:async(req,res)=>{
     try{
        const {userName,title,bio}=req.body
        const home = new Home({
            userName:userName,
            title:title,
            bio:bio
        })
        await home.save()
        res.status(200).json({
            success: true,
            home,
          })
    }catch(err){
        res.status(500).json({
            success: false,
            message: err.message,
          })  
    }
},

getHome:async (req, res) => {
    try {
      const home = await Home.find()
      res.status(200).json({
        success: true,
        home,
      })
    } catch (err) {
      res.status(500).json({
        success: false,
        message: err.message,
      })
    }
  },

}
module.exports= homeControl
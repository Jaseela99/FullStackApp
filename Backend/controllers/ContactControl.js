const Contact = require("../models/ContactModel")

const contactControl ={
    createContact:async(req,res)=>{
        try{
            const {fullName,email,message}=req.body
            const contact = new Contact({
              fullName:fullName,
              email:email,
              message:message
            })
            await contact.save()
            res.status(200).json({
                success: true,
                contact,
              })
        }catch(err){
            res.status(500).json({
                success: false,
                message: err.message,
              })  
        }
    },
    getAllContacts: async (req, res) => {
        try {
          const contacts= await Contact.find()
          res.status(200).json({
            success: true,
            contacts,
          })
        } catch (err) {
          res.status(500).json({
            success: false,
            message: err.message,
          })
        }
      }

}
module.exports=contactControl
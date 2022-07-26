const contactControl= require("../controllers/ContactControl")
const contactRouter=(app)=>{
    app.post("/contact",contactControl.createContact)
    app.get("/contacts",contactControl.getAllContacts)
}

module.exports= contactRouter
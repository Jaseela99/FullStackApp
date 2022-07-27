const aboutControl= require("../controllers/AboutControl")
const aboutRouter=(app)=>{
    app.post("/abouts",aboutControl.createAbout)
    app.get("/about",aboutControl.getAbout)
}

module.exports= aboutRouter
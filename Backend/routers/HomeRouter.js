const homeControl= require("../controllers/HomeControl")
const homeRouter=(app)=>{
    app.post("/home",homeControl.createHome)
    app.get("/",homeControl.getHome)
}

module.exports= homeRouter
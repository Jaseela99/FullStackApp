const express = require("express")
const mongoose = require("mongoose")
const app=express()
require("dotenv").config();
mongoose.connect(process.env.DB, {
    useNewUrlParser: true
  })
  .then(() => {
    console.log("Successfully connected to MongoDB.");
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  })
  app.use(express.json());
  require("./routers/ContactRouter")(app)
const PORT = process.env.PORT || 8080;
app.get("/", (req, res) => {
    res.send("hello people");
  });
  app.listen(PORT, (error) => {
    if(!error)
        console.log(`Server is Successfully Running and App is listening on port  ${PORT}`)
    else 
        console.log("Error occurred", error);
    }
  );
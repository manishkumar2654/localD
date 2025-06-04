const express = require("express");
const app=express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose=require("mongoose");
const UserRoute = require("./routes/userRoute")
const port=8080;
mongoose.connect("mongodb://localhost:27017/roshnilogin").then(()=>{
    console.log("DB Connected succesfuly");
    
})
app.use(cors());
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())


app.use("/users", UserRoute)


app.listen(port,()=>{
    console.log(`Server run on port ${port}`);
    
})
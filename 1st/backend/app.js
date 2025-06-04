const express = require("express");

const app=express();
const stuRoute = require("./routes/stuRoute");
const cors = require("cors");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
require("dotenv").config();
const Port=process.env.PORT || 9000
mongoose.connect(process.env.DBCON).then(()=>{
    console.log("db connected Succefullt!");
    
})



app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());



app.use("/students", stuRoute);     


app.listen(Port, ()=>{
    console.log(`server run on port  ${Port}`);
    
})
const express = require("express");
const app=express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose=require("mongoose");
require('dotenv').config();
//const UserRoute = require("./routes/userRoute")
const port=process.env.PORT || 8080;
mongoose.connect(process.env.DBCON).then(()=>{
    console.log("DB Connected succesfuly");
    
})
app.use(cors());
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())


app.use("/", (req, res, next)=>{
    console.log("thise is app level middleware");
    next()
})

app.get("/about", (req, res, next)=>{
    console.log("1 about function");
    next()
    
}, (req, res, next)=>{
    console.log("2 about function");
    next()
}, (req, res, next)=>{
    console.log("3 rd function about");
    next()
}, (req, res)=>{
    console.log("about last page");
    res.send("about done")
});


app.get("/home", (req, res, next)=>{
    console.log("this is Home middile waree");
    next()
    
}, (req, res)=>{
    console.log("welcome to my home page ");
    res.send("hpme pahe")
    
} )


app.get("/Mob", (req, res, next)=>{
    console.log("thise is app level mobill no");
    next()
})
app.get("/Manish", (req, res, next)=>{
    console.log("thise is app level manish");
    next()
})

app.get("/students/about", (req,res)=>{
    console.log("this is student about page");
    res.send("about page")
    
})

app.get("/", (req,res)=>{
    console.log("this is my appppppp");  
    res.send("welcome to my roo path")
})










// app.use("/users", UserRoute)


app.listen(port,()=>{
    console.log(`Server run on port ${port}`);
    
})
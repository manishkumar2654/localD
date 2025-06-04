const express = require("express")
const app = express();
const cors = require("cors");
const bodyParser= require("body-parser")
require("dotenv").config();
const Port = process.env.PORT  || 8000
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());



// 1{app.use((req, res, next)=>{
//     console.log("first app midle layer");
//     next();
// })


// app.get("/home", (req, res, next)=>{
//     console.log("home page ");
//     res.send("home page data ")
//     next();
// })
// app.use((req, res, next)=>{
//     console.log("this is last middilk ware after home");
    
// })}1






app.use((req, res, next)=>{
    
    console.log("first midlesare one");
    console.log(req.body.name);
    
    
   
    next();
    
});

app.use((req, res, next)=>{
    console.log("this is second mid layer two");
    console.log(req.body.name);
    
    next();
    
});

app.use((req,res, next)=>{
    console.log("hai three");
    console.log( req.body.name);
     req.body.name="sonu";
    next();
    
    
})

app.use((req, res, next)=>{
    console.log("4");
    console.log( req.body.name);
    next();
    
})
app.use((req, res, next)=>{
    req.body.name="gonuu";
    next();
})


app.use((req, res, next)=>{
    console.log("5");
    console.log( req.body.name);
    
    next()
})
app.use((req, res, next)=>{
    console.log("end");
    
     next();
    
})

app.post("/home", (req, res)=>{
    console.log("home page");
    res.send(req.body.name);
    
});




app.listen(Port, ()=>{
    console.log(`run on port ${Port}`);
    
})



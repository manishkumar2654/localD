const mongoose=require("mongoose");
const userSchema = new mongoose.Schema({

    name:{
         type: String,
         requied: true
    },

    contact:{
         type: String,
         requied: true
    },
    email:{
         type: String,
         requied: true
    },
    password:{
         type: String,
         requied: true
    },

     createdAt: {type:Date, default: Date.now }
    
})

module.exports = mongoose.model("user", userSchema);
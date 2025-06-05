const mongoose = require("mongoose");
const stuSchema = new mongoose.Schema({
    rollno:Number,
    name:String,
    city:String,
    fees:Number,
    imagename:String
})

module.exports = mongoose.model("student", stuSchema);
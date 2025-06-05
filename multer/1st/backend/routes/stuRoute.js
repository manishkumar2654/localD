const express = require("express");
const route = express.Router();
const StuController = require("../controllers/stuController");

const multer = require("multer");

const storage = multer.diskStorage({
    destination:(req, file, cb) =>{
        cb(null, "./uploads");
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({storage:storage});








route.post("/save" , upload.single("image")  , StuController.stuSave);
route.get("/display", StuController.display)


module.exports = route;
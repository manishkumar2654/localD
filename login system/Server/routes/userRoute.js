const express = require("express");
const route= express.Router();
const UserController= require("../controllers/userController");

route.post("/registration",UserController.userRegistration);




route.post("/userlogin",UserController.userLogin);









module.exports=route;
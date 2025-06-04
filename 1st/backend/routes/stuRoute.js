const express = require("express");
const route = express.Router();
const StuController = require("../controllers/stuController");








route.post("/save" , StuController.stuSave);
route.get("/display", StuController.dataDisplay);
route.get("/updateshowdata", StuController.updateShow)
route.delete("/datadelete",StuController.dataDelete)
route.get("/getsearchdata", StuController.getSearchData);
route.get("/editdata", StuController.editDataShow);
route.put("/editsave", StuController.editDataSave);

module.exports = route;
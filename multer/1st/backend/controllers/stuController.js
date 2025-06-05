const stuModel = require("../models/stuModel");


const stuSave = async (req, res) => {
  const imgname = req.file.path;
  const {rollno, name, city, fees} = req.body;
  const Student = await stuModel.create({

    rollno:rollno,
    name:name,
    city:city,
    fees:fees,
    imagename:imgname
  })

  res.send({msg:"Data inserted ", Student:Student});
  
};

const display = async(req, res) => {
  const Student = await stuModel.find();
  res.send(Student);
}



module.exports = {
  stuSave,
  display
 
};

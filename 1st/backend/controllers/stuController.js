const stuModel = require("../models/stuModel");

const stuSave = async (req, res) => {
  const { rollno, name, city, fees } = req.body;
  console.log(req.body);

  const student = await stuModel.create({
    rollno,
    name,
    city,
    fees,
  });

  res.send({ msg: "data save!" });
  // res.send("okkk")
};
const dataDisplay = async (req, res) => {
  const Data = await stuModel.find();
  console.log("chal gya");
  res.send(Data);
};

const updateShow = async (req, res) => {
  const Data = await stuModel.find();
  console.log(req.query);
  res.send(Data);
};
const dataDelete = async (req, res) => {
  const { myid } = req.query;
  await stuModel.findByIdAndDelete(myid);

  const Data = await stuModel.find();

  res.send({ msg: "data delete", Data: Data });
};
const editDataShow = async(req, res) => {
  const { id } = req.query;
  const Data = await stuModel.findByIdAndUpdate(id);

  res.send(Data);
};

const getSearchData = async (req, res) => {
  const { rno } = req.query;
  const Data = await stuModel.find({ rollno: rno });
  console.log(Data);
  res.send(Data);
};

const editDataSave = async (req, res) => {
  const { rollno, name, city, fees,_id } = req.body;
  console.log(req.body);
  console.log(_id);

  const student = await stuModel.findByIdAndUpdate(_id,{
    rollno,
    name,
    city,
    fees
  });

  res.send({ msg: "edit save!" });
  // res.send("okkk")
};

module.exports = {
  stuSave,
  dataDisplay,
  updateShow,
  dataDelete,
  getSearchData,
  editDataShow,
  editDataSave
};

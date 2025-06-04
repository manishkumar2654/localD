import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import BackEndUrl from "../config/BackEndUrl";
import axios from "axios";
import { useParams } from "react-router-dom";

const Edit = () => {
    const [myData,setMyData] = useState({})
  const { id } = useParams();
//   console.log(id);

  const LoadData = async()=>{
    const res = await axios.get(`${BackEndUrl}students/editdata/?id=${id}`);
    setMyData(res.data)
    
  }
  useEffect(()=>{
    LoadData()
  },[])



  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setMyData((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("click");

    let api = `${BackEndUrl}students/editsave/?id`;
    console.log(api);

    const response = await axios.put(`${api}`, myData);
    console.log(response.data);

    alert(response.data.msg);
  };

  return (
    <>
      <h1>this is insert page insert student record</h1>
      <Form style={{ width: "500px" }}>
        <Form.Label>enter Roll num</Form.Label>
        <Form.Control type="text" value={myData.rollno} name="rollno" onChange={handleInput} />

        <Form.Label>enter name</Form.Label>
        <Form.Control type="text" value={myData.name} name="name" onChange={handleInput} />

        <Form.Label>enter city</Form.Label>
        <Form.Control type="text" value={myData.city} name="city" onChange={handleInput} />

        <Form.Label>enter fess</Form.Label>
        <Form.Control type="text" value={myData.fees} name="fees" onChange={handleInput} />

        <Button variant="primary" onClick={handleSubmit} type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};
export default Edit;

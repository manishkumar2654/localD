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

 const [uploadimage, setUploadImage]=useState("");

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

        const formData = new FormData();
        formData.append('file', uploadimage);
        formData.append('upload_preset', 'rajphoto' );
        formData.append('cloud_name', 'dqbdlrryo' );

        const response1 = await axios.post("https://api.cloudinary.com/v1_1/dqbdlrryo/image/upload", formData)

    let api = `${BackEndUrl}students/editsave/?id`;
    console.log(api);

    const response = await axios.put(`${api}`, {...myData, imagename:response1.data.url});
    console.log(response.data);

    alert(response.data.msg);
  };


  

    const handleimage = (e)=>{
        console.log(e.target.files[0]);
        setUploadImage(e.target.files[0])
        console.log(uploadimage);
        
    }

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

          <Form.Label>Upload image</Form.Label>
        <Form.Control type="file"  onChange={handleimage} />

        <Button variant="primary" onClick={handleSubmit} type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};
export default Edit;

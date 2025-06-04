import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import BackEndUrl from '../config/BackEndUrl';
import axios from "axios";

const Insert = () => {
    const [input, setInput] = useState({
        rollno:"",
        name:"",
        city:"",
        fees:""
    });
    console.log(input);
    const [uploadimage, setUploadImage]=useState("");
    

    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values,[name]:value}));
        console.log(input);
    }


    const handleimage = (e)=>{
        console.log(e.target.files[0]);
        setUploadImage(e.target.files[0])
        console.log(uploadimage);
        
    }

    const handleSubmit =async (e)=> {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', uploadimage);
        formData.append('upload_preset', 'rajphoto' );
        formData.append('cloud_name', 'dqbdlrryo' );

        const response = await axios.post("https://api.cloudinary.com/v1_1/dqbdlrryo/image/upload", formData)
        console.log(response);
        
    }
   
    
    


    return(
        <>
        <h1>this is insert page insert student record</h1>
         <Form style={{width:"500px"}}>
      
        <Form.Label>enter Roll num</Form.Label>
        <Form.Control type="text" name='rollno' onChange={handleInput} />
       

        
    
        <Form.Label>enter name</Form.Label>
        <Form.Control type="text" name='name' onChange={handleInput} />
       

      
        <Form.Label>enter city</Form.Label>
        <Form.Control type="text" name='city' onChange={handleInput} />
      

       
        <Form.Label>enter fess</Form.Label>
        <Form.Control type="text" name='fees' onChange={handleInput} />


        <Form.Label>Upload image</Form.Label>
        <Form.Control type="file"  onChange={handleimage} />
       
       
       

     
      <Button variant="primary" onClick={handleSubmit} type="submit">
        Submit
      </Button>
    </Form>
        
        </>
    )
}
export default Insert;
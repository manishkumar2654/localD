import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom"


const Registration = ()=>{
    const [input, setInput] = useState({});
    const navigate = useNavigate();
    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values, [name]:value}))
        console.log(input);
       }

       const handleSubmit =async(e) => {
        e.preventDefault()
        let api="http://localhost:8080/users/registration";
        
        try {
            const response = await axios.post(api, input);
            console.log(response);
            alert("")
            navigate("/")
            
        } catch (error) {
                console.log(error);
        }

       }


    return(
        <>

          <div>
        <h2>user Registration</h2>
           <Form>



      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Name</Form.Label>
        <Form.Control type="text" name='name' onChange={handleInput} placeholder="enter name" />
        </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Contact</Form.Label>
        <Form.Control type="text"  name='contact' onChange={handleInput} placeholder="Enter mobil" />
        </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Email</Form.Label>
        <Form.Control type="email"  name='email' onChange={handleInput} placeholder="Enter email" />
        </Form.Group>




      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"  name='password' onChange={handleInput} placeholder="Password" />
      </Form.Group>
     
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        submit
      </Button>
    </Form>
   

    </div>
        
        
        
        </>
    )
}
export default Registration;
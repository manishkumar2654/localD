import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import BackEndUrl from '../backendUrlConfig/BackendUrl';
import axios from "axios";



const Home =()=>{
  const [adminid, setAdminid]=useState("");
  const [password, setPassword]= useState("");


  const handleSubmit =async (e)=>{
    e.preventDefault()
    let api = `${BackEndUrl}/admin/logincheck`;
    const response = await axios.post(api, {adminid:adminid, password:password});
    console.log(response);
    
  }
    return(
        <>
        
        <h2 id='adminwrite'>Adimin login form</h2>
          <Form id='homeform'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter ID</Form.Label>
        <Form.Control type="text" value={adminid} onChange={(e)=>{setAdminid(e.target.value)}} placeholder="Enter id" />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" />
      </Form.Group>
     
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        inlog
      </Button>
    </Form>
        
        </>
    )
}

export default Home;

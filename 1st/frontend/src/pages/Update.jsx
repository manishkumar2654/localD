import { useState, useEffect } from "react";
import BackEndUrl from "../config/BackEndUrl";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import {useNavigate} from "react-router-dom"


const Update = ()=>{

   

    const [mydata, setMydata]=useState([]);
    const navigate=useNavigate();
    const loadData=async()=>{
        let api=`${BackEndUrl}students/updateshowdata`;
        const response=await axios.get(api);
        console.log(response.data);
        setMydata(response.data)
        
    }
    useEffect(()=>{
        loadData();
    },[]);

    const recDel=async(id)=>{
        let api=`${BackEndUrl}students/datadelete/?myid=${id}`;
        const response=await axios.delete(api);
        console.log(response.data);
        setMydata(response.data.Data)

        
    }

    const ans =mydata.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.rollno}</td>
                <td>{key.name}</td>
                <td>{key.city}</td>
                <td>{key.fees}</td>
                <td onClick={()=>{recDel(key._id)}}> Delet</td>
                <td onClick={()=>{navigate(`/editpage/${key._id}`)}}>Edit</td>
            </tr>
            </>
        )
    });





    return(
        <>
        <h1>update page  </h1>
         <Table striped bordered hover>
      <thead>
        <tr>
          <th>rollno</th>
          <th>name</th>
          <th>city</th>
          <th>fees</th>
          <th>editt</th>
          <th>del</th>
        </tr>
      </thead>
      <tbody>
        {ans}
      </tbody>
        
        </Table>
        
        </>
    )
}
export default Update;
import { useState, useEffect } from "react";
import BackEndUrl from "../config/BackEndUrl";
import axios from "axios";
import Table from 'react-bootstrap/Table';

const Display = () => {
    const [mydata, setMyData]= useState([]);

    const loadData=async()=>{
        let api =`${BackEndUrl}students/display`;
        const response = await axios.get(api);
        console.log(response.data);
        setMyData(response.data)
    }

    useEffect(()=>{
        loadData();
    }, []);


    const ans=mydata.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.rollno}</td>
                <td>{key.name}</td>
                <td>{key.city}</td>
                <td>{key.fees}</td>
            </tr>
            
            
            </>
        )
    })

    return(
        <>
        <h1>Display student Record</h1>
         <Table striped bordered hover>
      <thead>
        <tr>
          <th>rollno</th>
          <th>Name</th>
          <th>city</th>
          <th>fees</th>
        </tr>
      </thead>
      <tbody>
        {ans}
      </tbody>
      </Table>

        
        </>
    )
}
export default Display;
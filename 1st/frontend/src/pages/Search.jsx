import { useState } from "react";
import axios from "axios";
import BackEndUrl from "../config/BackEndUrl";
const Search =()=>{
    const [rno, setRno] = useState("");
    const [mydata, setMydata] = useState([]);

    const handleSubmit=async()=>{
        let api=`${BackEndUrl}students/getsearchdata/?rno=${rno}`;
        const response = await axios.get(api)
        console.log(response.data);
       setMydata(response.data);
        

    }
    const ans = mydata.map((key)=>{

        return(
            <>
            <h1>student Rollno : {key.rollno}</h1>
            <h1>student name : {key.name}</h1>
            <h1>student city : {key.city}</h1>
            <h1>student fees : {key.fees}</h1>
            
            
            
            </>
        )
    })




    return(
        <>
        <h1>Search page</h1>
        Enter rollno : <input type="text"  value={rno} onChange={(e)=>{setRno(e.target.value)}} />
        <button onClick={handleSubmit} >search</button>
        <hr />
        {ans}
        </>
    )
}
export default Search;
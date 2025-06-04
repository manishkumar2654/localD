import axios from "axios";

const App=()=>{

  const handleSubmit=async() =>{
    let api = "http://localhost:8000/home";
    const response = await axios.post(api, {name: "jyoti"});
    console.log(response);
    
  }






  return(
    <>
    
    <h1>hello</h1>
    <h1>welcome to middlerware</h1>
    <button onClick={handleSubmit} >click me</button>    
    </>
  )
}

export default App;
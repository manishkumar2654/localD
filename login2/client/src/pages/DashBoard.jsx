import { useNavigate } from "react-router-dom";


const DashBoard=()=> {
    const navigate=useNavigate();

    const logout=()=>{
        localStorage.clear();
        navigate("/");
    }


    return(
        <>
       <div id="dashboard">
         <h1>user dashboard</h1>

         welcoemm {localStorage.getItem("user")} Email : {localStorage.getItem("email")} <a href=""onClick={logout}>Logout</a>
       </div>
        
        </>
    )
}

export default DashBoard;
import Footer from "./componant/Footer";
import Header from "./componant/Header";
import {Outlet} from "react-router-dom";
const Layout=()=>{
    return(
        <>
        <Header/>
        
        <Outlet/>
        <Footer/>
        
        </>
    )
}
export default Layout;
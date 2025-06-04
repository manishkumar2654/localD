import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import TopNav from "./components/TopNav";
import Home from "./pages/Home";

const Layout = () => {
    return(
        <>
        <TopNav />
        <Outlet />
       <Footer />
        
        </>
    )
}
export default Layout;
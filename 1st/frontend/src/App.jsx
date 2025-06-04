import {BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Insert from "./pages/Insert";
import Display from "./pages/Display";
import Update from "./pages/Update";
import Search from "./pages/Search";
import Contact from "./pages/Contact";
import Edit from "./pages/edit";

const App = () => {
  return(
    <>
    <h1>app page</h1>

    <BrowserRouter> 
    <Routes>
    <Route path="/" element={<Layout/>} >
    <Route index element={<Home/>} />
    <Route path="/home" element={<Home/>} />
    <Route path="/insert" element={<Insert/>} />
    <Route path="/display" element={<Display/>} />
    <Route path="/update" element={<Update/>} />
    <Route path="/editpage/:id" element={<Edit/>} />
    <Route path="search" element={<Search/>} />
    <Route path="contact" element={<Contact/>} />


      
      </Route>
      </Routes>
      </BrowserRouter> 

    
    
    </>
  )
}
export default App
import React from "react";
import { Route, Routes } from "react-router-dom";
import './index.scss';
import Home from "./Home";
import Service from "./Service";
import Contact from "./Contact";
import Navbar from "./Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import About from "./About";
import Footer from "./Footer";

const App = () => {
    return (
        <div>
        <Navbar/>
           <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/service" element={<Service/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
           </Routes>
           <Footer/>
        </div>
    )
};
export default App;
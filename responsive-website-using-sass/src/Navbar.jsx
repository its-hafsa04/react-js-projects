import React from "react";
import { NavLink}from "react-router-dom";

const Navbar=()=>{
return(
<>
<header class="header">
    
    <i class='bx bx-menu' id="menu-icon"></i>
<nav class="navbar">
<NavLink to="/" class="active" style={{fontWeight:'bolder',marginRight:'700px'}} >Hafsa Sajid</NavLink>
    <NavLink to="/" class="active">Home</NavLink>
    <NavLink to="/service">Services</NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/contact">Contact</NavLink>
</nav>
</header>
</>
)}
export default Navbar;
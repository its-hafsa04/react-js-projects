import React from "react";
import { NavLink } from "react-router-dom";


const Header = () =>{
    return(
        <div className="main">
  <header>
                <nav>
                
                        <i><NavLink to='/'>Home</NavLink></i>
                        <i><NavLink to='/search'>Search</NavLink></i>
                
                </nav>
            </header>
            </div>
)};
export default Header;
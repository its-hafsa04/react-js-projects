import React, { useState } from 'react';
import './Navbar.css';
import {FaFacebookSquare,FaInstagramSquare,FaYoutubeSquare} from 'react-icons/fa';
import {GiHamburgerMenu} from 'react-icons/gi';

const Navbar = () =>{

const [icons,setIcons] = useState(false);

return(
    <>
    <nav className='main-nav'>
<div className='logo'>
<h2>
    <span>H</span>afsa
    <span>S</span>ajid
    </h2>
</div>
<div className= {icons ? 'menu-link mobile-menu-link' : "menu-link"}>
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</div>
<div className="social-media">
    <ul className="social-media-desktop">
        <li><a href=""><FaFacebookSquare className='facebook'/></a></li>
        <li><a href=""><FaInstagramSquare className='instagram'/></a></li>
        <li><a href=""><FaYoutubeSquare className='youtube'/></a></li>
    </ul>
    <div className="hum-menu">
    <a href="#" onClick={() => setIcons(!icons)}>
<GiHamburgerMenu/></a>
    </div>
</div>
    </nav>
<section className='hero-section'>
<p>Welcome to</p>
<h1>HS Website</h1>
</section>
    </>
)
};
export default Navbar;
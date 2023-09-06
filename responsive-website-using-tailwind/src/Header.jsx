import React from 'react'
import { useState } from 'react';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';

const Header = () => {

const [toggle,setToggle] = useState(false);

  return (
    <div className='bg-[#183d5d] p-6'>
        <div className='max-w-[1240px] py-[10px]  items-center flex justify-between
         mx-auto'>
<div className='text-3xl font-bold text-orange-600'>HaSa Tech</div>
{
  toggle ?
  <AiOutlineClose onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block'/>
:
<AiOutlineMenu onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block'/>
}
<ul className='hidden md:flex text-white gap-10'>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Services</a></li>
    <li><a href="#">Contact</a></li>
</ul>
{/*Responsive menu */}
<ul className={`duration-500 md:hidden w-full text-white gap-10 h-screen
fixed bg-black ${toggle ? "left-[0]" : "left-[-100%]"} top-[101px]`}>
    <li className='p-5'><a href="#">Home</a></li>
    <li className='p-5'><a href="#">About</a></li>
    <li className='p-5'><a href="#">Services</a></li>
    <li className='p-5'><a href="#">Contact</a></li>
</ul>
        </div>
    </div>
  )
}

export default Header
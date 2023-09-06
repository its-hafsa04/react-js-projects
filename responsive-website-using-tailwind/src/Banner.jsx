import React from 'react'
import Typed from 'react-typed';

const Banner = () => {
  return (
    <div className='bg-[#183d5d] w-full py-[50px]'>

<div className='max-w-[1280px] py-[90px] mx-auto font-bold text-center'>

<div className='text-xl md:text-3xl md:p-[24px] text-orange-600'>Learn with us.</div>

<h2 className='text-white text-3xl md:text-[60px] md:p-[24px]'>Grow with us.</h2>

<div className='text-white text-[20px] md:text-[50px] md:p-[24px]'>Learn  
<Typed className='ml-[10px]'
                    strings={[' Web Development',' Blogging',' Digital Marketing']}
                    typeSpeed={100}
                    loop={true}
                    backSpeed={120}
                /></div>
                        <button className='bg-orange-600 text-white p-3 rounded'>Get Started</button>

</div>
    </div>
  )
}

export default Banner
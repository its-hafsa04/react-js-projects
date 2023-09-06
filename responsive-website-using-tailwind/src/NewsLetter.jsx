import React from 'react'

const NewsLetter = () => {
  return (
    <div className='bg-[#fbcd26] w-full p-4'>
        <div className='max-w-[1240px] md:flex justify-between py-[40px]'>
            <div className='m-2'>
                <h1 className='font-bold text-[20px] md:text-[40px] text-white'>Want to Learn latest I.T skill?</h1>
            <span className='text-white'>Sign up to our NewsLetter for latest updates</span>
            </div>
            <div className='m-2'>
                <input type="text" className='  rounded p-3 mr-2 mb-2 text-gray-400' placeholder='Enter Email'/>
                <button className='bg-black text-white p-3 rounded'>Get Started</button>
<br />
<p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing. <br />
<a href="#" className='text-black'>Privacy Policy</a>
</p>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter
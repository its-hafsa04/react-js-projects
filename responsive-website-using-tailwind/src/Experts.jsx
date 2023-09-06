import React from 'react'

const Experts = () => {
  return (
    <div className='max-w-[1240px] p-2 my-10 mx-auto md:grid grid-cols-3'>
        <div className=' col-span-1 ml-5 text-center'>
            <img className='inline' src="https://media.istockphoto.com/id/1407200725/photo/close-up-of-businessman-using-a-laptop-with-graphs-and-charts-on-a-laptop-computer.webp?b=1&s=170667a&w=0&k=20&c=nMG_v3mqQM2UgXNc_0zE0nTU67GUrDuTubzNfkjPncY=" alt="" />
        </div>
        <div className=' col-span-2 ml-[50px] mr-5 mt-10 flex flex-col justify-center'>
            <h1 className='text-green-600 font-bold my-2'>Learn from Experts.</h1>
            <p className='my-2 justify-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum earum itaque ipsum modi temporibus enim consequatur magni quidem porro asperiores?</p>
        <button className='md:w-[18%] bg-black text-white p-3 rounded'>Get Started</button>
        </div>
    </div>
  )
}

export default Experts
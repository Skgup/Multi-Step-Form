import React from 'react'
import './input.css'
function Level() {
    return (<div className='text-center'>
        <div className='pb-[20px] '>
 <div><h1 className='text-[25px] mt-20 font-bold mb-7 md:text-[30px]'>What is your math comfort level?</h1>
        <p className='text-gray-400 mb-7 text-[15px]'>Choose the highest level you feel confident in - you can always adjust later.</p>
       </div>
      <div className='flex justify-center flex-wrap items-center  gap-[20px] mt-10'>
        
       <div className='h-[200px] w-[220px] flex  items-center flex-col  shadow-lg rounded-lg border border-gray-300  hover:border-orange-400'>
        <div className='mt-5 h-[95px] w-[200px] bg-[url("/img/arithmatic.jpg")] bg-contain bg-no-repeat bg-center'>

        </div>
        <h2 className='text-[17px] font-normal'>Arithmatic</h2>
        <p className='text-gray-400 font-normal text-[20px]'>
        Introductory
        </p>
       </div>
       <div className='h-[200px] w-[220px] flex  items-center flex-col  shadow-lg rounded-lg border border-gray-300 hover:border-orange-400'>
        <div className='mt-5 h-[95px] w-[200px] bg-[url("/img/algebra.jpg")] bg-contain bg-no-repeat bg-center'>

        </div>
        <h2 className='text-[17px] font-normal'>Basic Algebra</h2>
        <p className='text-gray-400 font-normal text-[20px]'>
        Foundational
        </p>
       </div>
       <div className='h-[200px] w-[220px] flex  items-center flex-col  shadow-lg rounded-lg border border-gray-300 hover:border-orange-400'>
        <div className='mt-5 h-[95px] w-[200px] bg-[url("/img/intermediate.jpg")] bg-contain bg-no-repeat bg-center'>

        </div>
        <h2 className='text-[17px] font-normal'>Intermediate Algebra</h2>
        <p className='text-gray-400 font-normal text-[20px]'>
     Intermediate
        </p>
       </div>
       <div className='h-[200px] w-[220px] flex  items-center flex-col  shadow-lg rounded-lg border border-gray-300 hover:border-orange-400'>
        <div className='mt-5 h-[95px] w-[200px] bg-[url("/img/calculus.jpg")] bg-contain bg-no-repeat bg-center'>

        </div>
        <h2 className='text-[17px] font-normal'>Calculus</h2>
        <p className='text-gray-400 font-normal text-[20px]'>
       Advanced
        </p>
       </div>
      
      </div> 

        </div>
        </div>
    )
}

export default Level

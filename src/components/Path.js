import React from 'react'
import './input.css'
function Path() {
  return (
    <div className='text-center p-4'>
      <h1 className='text-[25px] mt-20 font-bold mb-7 md:text-[37px] md:mt-[146px]'>Learning path based on your answer</h1>
      <p className='text-gray-400 mb-7 text-[17px]'>Choose one to get started. You can switch anytime.</p>

      <div className='flex justify-center flex-wrap items-center  gap-[20px] mt-10'>

      <div className='h-[170px] w-[344px] md:w-[390px] flex  items-center justify-evenly shadow-lg rounded-lg border border-gray-300  p-3'><div>
            <h6 className='absolute mt-[-55px] ml-[95px] md:mt-[-53px] md:ml-[120px] flex justify-center item-center   rounded-3xl bg-yellow-500  w-[120px] text-[12px] font-normal text-center p-[5px] h-[27px]'>MOST POPULAR</h6>
          
<p className='text-gray-600 text-start font-normal text-[14px] md:text-[16px]   pl-5   '>

 <span className='text-black'> Foundational Math</span> Build your foundational skills in algebra, geometry and probability.
</p></div>
<div className=' h-[113px] w-[381px] md:w-[441px] md:h-[123px] bg-[url("/img/math.png")] bg-contain bg-no-repeat bg-right'>

</div>
</div>

        <div className='h-[170px] w-[344px] md:w-[390px] flex  items-center justify-evenly shadow-lg rounded-lg border border-gray-300  p-3'><div>

          
          <p className='text-gray-600 text-start font-normal text-[14px] md:text-[16px]  pt-1  pl-5   '>

           <span className='text-black'> Mathematical Thinking</span> Build your foundational skills in algebra, geometry and probability.
          </p></div>
          <div className=' h-[113px] w-[381px] md:w-[441px] md:h-[123px] bg-[url("/img/math.png")] bg-contain bg-no-repeat bg-right'>

          </div>
        </div>

      </div>

    </div>
  )
}

export default Path

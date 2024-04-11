import React from 'react'
import './input.css'

function Interest() {
    return (
        <div className='text-center '>
          
            <div classNameName='pb-[20px] '>
            <h1 className='text-[30px] mt-7 font-bold mb-7'>Which are you most interested in?</h1>
            <p className='text-gray-400 mb-20'>Choose just one. This help us get youy started(but won't limit your experience).</p>
        </div>
        <div className='flex justify-center items-center gap-[10px] flex-col'>
            <div className='flex justify-start items-center rounded-lg h-[70px] w-[21rem] md:w-[40rem]   border border-gray-400'>
                <div className=' ml-[6px] h-[55px] w-[80px] p-[5px] bg-[url("/img/learning.jpg")] bg-contain bg-no-repeat' >
               
                </div>
                <h2 className='font-light text-[15px] md:text-[text18px]'>Learning specific skills to advance my career</h2>
            </div>
            <div className='flex justify-start items-center rounded-lg h-[70px]  w-[21rem] md:w-[40rem] border border-gray-400'>
                <div className='ml-[6px] h-[55px] w-[80px] p-[5px] bg-[url("/img/exploring.jpg")] bg-contain bg-no-repeat'></div>
                <h2 className='font-light text-[15px] md:text-[18px] mr-1'>Exploring new topics i'm interested in</h2>
               
            </div>
            <div className='flex justify-start items-center rounded-lg h-[70px] w-[21rem] md:w-[40rem] border border-gray-400'>
                <div className='ml-[6px] h-[55px] w-[80px] p-[5px] bg-[url("/img/refreshing.jpg")] bg-contain bg-no-repeat'></div>
                <h2 className='font-light text-[15px] md:text-[18px]'>Refreshing my math foundations</h2>
            </div>
            <div className='flex justify-start items-center rounded-lg h-[70px] w-[21rem] md:w-[40rem] border border-gray-400'>
                <div className='ml-[6px] h-[55px] w-[80px] p-[5px] bg-[url("/img/exercising.jpg")] bg-contain bg-no-repeat' ></div>
                <h2 
               className='font-light text-[15px] md:text-[18px]'>Exercising my brain to stay sharp</h2>
            </div>
            <div className='flex justify-start items-center rounded-lg h-[70px] w-[21rem] md:w-[40rem] border border-gray-400'>
                <div className='ml-[6px] h-[55px] w-[80px] p-[5px] bg-[url("/img/something.jpg")] bg-contain bg-no-repeat' ></div>
                <h2
              className='font-light text-[15px] md:text-[18px]'>Something else</h2>
            </div>
           
        </div>
        </div>
    )
}

export default Interest

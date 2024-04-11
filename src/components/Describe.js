import React from 'react'
import './input.css'
function Describe() {
    return (
        <div className='text-center'>
          
           
            <div classNameName='pb-[20px] '>
            <h1 className='text-[30px] mt-10 font-bold mb-7'>Which describe you best? </h1>
            <p className='text-gray-400 mb-10'>Choose just one. This help us get youy started(but won't limit your experience).</p>
        </div>
        <div className='flex justify-center items-center gap-[10px] flex-col'>
            <div className='flex justify-start items-center rounded-lg h-[70px] w-[21rem] md:w-[40rem]   border border-gray-400'>
                <div className=' ml-[6px] h-[55px] w-[80px] p-[5px] bg-[url("/img/student.jpg")] bg-contain bg-no-repeat' >
               
                </div>
                <h2 className='font-light text-[18px]'>Student <span className='text-gray-400'  >or soon to be enrolled</span></h2>
            </div>
            <div className='flex justify-start items-center rounded-lg h-[70px]  w-[21rem] md:w-[40rem] border border-gray-400'>
                <div className='ml-[6px] h-[55px] w-[80px] p-[5px] bg-[url("/img/professional.jpg")] bg-contain bg-no-repeat'></div>
                <h2 className='font-light text-[18px]'>Professional <span className='text-gray-400'  >pursuing acareer</span></h2>
               
            </div>
            <div className='flex justify-start items-center rounded-lg h-[70px] w-[21rem] md:w-[40rem] border border-gray-400'>
                <div className='ml-[6px] h-[55px] w-[80px] p-[5px] bg-[url("/img/parents.jpg")] bg-contain bg-no-repeat'></div>
                <h2 className='font-light text-[18px]'>Parent <span className='text-gray-400'  >of a school-age child</span></h2>
            </div>
            <div className='flex justify-start items-center rounded-lg h-[70px] w-[21rem] md:w-[40rem] border border-gray-400'>
                <div className='ml-[6px] h-[55px] w-[80px] p-[5px] bg-[url("/img/lifelong.jpg")] bg-contain bg-no-repeat' ></div>
                <h2 
               className='font-light text-[18px]'>Lifelong learner</h2>
            </div>
            <div className='flex justify-start items-center rounded-lg h-[70px] w-[21rem] md:w-[40rem] border border-gray-400'>
                <div className='ml-[6px] h-[55px] w-[80px] p-[5px] bg-[url("/img/teacher.jpg")] bg-contain bg-no-repeat' ></div>
                <h2
              className='font-light text-[18px]'>Teacher</h2>
            </div>
            <div className='flex justify-start items-center rounded-lg h-[70px] w-[21rem] md:w-[40rem] border border-gray-400'>
                <div className='ml-[6px] h-[55px] w-[80px] p-[5px] bg-[url("/img/others.jpg")] bg-contain bg-no-repeat'></div>
                <h2
                className='font-light text-[18px]'>Others</h2>
            </div>
        </div>
        </div>
    )
}

export default Describe

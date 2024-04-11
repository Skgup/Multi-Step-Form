import React from 'react'
import './input.css'
function Place() {
    return (
        <div className='text-center' >
        <div className='p-[4rem] flex items-center flex-col justify-evenly md:flex-row'>
            <div className='h-[205px] w-[151px] bg-[url("/img/place.jpg")] bg-cover md:h-[418px] md:w-[266px]'>

            </div>
            <div>
                <h1 className='text-start text-[25px] mt-20 font-bold mb-7 md:text-[30px]'>You're in the right place</h1>
                <p className=' text-start w-[314px] text-[14px] break-words-[5px] md:w-[500px]'>Brilliant gets you hands-on to help improve your professional skills and knowledge. You'll interact with concept and solve fun problems in math, science and computer science.</p>
            </div>
        </div>

        </div>
    )
}

export default Place

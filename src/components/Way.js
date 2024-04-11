import React from 'react'
import './input.css'

function Way() {
    return (
        <div className='text-center' >
        <div className='p-[4rem] flex items-center flex-col justify-evenly md:flex-row'>
            <div className='h-[205px] w-[187px] bg-[url("/img/way.jpg")] bg-cover md:h-[400px] md:w-[300px]'>

            </div>
            <div>
                <h1 className='text-start text-[25px] mt-20 font-bold mb-7 md:text-[30px]'>You're on your way</h1>
                <h2 className='text-start text-[25px] font-bold mb-4 md:text-[30px]'>⭐⭐⭐⭐⭐</h2>
                <p className='italic  text-start w-[314px] text-[14px] break-words-[5px] md:w-[500px]'>"Through its engaging andwell-structured courses,Brilliant has taught me mathematical concepts that i previously struggled to understand. I nowfeel confident approaching both technical job interviews and real world problem solving."</p>
                <h6 className='italic text-gray-600 text-start text-[15px]'>- Jacob S.</h6>
            </div>
        </div>

        </div> 
    )
}

export default Way

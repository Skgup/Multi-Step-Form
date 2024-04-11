import React from 'react'
import './input.css'
import { useState, useEffect } from 'react'
import Path from './Path';
import ClipLoader from "react-spinners/ClipLoader";
function Finding() {

    const Show = () =>{
        const [showElement,setShowElement] =useState(true)
        useEffect(function(){
          setTimeout(()=> {
            setShowElement(false)
               }, 3000);
             },
         [])}
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)

        },3000)
    }, []);

   
    return (
        <div classname='text-center h-[100vh] mt-[200px] md:mt-[350px]'>
            {loading? <div className='w-[350px] md:w-[725px] m-auto'> 
            <ClipLoader className='mt-[200px] md:mt-[350px] h-[20px] border-8 border-orange-600' style={{width: "50px",
  height:" 50px",
  borderRadius:" 100%",
  borderWidth: "8px",
  borderStyle: "solid",
  borderColor: "orange orange transparent",
  borderImage: "none",
  display:" inline-block",
  animation: "0.75s linear 0s infinite normal both running react-spinners-ClipLoader-clip"}}
                size={50}color='orange'
                
                data-testid="loader"
               
            /><h1 className='text-[17px] md:text-[25px] font-bold text-center flex justify-center '>Finding learning path recommendations for you based on your responses</h1></div> :<Path/>
            }
           
          
        </div>
    )
}
export default Finding

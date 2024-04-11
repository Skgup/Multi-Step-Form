import React, {useState} from 'react'
import './input.css';
import Interest from "./Interest";
import Way from "./Way";
import Place from "./Place"
import Describe from './Describe';
import Level from './Level';
import Finding from './Finding';
function Form() {

    const [page, setPage] = useState(0)
const form =["1","2","3", "4", "5" ,"6"];
const PageDisplay=()=>{
    if(page===0){
        return <Describe/>;
    }else if(page===1){
        return <Interest/>
    }
    else if(page===2){
        return <Place/>
    }
    else if(page===3){
        return <Level/>
    }
    else if(page===4){
        return <Way/>
    }
    else{
    
        return <Finding/>
        
        
    }
}
    return (
        <div className='text-center'>
          <button disabled={page===0} hidden={page===0 ||page=== form.length-1} onClick={()=> {setPage((currPage)=>currPage - 1)}}   className='absolute left-3 md:left-[250px] mt-[-1.2rem]  text-[25px]'>&lt;</button>
          <div hidden={page=== form.length-1} className='mt-10  h-[4px] rounded-sm w-[305px] md:w-[1000px] items-center justify-center m-auto bg-gray-300 '
         >
            <div className='
            w-[20%] h-[100%] '  
            style={{
                width:
                  page === 0
                    ? "20%"
                    : page === 1
                    ? "40%"
                    : page === 2
                    ? "60%"
                    :page === 3
                    ? "80%"
                    :
                    "100%",
                backgroundColor: page === 4 ? "green" : "green",
              }}>

            </div>
          </div>
            
    <div>{PageDisplay()}</div>
        <button disabled={page===form.length-1} hidden={page===form.length-1}  onClick={()=> {setPage((currPage)=>currPage+ 1)}
    } className='text-xl mt-[20px] py-[.6rem] md:py-[.7rem] px-[2rem] md:px-[3rem] bg-black rounded-md text-white mb-[70px]' >Continue</button>
        </div>
    )
}

export default Form

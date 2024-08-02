import React from 'react'
import pic from "../../assets/avataaars.svg"
import style from './home.module.css'
export default function Home() {

  return <>
   
      
  
    
    <div  className=' div bg-[#1ABC9C] h-[100vh] w-full mt-10 '>
    <div className=' flex justify-center items-center  '>


    <img className='w-[200px] mt-7' src={pic} alt="" />

    </div>
    <h2 className='font-bold text-2xl mt-2 text-white'>start Framework</h2>
    <div className='flex justify-center my-4'>
 <div className=' border-b-4 border-white w-[100px] '></div>
 <i class="fa-solid fa-star mx-3 text-white " ></i> 
 <div className='border-b-4 border-white w-[100px] '></div>
 
 </div>
 <p className="font-medium text-white">Graphic Artist - Web Designer - Illustrator</p>
 </div>
 
    </>
  
}

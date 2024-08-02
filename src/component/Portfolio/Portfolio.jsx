import React, { useEffect, useState } from 'react'
import $ from 'jquery'
import pic1 from '../../assets/poert1.png'
import pic2 from '../../assets/port2.png'
import pic3 from '../../assets/port3.png'



export default function Portfolio() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentPic, setCurrentPic] = useState('');
    const openModal = (src) => {
        setCurrentPic(src);
        setIsModalOpen(true);
      };
      const closeModal = () => {
        setIsModalOpen(false);
      };
  return (
  <>
  {isModalOpen && (
  <div  onClick={closeModal} className= 'maindiv flex   bg-slate-500 bg-opacity-50 fixed top-0 start-0 end-0 bottom-0 z-30   justify-center items-center'>
    <img src={currentPic} className='bigpic bg-red-500 w-[40%] h-[300px]'/>
    {/* <button onClick={closeModal} className='mt-4 px-4 py-2 bg-red-500 text-white rounded-full'>
              X
            </button> */}
  </div>)}

  <h1 className='font-bold text-[40px] mt-10'>portfolio component</h1>
  <div className='flex justify-center'>
 <div className=' border-b-4 border-slate-600 w-[100px] '></div>
 <i className="fa-solid fa-star mx-3 text-slate-600" ></i> 
 <div className='border-b-4 border-slate-600 w-[100px] '></div>
 </div>

 <div className="row mt-10 gap-10 flex justify-center flex-wrap container mx-auto ">

    
<div className=' size-[300px]   rounded group  relative overflow-hidden  '>
        <img    src={pic1} alt="" className='imgs size-[100%]   '/>
       
        <div onClick={() => openModal(pic1)}  className='plus bg-green-500 bg-opacity-50 w-[100%] h-[100%]  absolute  top-[100%] group-hover:top-[0] group-hover:h-[100%] flex justify-center items-center text-[70px] text-white'><i className="fa-solid fa-plus"></i></div>
   </div>

    <div className='size-[300px]   rounded group  relative overflow-hidden  '>
        <img    src={pic2} alt="" className='imgs size-[100%]   '/>
        <div onClick={() => openModal(pic2)}  className='bg-green-500 bg-opacity-50 w-[100%] h-[100%]  absolute  top-[100%] group-hover:top-[0] group-hover:h-[100%] flex justify-center items-center text-[70px] text-white'><i className="fa-solid fa-plus"></i></div>
    </div>
    <div className='size-[300px]   rounded group  relative overflow-hidden  '>
        <img  src={pic3} alt="" className='imgs size-[100%]   '/>
        <div onClick={()=>(openModal(pic3))} className='bg-green-500 bg-opacity-50 w-[100%] h-[100%]  absolute  top-[100%] group-hover:top-[0] group-hover:h-[100%] flex justify-center items-center text-[70px] text-white'><i className="fa-solid fa-plus"></i></div>
    </div>
    <div className='size-[300px]   rounded group  relative overflow-hidden  '>
        <img  src={pic1} alt="" className='imgs size-[100%]   '/>
        <div onClick={()=>(openModal(pic1))} className='bg-green-500 bg-opacity-50 w-[100%] h-[100%]  absolute  top-[100%] group-hover:top-[0] group-hover:h-[100%] flex justify-center items-center text-[70px] text-white'><i className="fa-solid fa-plus"></i></div>
    </div>
    <div className='size-[300px]   rounded group  relative overflow-hidden  '>
        <img  src={pic3} alt="" className='imgs size-[100%]   '/>
        <div onClick={()=>(openModal(pic3))} className='bg-green-500 bg-opacity-50 w-[100%] h-[100%]  absolute  top-[100%] group-hover:top-[0] group-hover:h-[100%] flex justify-center items-center text-[70px] text-white'><i className="fa-solid fa-plus"></i></div>
    </div>
    <div className='size-[300px]   rounded group  relative overflow-hidden  '>
        <img  src={pic2} alt="" className='imgs size-[100%]   '/>
        <div onClick={()=>(openModal(pic2))} className='bg-green-500 bg-opacity-50 w-[100%] h-[100%]  absolute  top-[100%] group-hover:top-[0] group-hover:h-[100%] flex justify-center items-center text-[70px] text-white'><i className="fa-solid fa-plus"></i></div>
    </div>
    
    
    


    
 </div>


  
  </>
  )
}

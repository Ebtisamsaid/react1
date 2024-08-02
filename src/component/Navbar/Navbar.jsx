import React from 'react';
import { NavLink,Link } from "react-router-dom"

export default function Navbar() {
  return <>
  
 
    <div className='bg-slate-600 fixed z-10 top-0 right-0 left-0 flex justify-around h-[50px] p-2 ' >
        <div className='text-yellow-600 font-bold'>START FRAMWORK</div>
   <div>
   <ul>
      <li className=' text-yellow-500'>
      <NavLink to="about"> About</NavLink>
      <NavLink to="portfolio" className='mx-2'>  portfolio</NavLink>
      <NavLink to="contact"> contact us</NavLink>
      </li>
    </ul>
   </div>
    </div>

    </>
  
}

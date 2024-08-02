import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='bg-slate-600 fixed z-10 bottom-0 right-0 left-0  p-[2px] flex pt-4 justify-around'>
<div className='w-1/4  text-white font-bold'>
  <h1>Location</h1>
  <p>2215 John Daniel Drive</p>
  <p>Clark, MO 65243</p>
</div>

<div className=' footer w-1/4 '>
  <h1 className='text-white font-bold'>AROUND THE WEB</h1>
<ul className='flex justify-center mt-4'>
  <li className='flex justify-center items-center'> 
  <Link to='facebook' className='flex justify-center items-center text-center border rounded-full w-10 h-10 '><i class="fa-brands fa-facebook  text-xl"></i></Link></li>
<li>  <Link to='twitter' className='flex justify-center items-center text-center border rounded-full w-10 h-10 mx-2'><i class="fa-brands fa-twitter  text-xl"></i></Link></li>
<li>  <Link to='linkedin' className='flex justify-center items-center text-center border rounded-full w-10 h-10  mx-2'><i class="fa-brands fa-linkedin text-xl "></i></Link></li>
  <li><Link to='google' className='flex justify-center items-center text-center border rounded-full w-10 h-10  mx-2'><i class="fa-solid fa-globe text-xl"></i></Link>
  </li></ul>
</div>

<div className='w-1/4 text-white '>
<h1 className='font-bold'>ABOUT FREELANCER</h1>
<p className='mt-3'>Freelance is a free to use, licensed Bootstrap theme</p>
<p>created by Route</p>

</div>


    </div>
  )
}

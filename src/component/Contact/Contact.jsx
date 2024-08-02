import React from 'react'

export default function Contact() {
  return <>

<h1 className='font-bold text-[40px] mt-10'>conatct section</h1>
  <div className='flex justify-center'>
 <div className=' border-b-4 border-slate-600 w-[100px] '></div>
 <i className="fa-solid fa-star mx-3 text-slate-600" ></i> 
 <div className='border-b-4 border-slate-600 w-[100px] '></div>
 </div>
    <div className=' m-auto mt-10'>


              <div className="mt-2">
                <input
                placeholder='first name '
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                  className="block w-[50%] m-auto rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>


              
              <div className="mt-2">
                <input
                placeholder='your Age '
                  id="age"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                  className=" mt-6 block w-[50%] m-auto rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>


               
              <div className="mt-2">
                <input
                placeholder='your Email'
                  id="email"
                  name="first-name"
                  type="email"
                  autoComplete="given-name"
                  className=" mt-6 block w-[50%] m-auto rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>


               
              <div className="mt-2">
                <input
                placeholder='your password '
                  id="age"
                  name="first-name"
                  type="password"
                  autoComplete="given-name"
                  className=" mt-6 block w-[50%] m-auto rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

              <button className='text-white bg-cyan-600 w-56 rounded-xl mt-3 p-3 font-extrabold'>Send</button>



    </div>
  </>}
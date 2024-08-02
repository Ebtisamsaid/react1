import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './component/Layout/Layout.jsx';
import Navbar from './component/Navbar/Navbar.jsx'
import About from './component/About/About.jsx'
import Portfolio from './component/Portfolio/Portfolio.jsx'
import Contact from './component/Contact/Contact.jsx'
import Home from './component/Home/Home.jsx'


 let x=createBrowserRouter([
  {
    path:'',element:<Layout/>,children:[
      {index:true,element:<Home/>},
      
      {
      path:'about',element:<About/>

    },
  {path:'portfolio',element:<Portfolio/>},
{path:'contact',element:<Contact/>}]  }
])


function App() {
  return (
    <>
   
       <RouterProvider router={x}></RouterProvider>
     
    </>
  )
}

export default App

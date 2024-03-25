import React, { useState } from 'react'
import { AiOutlineClose,AiOutlineMenu } from "react-icons/ai";
import About from './MultiPages/About';
import Grants from './MultiPages/Grants';
import Teachers from './MultiPages/Teachers';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

export default function NavbarThird() {
  const [On, SetOn] = useState(false);

  const handleNavs = () => {
    SetOn(!On)
  }
  const [nav, setNav] = useState(true);


  const handleNav = () => {
      setNav(!nav)
  }

  return (
    <Router>
      <div className='lg:block hidden max-w-full lg:max-w-[100%] h-16  mx-auto py-2 bg-blue-900' >
          <div className='mx-auto max-w-full lg:max-w-[600px] h-full flex justify-between col-span-2 items-center text-white'>
          <div onClick={handleNav} className='block bg-black md:hidden cursor-pointer'>
              {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} /> }
          </div>
           
              <Link to='/'  className='text-white font-bold uppercase text-sm hover:border-b transition '>Bosh sahifa</Link>
              <Link  onClick={handleNavs} type="button" className="inline-flex text-white font-bold uppercase text-sm/2  lg:text-sm hover:border-b  justify-center bg-transparent px-3 ring-inset" id="menu-button" aria-expanded="true" aria-haspopup="true">
                  Maktab haqida
                  <svg className="-mr-1 h-5 w-5  text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                  </svg>
              </Link>
              <Link to='/about'  className='text-white font-bold uppercase flex text-sm lg:text-sm  hover:border-b '>Oqituvchi</Link>
              <Link to='/contact'  className='text-white font-bold uppercase flex text-sm lg:text-sm  hover:border-b'>Yutuqlar</Link>
            
          </div>

          <Routes>
            <Route path="/" element={<Teachers />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Grants />} />
          </Routes>





        {On &&( 
          <div className="absolute lg:top-[21%] lg:left-[43%] top-[23%] left-[25%]  mx-auto transition-opacity animate ease-in-out  z-10 mt-2 w-44 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none " role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
              <div className="py-1" role="none">

                <a href="#" className="text-gray-700 block px-4 py-2 text-sm border-b uppercase hover:scale-101 hover:bg-blue-400" role="menuitem" tabIndex="-1" id="menu-item-0">About</a>
                <a href="#" className="text-gray-700 block px-4 py-2 text-sm border-b  uppercase hover:scale-101 hover:bg-blue-400" role="menuitem" tabIndex="-1" id="menu-item-1">Teachers</a>
                <a href="#" className="text-gray-700 block px-4 py-2 text-sm uppercase hover:scale-101 hover:bg-blue-400" role="menuitem" tabIndex="-1" id="menu-item-2">Grants</a>
              </div>  
            </div>
          )} 
      </div>
    </Router>
  )
}

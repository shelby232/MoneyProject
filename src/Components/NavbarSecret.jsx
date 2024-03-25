import React, { useState } from 'react'
import { AiOutlineClose,AiOutlineMenu } from "react-icons/ai";


export default function NavbarSecret() {
    const [nav, setNav] = useState(false);
    const [hid, setHid] = useState(true);

    const Show = () => {
        setHid(!hid)
    }
    const handleNav = () => {
        setNav(!nav)
    }

    function AllOne(){
        Show()
        handleNav()
    }
  return (
    <div className='lg:hidden block max-w-full lg:max-w-[100%] h-10  mx-auto py-2 bg-blue-900' >
         <div onClick={AllOne} className=' lg:hidden mx-auto justify-center items-center cursor-pointer absolute right-0 mr-5'>
            {!nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25} /> }
        </div>
        <div  className='absolute top-0 left-0 right-0 mt-[120px] z-20 w-[70%] justify-center text-center items-center h-8 bg-blue-900 mx-auto'>
            {hid && (
                  <div className='mx-auto justify-center items-center flex mt-1 md:mt-3 '>
                  <button className='text-white font-bold text-sm/4 w-full  flex'>Bosh sahifa</button>
                  <button className='text-white font-bold text-sm/4 w-full flex mr-3'>Maktab haqida</button>
                  <button className='text-white font-bold text-sm/4 w-full flex mr-3'>Yangiliklar</button>
                  <button className='text-white font-bold text-sm/4 w-full flex mr-3'>Bog`lanish</button>
              </div>
            )}
          
        </div>
        
    </div>

  )
}

import React from 'react';
import { MdOutlineSms } from "react-icons/md";
import { 
  CiYoutube,
  CiInstagram,
  CiTwitter

} from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";

export default function NavbarFirst() {
  return (
    <div className='hidden lg:block max-w-full lg:max-w-[100%]  mx-auto py-1 lg:py-2 bg-blue-900' >
        <div className='mx-auto max-w-full lg:max-w-[1024px] h-full flex justify-between col-span-2 items-center text-white md:flex'>
          <div className='flex items-center '>
            <MdOutlineSms size={15} className='flex  lg:mr-1 '/>
            <p className='mr-4 lg:mr-4 text-sm/4 lg:text-2sm'>dasturchi@gmail.com</p>

            <FaPhoneAlt size={15} className=' mr-1'/>
            <p className='mr-4 lg:mr-4 text-sm/4 lg:text-2sm'>+998990001122</p>
          </div>


            <div className=' items-end flex mr-2 gap-1 lg:gap-2'>
                <CiYoutube size={19} className=''/>
                <CiInstagram size={19}  />
                <CiTwitter size={19}   />
            </div>
        </div>
       
    </div>
  )
}

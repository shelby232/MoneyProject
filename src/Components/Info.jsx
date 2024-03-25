import React from 'react'
import { HiOutlineUsers } from "react-icons/hi";

export default function Info() {
  return (
        <div className='max-w-[100%] h-96  mx-auto bg-white flex ' >
            <div className='mx-auto  items-center text-white grid col-span-2'>
              <div className='mx-auto mt-10 2 items-center text-white'>
                <p className=' text-blue-900 font-bold text-2sm lg:text-4xl'> Asosiy ko‘rsatkichlar</p>
                <div className='h-[3px] w-full lg:w-[800px] md:w-auto bg-blue-900 block mb-3'></div>
              </div>
              <div className='text-black'>
                
                <div className='grid grid-cols-2 lg:flex justify-center mx-auto gap-2 space-x-0 lg:space-x-4 text-blue-900 '>
                   <div className='text-blue-900 border p-3 lg:p-11 w-auto  mx-auto text-center items-center justify-center' >
                    <HiOutlineUsers className='mx-auto' size={50}/>
                    <p className=' text-2sm lg:text-3xl font-bold '>677</p>
                    <p className='text-center text-2sm lg:text-md'>O`quvchilar soni</p>
                   </div>
                   <div className='text-blue-900 border p-3 lg:p-11  mx-auto text-center items-center justify-center' >
                    <HiOutlineUsers className='mx-auto'  size={50}/>
                    <p className=' text-2sm lg:text-3xl font-bold'>677</p>
                    <p className='text-center text-2sm lg:text-md'>O`quvchilar soni</p>
                   </div>
                   <div className='text-blue-900 border p-3 lg:p-11 mx-auto text-center items-center justify-center' >
                    <HiOutlineUsers className='mx-auto'  size={50}/>
                    <p className=' text-2sm lg:text-3xl font-bold'>677</p>
                    <p className='text-center text-2sm lg:text-md'>O`quvchilar soni</p>
                   </div>
                   <div className='text-blue-900 border p-3 lg:p-11 mx-auto text-center items-center justify-center' >
                    <HiOutlineUsers className='mx-auto'  size={50}/>
                    <p className=' text-2sm lg:text-3xl font-bold'>677</p>
                    <p className='text-center text-2sm lg:text-md'>O`quvchilar soni</p>
                   </div>
                </div>
              </div>

            </div>
        </div>
  )
}

import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,    
} from 'react-icons/fa'

export default function Footer() {
  return (
    <div className='max-w-[1240px] mx-auto py-4 mt-24 px-4 grid lg:grid-cols-3 gap-8 bg-black  text-white'>
        <div>
            <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, reiciendis.</p>
            <div className='flex justify-between md:w-[75%] my-6'>
                <FaFacebookSquare className='' size={30}/>
                <FaDribbbleSquare className='' size={30}/>
                <FaGithubSquare className='' size={30}/>
                <FaInstagram className='' size={30}/>
                <FaTwitterSquare className='' size={30}/>
            </div>
        </div>
        <div className='md:col-span-3 flex justify-between'>
            <div>
                <h6 className=' font-medium text-gray-600'>Solutions</h6>
                <ul>
                    <li className='py-2 text-sm'>Hey</li>
                    <li className='py-2 text-sm'>Conatcs</li>
                    <li className='py-2 text-sm'>Answers</li>
                    <li className='py-2 text-sm'>Google</li>
                </ul>
            </div>
            <div>
                <h6 className=' font-medium text-gray-600'>Company</h6>
                <ul>
                    <li className='py-2 text-sm'>Hey</li>
                    <li className='py-2 text-sm'>Conatcs</li>
                    <li className='py-2 text-sm'>Answers</li>
                    <li className='py-2 text-sm'>Google</li>
                </ul>
            </div>
            <div>
                <h6 className=' font-medium text-gray-600'>Block</h6>
                <ul>
                    <li className='py-2 text-sm'>Hey</li>
                    <li className='py-2 text-sm'>Conatcs</li>
                    <li className='py-2 text-sm'>Answers</li>
                    <li className='py-2 text-sm'>Google</li>
                </ul>
            </div>
            <div>
                <h6 className=' font-medium text-gray-600'>Jobs</h6>
                <ul>
                    <li className='py-2 text-sm'>Hey</li>
                    <li className='py-2 text-sm'>Conatcs</li>
                    <li className='py-2 text-sm'>Answers</li>
                    <li className='py-2 text-sm'>Google</li>
                </ul>
            </div>
            
        </div>
        
        
    </div>
  )
}

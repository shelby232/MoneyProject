import React from 'react'
import Gerb from '../assets/gerb.png'
import School from '../assets/school.png'
import Bayro from '../assets/bayro.png'


export default function NavbarSecond() {
  return (
    <div>
            <div className='maw-w-full lg:max-w-[100%]  mx-auto py-2 bg-white border h-[120px]' >
                <div className='mx-auto max-w-full lg:max-w-[1040px] h-full flex md:col-span-2 items-center text-white'>
                    <div className='flex items-center p-4'>
                        <img src={Gerb} alt=""  className='w-[50px] lg:w-[80px]'/>
                        <img src={Bayro} alt="" className='h-[50px] lg:h-[80px] w-3 lg:w-1 ml-5'  />
                        <p className='text-black ml-4 lg:ml-5 font-bold text-sm/3 lg:text-2xl font-sans '>
                            Jizzax viloyati Zomin tuman 
                            2-son kasb-hunar maktabi    
                        </p>
                        
                    </div>
                    <div className='flex items-center h-10 lg:h-20 p-4'>
                        <h6 className='text-black ml-5 text-sm/3 lg:text-xl font-sans justify-end'>
                        Jizzax viloyati, Zomin tumani, Dashtobod shaxri,  O‘zbekiston MFY, Qora-tepa ko‘cha 8 uy
                        </h6>
                        <img src={School} alt="" className='h-[50px] lg:h-[80px] ml-4'/>                   
                    </div>
                   
                </div>

            </div>
    </div>
  )
}

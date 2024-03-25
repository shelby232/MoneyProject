import React, { useState } from 'react'
import Odam from '../assets/odam.png'

export default function News() {
  const [yozuv, setYozuv] = useState('Koproq');
  const [showMore, setShowMore] = useState(false);
  const [holat, setHolat] = useState(true)

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  const ChangeText = () => {
    setHolat(false)
    if(holat == true){
      setYozuv('Yashirish');
    }else{
      setYozuv('Koproq');
      setHolat(true)
    }
  
    
  }
  const Double = () =>{
    toggleShowMore()
    ChangeText()

  }

  return (
    <div className='max-w-full lg:max-w-[100%] py-2  bg-transparent m-5'>
        <div className='mx-auto max-w-full lg:max-w-[1040px] mt-10 h-full md:col-span-2 items-center text-white'>
          <p className=' text-blue-900  font-bold text-3xl font-sans'>Yangiliklar</p><br /> 
          <div className='h-[3px] w-full bg-blue-900 block mb-3'></div>
        </div>
        <div className='grid grid-cols-2 lg:grid-cols-3 max-w-full lg:max-w-[1040px] gap-2 lg:gap-4 mx-auto bg-transparent h-auto lg:h-auto mb-5'>
          <div className='mx-auto h-[330px] lg:h-[500px] bg-white rounded-sm lg:hover:bg-slate-300 lg:hover:scale-105  transition-all ease-in-out duration-200' >
            <img src={Odam} alt=""  className='w-48 h-30 lg:w-96 lg:h-60 rounded-md mx-auto'/>
            <a href="#" className='m-4 text-sm leading-3 text-center text-blue-900 font-bold flex'>
                «Assalom, Navro’z-yangilanish, mehr-oqibat va qadr-qimmat ayyomi!» shiori ostida Navro’z sayli o’tkazildi.
            </a>
            <p className=' p-5 mt-8 lg:mt-36'>18.02.2022</p>
          </div>
          <div className='mx-auto h-[330px] lg:h-[500px] bg-white rounded-sm lg:hover:bg-slate-300 lg:hover:scale-105  transition-all ease-in-out duration-200' >
            <img src={Odam} alt=""  className=' w-48 h-30 lg:w-96 lg:h-60 rounded-md mx-auto'/>
            <a href="#" className='m-4 text-sm leading-3 text-center text-blue-900 font-bold flex' >
                «Assalom, Navro’z-yangilanish, mehr-oqibat va qadr-qimmat ayyomi!» shiori ostida Navro’z sayli o’tkazildi.
            </a>
            <p className='  p-5 mt-8 lg:mt-36'>18.02.2022</p>
          </div>
          <div className='mx-auto hidden lg:grid h-[330px] lg:h-[500px]  bg-white rounded-sm lg:hover:bg-slate-300 lg:hover:scale-105 transition-all ease-in-out duration-200' >
            <img src={Odam} alt=""  className=' w-48 h-30 lg:w-96 lg:h-60 rounded-md mx-auto' />
            <a href="#" className='m-4 text-sm leading-3 text-center text-blue-900 font-bold flex'>
                «Assalom, Navro’z-yangilanish, mehr-oqibat va qadr-qimmat ayyomi!» shiori ostida Navro’z sayli o’tkazildi.
            </a>
            <p className='  p-5 mt-8 lg:mt-36'>18.02.2022</p>
          </div>
        </div>
        {holat &&(<button onClick={Double} className='bg-blue-900 w-[200px] text-xl rounded-md mb-5 py-2 text-white font-bold hover:scale-105 duration-150 block mx-auto'>{yozuv}</button>
)}
        

        {showMore && (
            <div className='grid grid-cols-2 lg:grid-cols-3 max-w-full lg:max-w-[1040px] gap-2 lg:gap-4 mx-auto bg-transparent h-auto lg:h-auto '>
             <div className='mx-auto h-[330px] lg:h-[500px] bg-white rounded-sm hover:scale-105 lg:hover:bg-slate-300 lg:hover:scale-105 transition-all ease-in-out duration-200' >
               <img src={Odam} alt=""  className='w-48 h-30 lg:w-96 lg:h-60 rounded-md mx-auto'/>
               <a href="#" className='m-4 text-sm leading-3 text-center text-blue-900 font-bold flex'>
                   «Assalom, Navro’z-yangilanish, mehr-oqibat va qadr-qimmat ayyomi!» shiori ostida Navro’z sayli o’tkazildi.
               </a>
               <p className=' p-5 mt-8 lg:mt-36'>18.02.2022</p>
             </div>
             <div className='mx-auto h-[330px] lg:h-[500px] bg-white rounded-sm lg:hover:bg-slate-300 lg:hover:scale-105 transition-all ease-in-out duration-200' >
               <img src={Odam} alt=""  className=' w-48 h-30 lg:w-96 lg:h-60 rounded-md mx-auto'/>
               <a href="#" className='m-4 text-sm leading-3 text-center text-blue-900 font-bold flex' >
                   «Assalom, Navro’z-yangilanish, mehr-oqibat va qadr-qimmat ayyomi!» shiori ostida Navro’z sayli o’tkazildi.
               </a>
               <p className='  p-5 mt-8 lg:mt-36'>18.02.2022</p>
             </div>
             <div className='mx-auto h-[330px] lg:h-[500px] bg-white rounded-sm lg:hover:bg-slate-300 lg:hover:scale-105 transition-all ease-in-out duration-200' >
               <img src={Odam} alt=""  className=' w-48 h-30 lg:w-96 lg:h-60 rounded-md mx-auto'/>
               <a href="#" className='m-4 text-sm leading-3 text-center text-blue-900 font-bold flex' >
                   «Assalom, Navro’z-yangilanish, mehr-oqibat va qadr-qimmat ayyomi!» shiori ostida Navro’z sayli o’tkazildi.
               </a>
               <p className='  p-5 mt-8 lg:mt-36'>18.02.2022</p>
             </div>
             <div className='mx-auto h-[330px] lg:h-[500px] bg-white rounded-sm lg:hover:bg-slate-300 lg:hover:scale-105 transition-all ease-in-out duration-200' >
               <img src={Odam} alt=""  className=' w-48 h-30 lg:w-96 lg:h-60 rounded-md mx-auto'/>
               <a href="#" className='m-4 text-sm leading-3 text-center text-blue-900 font-bold flex' >
                   «Assalom, Navro’z-yangilanish, mehr-oqibat va qadr-qimmat ayyomi!» shiori ostida Navro’z sayli o’tkazildi.
               </a>
               <p className='  p-5 mt-8 lg:mt-36'>18.02.2022</p>
             </div>

      
           </div>
            
            
           )}
          
          {!holat &&
            (
              <div className='mx-auto mt-4'>
              <button onClick={Double} className='bg-blue-900 w-[200px] text-xl rounded-md mb-5 py-2 text-white font-bold hover:scale-105 duration-150 block mt-5 mx-auto'>{yozuv}</button>
              </div>
            )
           }
        
    </div>
  )
}

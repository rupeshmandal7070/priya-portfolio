import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { MdPersonOutline } from "react-icons/md";
import { MdWork } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";

const Footer = () => {
  const handleScroll = (id) => {
    console.log(id,'id')
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className=''>

        <div className='bg-[#1c1c65] h-[300px] w-full flex justify-center relative z-0'>
          <div className='w-full flex justify-center flex-col items-center '>
            <div className='flex gap-[80px]'>
                <div onClick={()=>handleScroll('home')} className='flex items-center gap-3 cursor-pointer'>
               <IoHomeOutline className='text-white'/>
               <div className='text-white'>Home</div>
                </div>

                <div onClick={()=>handleScroll('about')} className='flex items-center gap-4 cursor-pointer'>
               <MdPersonOutline className='text-white'/>
               <div className='text-white'>About</div>
                </div>

                <div onClick={()=>handleScroll('work')} className='flex items-center gap-4 cursor-pointer'>
               <MdWork className='text-white'/>
               <div className='text-white'>Work</div>
                </div>

                <div onClick={()=>handleScroll('contact')} className='flex items-center gap-4 cursor-pointer'>
               <IoMdCall className='text-white'/>
               <div className='text-white'>Contact</div>
                </div>
            </div>

            <div className='flex items-center gap-5 mt-[50px]'>
                <div>
                    <img src='/Instagram.png' className='h-[45px]'/>
                </div>

                <div>
                  <a href='https://www.linkedin.com/in/priyabora08/'>
                    <img src='/Linkedin.png'/>
                  </a>
                </div>

                <div>
                    <img src='/YouTube.png' className='h-[45px]'/>
                </div>
                </div>
          </div>

          <div className='absolute top-[-200px] left-0'>
            <img src='/test.svg' />
            
          </div>

          <div className='absolute top-[-100px] right-0'>
             <img src='/footer3.svg' />
          </div>
        </div>
      
    </div>
  )
}

export default Footer

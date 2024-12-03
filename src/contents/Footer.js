import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { MdPersonOutline } from "react-icons/md";
import { MdWork } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <div className=''>

        <div className='bg-[#1c1c65] h-[300px] w-full flex justify-center'>
          <div className='w-full flex justify-center flex-col items-center '>
            <div className='flex gap-[80px]'>
                <div className='flex items-center gap-3'>
               <IoHomeOutline className='text-white'/>
               <div className='text-white'>Home</div>
                </div>

                <div className='flex items-center gap-4'>
               <MdPersonOutline className='text-white'/>
               <div className='text-white'>About</div>
                </div>

                <div className='flex items-center gap-4'>
               <MdWork className='text-white'/>
               <div className='text-white'>Work</div>
                </div>

                <div className='flex items-center gap-4'>
               <IoMdCall className='text-white'/>
               <div className='text-white'>Contact</div>
                </div>
            </div>

            <div className='flex items-center gap-5 mt-[50px]'>
                <div>
                    <img src='/Instagram.png' className='h-[45px]'/>
                </div>

                <div>
                    <img src='/Linkedin.png'/>
                </div>

                <div>
                    <img src='/YouTube.png' className='h-[45px]'/>
                </div>
                </div>
          </div>
        </div>
      
    </div>
  )
}

export default Footer

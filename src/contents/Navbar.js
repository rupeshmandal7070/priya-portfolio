import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { MdPersonOutline } from "react-icons/md";
import { MdWork } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";

const Navbar = () => {
  return (

    <div className='bg-[#0f103f] h-screen'>
    <div className='bg-[#0f103f] w-full flex justify-center items-center gap-[100px] py-10'>
      <div className='text-white'>Home</div>
      <div className='text-white'>About Me</div>
      <div className='text-white h-12 w-12 border-[3px] rounded-[40px] border-[#AB71C6] flex justify-center items-center'>
        <img src='/logo.png' className='ml-1 mt-1'/>
      </div>
      <div className='text-white'>Work</div>
      <div className='text-white'>Contact</div>
    </div>


   <div className='w-[100%] flex justify-center mt-[180px] pb-[50px]'>

    <div className='w-[60%]'>
        <div className='text-white text-[34px] font-[700]'>
            Creative UI/UX Designer
        </div>
        <div className='text-white text-[34px] font-[700]'>
            Priya Bora
        </div>
        <div className='w-[45%] text-white mt-5'>"Crafting intuitive, user-centered designs that merge aesthetics with functionality for seamless digital experiences."</div>
        <div className='flex gap-[60px] mt-10 w-[60%] justify-center'>
            <button className='text-white border border-white px-[50px] py-2 rounded-[20px] bg-[#BEBEBE]'>Hire me</button>
            <button className='text-white border border-[rgba(0,0,0,0.3)] px-10 py-2 rounded-[20px] bg-gradient-to-r from-[#C961DE] to-[#2954A3]'>Download Cv</button>
        </div>
    </div>
   </div>


   <div className='fixed left-0 top-[80px] w-[70px] h-[600px]  rounded-tr-[40px] rounded-br-[40px] bg-[#a9a4bc]'>
           <div className='h-full w-full flex flex-col items-center justify-evenly'>
               <IoHomeOutline fontSize={25}/>
               <MdPersonOutline fontSize={25}/>
               <MdWork fontSize={25}/>
               <IoMdCall fontSize={25}/>
               <IoSearchSharp fontSize={25}/>

           </div>
   </div>

    </div>
  )
}

export default Navbar

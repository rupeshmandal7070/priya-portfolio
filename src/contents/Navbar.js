import React from 'react'
import { Link } from 'react-router-dom'



const Navbar = () => {

  const handleScroll = (id) => {
    console.log(id,'id')
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
 
  return (

    <div  className='bg-[#0f103f] h-screen relative'>
    <div className='bg-[#0f103f] w-full flex justify-center items-center gap-[100px] py-10 relative z-[1000]'>
      <div onClick={()=>handleScroll('home')} className='text-white cursor-pointer'>Home</div>
      <div onClick={()=>handleScroll('about')} className='text-white cursor-pointer'>About Me</div>
      <div>
        <img src='/logo.svg' className='ml-1 mt-1'/>
      </div>
      <div onClick={()=>handleScroll('work')} className='text-white cursor-pointer'>Work</div>
      <div onClick={()=>handleScroll('contact')} className='text-white cursor-pointer'>Contact</div>

      <div className='absolute top-0 left-0'>
        <img src='/navbar.svg'/>
      </div>
    </div>


   <div className='w-[100%] flex justify-center mt-[180px] pb-[50px]'>

    <div className='w-[50%] flex flex-col  items-center'>
      <div>
        <div className='text-white text-[34px] font-[700]'>
            Creative UI/UX Designer
        </div>
        <div className='text-white text-[34px] font-[700] text-left'>
            Priya Bora
        </div>
      </div>
        <div className='w-[45%] text-white mt-5'>"Crafting intuitive, user-centered designs that merge aesthetics with functionality for seamless digital experiences."</div>
        <div className='flex gap-[60px] mt-10 w-[60%] justify-center'>
            <button className='text-white border border-white px-[50px] py-2 rounded-[20px] bg-[#BEBEBE]'>Hire me</button>
            <a href='https://drive.google.com/drive/folders/1G__hrYCMQVPE-M085zIfSJrjvI_NKAAM?usp=sharing'>
            <button  className='text-white border border-[rgba(0,0,0,0.3)] px-10 py-2 rounded-[20px] bg-gradient-to-r from-[#C961DE] to-[#2954A3] z-[100]'>Download Cv</button>
            </a>
         
        </div>
    </div>
    <div className='w-[40%] h-[400px]'>
         <video src='/resumeVideo.mp4' loop muted autoPlay={true} className='w-full h-[300px]'/>
    </div>
   </div>


   {/* <div className='fixed left-0 top-[80px] w-[70px] h-[600px]  rounded-tr-[40px] rounded-br-[40px] bg-[#a9a4bc] z-10'>
           <div className='h-full w-full flex flex-col items-center justify-evenly'>
               <IoHomeOutline fontSize={25}/>
               <MdPersonOutline fontSize={25}/>
               <MdWork fontSize={25}/>
               <IoMdCall fontSize={25}/>
               <IoSearchSharp fontSize={25}/>

           </div>
   </div> */}

   <div className='absolute top-0 right-[8%] z-[0]'>
       <img src='/home.svg'/>
   </div>

    </div>
  )
}

export default Navbar

import React from 'react'
import { IoMdCall } from "react-icons/io";
import { MdEmail } from 'react-icons/md';

const Contact = () => {
  return (
    <div className='bg-[#0f103f] h-auto w-full'>
      <div className='w-full flex justify-center pt-[350px] pb-[150px]'>
         <div className='w-[60%] bg-[#22226c] h-[550px] rounded-[30px] border border-[rgba(90,81,208,0.2)] flex relative'>
            <div className='w-[50%] flex justify-center items-center h-full'>
                <div className='w-[60%] flex flex-col gap-4'>
                    <div className='text-white text-[24px] font-[700]'>Get in touch</div>
                    <div className='text-white text-[17px]'>I’m always open to connect and discuss new ideas! Feel free to reach out via call or email, follow me on social media, or simply fill out the inquiry form. I look forward to hearing from you</div>
                    <div className='flex items-center gap-3'>
                        <div className='h-[35px] w-[35px] bg-gray-500 rounded-[40px] flex justify-center items-center'><IoMdCall className='text-white'/></div>
                        <div className='text-white'>7060509969</div>
                    </div>

                    <div className='flex items-center gap-3'>
                        <div className='h-[35px] w-[35px] bg-gray-500 rounded-[40px] flex justify-center items-center'>
                            <MdEmail className='text-white'/></div>
                        <div className='text-white'>borap584@gmail.com</div>
                    </div>
                </div>
            </div>

            <div className='w-[50%] flex justify-center items-center h-full'>
                <div className='w-[70%] flex flex-col gap-4'>
                    <div className='text-white text-[24px] font-[700]'>Send me a message</div>
                     <div>
                        <input placeholder='Name' className='w-full h-[40px] border-none rounded-[10px] pl-2 bg-[#646598]'/>
                     </div>

                     <div>
                        <input placeholder='Email' className='w-full h-[40px] border-none rounded-[10px] pl-2 bg-[#646598]'/>
                     </div>

                     <div>
                        <input placeholder='Subject' className='w-full h-[40px] border-none rounded-[10px] pl-2 bg-[#646598]'/>
                     </div>

                     <div>
                        <textarea placeholder='Your Message' aria-multiline cols="10" className='w-full h-[40px] border-none rounded-[10px] pl-2 bg-[#646598]'/>
                     </div>

                     <div>
                     <button className='text-white border border-[rgba(0,0,0,0.3)] px-10 py-2 rounded-[10px] bg-gradient-to-r from-[#C961DE] to-[#2954A3]'>Send Message</button>
                     </div>
                </div>
            </div>
         <div className='absolute top-[-600px] left-[-200px]'>
            <img src='/working.png'/>
         </div>
         </div>


      </div>
    </div>
  )
}

export default Contact

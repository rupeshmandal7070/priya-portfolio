import React from 'react'

const Work = () => {

    const data = [{},{},{},{},{},{},{},{}]
  return (
    <div className='bg-[#0f103f] h-auto flex justify-center w-full flex-col items-center pt-[50px]'>

<div>
    <div className='text-white text-[20px] font-[600]'>My Recent work</div>
</div>

         <div className='w-[70%] flex justify-center flex-wrap gap-[50px] mt-[30px]'>
{
    data.map((item,index)=>(
            <div className='h-[325px] w-[40%] bg-[#727894] rounded-[30px] border flex flex-col justify-center items-center gap-[20px] '>
                <img src='/work1.png' className='w-[80%] h-[220px] mt-[20px]'/>
                <div className='bg-[#51576c] w-full h-[60px] flex justify-center items-center rounded-b-[30px]'>
                    <div className='text-white text-[24px] font-[600]'>NIKE Shoes Template Design</div>
                </div>
            </div>

    ))
}



         </div>
    </div>
  )
}

export default Work

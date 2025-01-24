import React from 'react'

const Work = () => {

    const data = [
        {
        title:"Nike Shoes Template Design",
        link:"https://www.figma.com/proto/lZESo3kufG7ojgOUwOg5Ox/NIKE-2?page-id=0%3A1&node-id=2-2&viewport=93%2C353%2C0.33&t=Faywqkfnw4tr5wzr-1&scaling=min-zoom&content-scaling=fixed",
        image:"/work1.png"
    }, 
     {
        title:"Assessment UI/UX",
        link:"https://www.figma.com/proto/WjwAykayJSlB9mDFr1bcY8/SaaS-%26-App-Website-SAMPLES?page-id=2905%3A2&node-id=3000-122&viewport=-63906%2C-11764%2C0.72&t=5pBnizdYGxMOFqrg-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=3000%3A122",
        image:"/work2.svg"
    },  
    {
        title:"Travel Web Design",
        link:"https://www.figma.com/proto/T4F3cGU9WjMHEbex6KoNts/WAVE-SHUTTLES?page-id=0%3A1&node-id=1-2&viewport=369%2C477%2C0.16&t=CtPmTlUSCHzXw2XU-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A2",
        image:"/work3.svg"
    },  
    {
        title:"Shop Landing Page Design",
        link:"https://www.figma.com/proto/jgpuLLCRqcwiXPfDksJ2Ln/Shop-landing-page?page-id=0%3A1&node-id=11-29&viewport=2578%2C507%2C0.22&t=7iYB0Yl5NpCfamFV-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=11%3A29",
        image:"/work4.svg"
    },  
    {
        title:"Study Material Web Design",
        link:"https://www.figma.com/proto/CMmoYNCNwH2DE4D35Xmhya/AI?page-id=0%3A1&node-id=1-2&viewport=453%2C-52%2C0.05&t=tb5dq6RqKSvaNyQW-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A2",
        image:"/work5.svg"
    }, 
     {
        title:"E-commerce App UI/UX",
        link:"https://www.figma.com/proto/7vktt23o6QCgmgErLf0LWZ/Carefit_Webdesign?page-id=0%3A1&node-id=2-104&viewport=-1769%2C-1961%2C0.11&t=98PFU3cmxYoUuX0Z-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2%3A104",
        image:"/work6.svg"
    }]
  return (
    <div  className='bg-[#0f103f] h-auto flex justify-center w-full flex-col items-center pt-[50px]'>

<div>
    <div className='text-white text-[20px] font-[600]'>My Recent work</div>
</div>

         <div className='w-[70%] flex justify-center flex-wrap gap-[50px] mt-[30px]'>
{
    data.map((item,index)=>(
            <a key={index} href={item?.link} target="_blank" rel="noopener noreferrer" className='h-[325px] w-[40%] bg-[#727894] rounded-[30px] border flex flex-col justify-center items-center gap-[20px] '>
                <img src={item?.image} className='w-[80%] h-[220px] mt-[20px] object-contain rounded-[5px]'/>
                <div className='bg-[#51576c] w-full h-[60px] flex justify-center items-center rounded-b-[30px]'>
                    <div className='text-white text-[24px] font-[600]'>{item?.title}</div>
                </div>
            </a>

    ))
}



         </div>
    </div>
  )
}

export default Work

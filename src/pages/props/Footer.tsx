import React from 'react';



const Footer = () => {
   
    return(
      <div className=" bg-transparent w-full mt-[-10rem] overflow-hidden font-Bebas py-8 duration-500  z-50 "> 
        <div className='flex justify-evenly'>
            <a href="" className=' dark:text-white font-Inter ease-in-out duration-500'>☻@vangogh.com</a>
            <div className="flex space-x-[8%] ">
                <div className='flex'>
                    <a href="" className=' dark:text-white font-Inter uppercase ease-in-out duration-500'>Linkedin</a>
                    <img src='/image/Arrow.svg'/>
                </div>
                <a href="" className=' dark:text-white font-Inter uppercase ease-in-out duration-500'>|</a> 
                <div className='flex'>
                    <a href="" className=' dark:text-white font-Inter uppercase ease-in-out duration-500'>Dribbble</a>
                    <img src='/image/Arrow.svg'/>
                </div>
                <a href="" className=' dark:text-white font-Inter uppercase ease-in-out duration-500'>|</a> 
                <div className='flex'>
                    <a href="" className=' dark:text-white font-Inter uppercase ease-in-out duration-500'>myspace</a>
                    <img src='/image/Arrow.svg'/>
                </div>
                <a href="" className=' dark:text-white font-Inter uppercase ease-in-out duration-500'>|</a> 
                <div className='flex'>
                    <a href="" className=' dark:text-white font-Inter uppercase ease-in-out duration-500'>GITHUB</a>
                    <img src='/image/Arrow.svg'/>
                </div>
                <a href="" className=' dark:text-white font-Inter uppercase ease-in-out duration-500'>|</a> 
                <div className='flex'>
                    <a href="" className=' dark:text-white font-Inter uppercase ease-in-out duration-500'>Instagram</a>
                    <img src='/image/Arrow.svg'/>
                </div>
                <img src="/image/Up.svg" alt="" />
            </div>
        </div>
      </div>
  );
}
  
export default Footer;
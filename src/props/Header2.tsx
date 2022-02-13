import React,{ useContext } from 'react';

import { ColorMode, ThemeContext } from '../modules/ThemeProvider';

import Link from 'next/link';

const Header2 = () => {
    const { colorMode, setColorMode } = useContext(ThemeContext);
    console.log(colorMode)
    return(
      <div className=" bg-transparent w-full fixed overflow-hidden font-Inter py-8 duration-500 ease-in-out  z-50 "> 
        <div className='flex justify-between'>
            <div className=' pl-11 flex flex-row'>
            
                <div className='pr-2 pt-2  cursor-pointer'>
                <Link href="/">
                    <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M3.61461 0.159096L0.622553 3.61591C0.438946 3.82804 0.438946 4.17196 0.622553 4.38409L3.61461 7.8409C3.79822 8.05303 4.0959 8.05303 4.27951 7.8409C4.46312 7.62878 4.46312 7.28485 4.27951 7.07272L2.09006 4.54319H16V3.45681H2.09006L4.27951 0.927276C4.46312 0.715149 4.46312 0.371223 4.27951 0.159096C4.0959 -0.0530318 3.79822 -0.0530318 3.61461 0.159096Z" className=' fill-black dark:fill-white duration-500 ease-in-out'/>
                    </svg>
                </Link>
                </div>

                    <Link href="/"><span className=' dark:text-white duration-500 ease-in-out cursor-pointer'>HOME</span></Link>
            </div>
            <nav className="flex pr-10 space-x-[10%]">
            <button onClick={() => {
                setColorMode(colorMode === ColorMode.dark ? ColorMode.light : ColorMode.dark)
                }}>{colorMode === ColorMode.dark ? '' : ''}
                <svg width="32" height="26" viewBox="0 0 32 26"  className='fill-transparent dark:fill-white w-10'>
                    <circle cx="16" cy="13" r="9.5" className=' stroke-black dark:stroke-white duration-500 ease-in-out'/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M16 3V23C21.5228 23 26 18.5228 26 13C26 7.47715 21.5228 3 16 3Z" className='fill-black dark:fill-black'/>
                </svg>
            </button>
            <svg width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="6" y1="6.5" x2="26" y2="6.5"  className='stroke-black dark:stroke-white duration-500 ease-in-out'/>
                <line x1="6" y1="12.5" x2="26" y2="12.5" className='stroke-black dark:stroke-white duration-500 ease-in-out'/>
                <line x1="6" y1="18.5" x2="26" y2="18.5" className='stroke-black dark:stroke-white duration-500 ease-in-out'/>
            </svg>
            </nav>
        </div>
      </div>
  );
}
  
export default Header2;
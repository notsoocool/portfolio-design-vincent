import React,{ useContext } from 'react';
import { motion } from "framer-motion";

import { ColorMode, ThemeContext } from '../modules/ThemeProvider';

import Link from 'next/link';

const Header2 = () => {
    const { colorMode, setColorMode } = useContext(ThemeContext);
    console.log(colorMode)

    const svgV = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.5
            }
        }
    }
    const svgV2 = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2
            }
        }
    }
    const pathV = {
        hidden: {
            opacity: 0,
            pathLength: 0 
        },
        visible: {
            opacity: 1,
            pathLength: 1,
            transition: {
                duration: 2,
                ease: "easeInOut"
            }
        }
    }
    const pathV2 = {
        hidden: {
            opacity: 0,
            
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 2,
                duration: 1.5,
                ease: "easeInOut"
            }
        }
    }
    return(
      <motion.div  className=" bg-transparent w-full fixed overflow-hidden font-Inter py-8 duration-500 ease-in-out  z-50 "
      initial={{ opacity: 0,  }}
      animate={{ opacity: 1, }}
      transition={{
        ease: "easeInOut",
        duration: 1,
      }}
      > 
        <div className='flex justify-between'>
            <div className=' pl-11 flex flex-row'>
            
                <div className='pr-2 pt-2  cursor-pointer'>
                <Link href="/">
                    <motion.svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg"
                        variants={svgV2} 
                        initial="hidden"
                        animate="visible"
                    >
                    <motion.path fillRule="evenodd" clipRule="evenodd" d="M3.61461 0.159096L0.622553 3.61591C0.438946 3.82804 0.438946 4.17196 0.622553 4.38409L3.61461 7.8409C3.79822 8.05303 4.0959 8.05303 4.27951 7.8409C4.46312 7.62878 4.46312 7.28485 4.27951 7.07272L2.09006 4.54319H16V3.45681H2.09006L4.27951 0.927276C4.46312 0.715149 4.46312 0.371223 4.27951 0.159096C4.0959 -0.0530318 3.79822 -0.0530318 3.61461 0.159096Z" className=' fill-black dark:fill-white duration-500 ease-in-out' />
                    </motion.svg>
                </Link>
                </div>

                    <Link href="/"><span className=' dark:text-white duration-500 ease-in-out cursor-pointer'>HOME</span></Link>
            </div>
            <nav className="flex pr-10 space-x-[10%]">
            <button onClick={() => {
                setColorMode(colorMode === ColorMode.dark ? ColorMode.light : ColorMode.dark)
                }}>{colorMode === ColorMode.dark ? '' : ''}
                <motion.svg width="20" height="20" viewBox="0 0 20 20" className='hidden dark:block fill-transparent w-10 duration-500 ease-in-out'
                variants={svgV}
                initial="hidden"
                animate="visible"
               >
                    <motion.circle cx="10" cy="10" r="9.5" transform="rotate(-180 10 10)" className=" stroke-white duration-500 ease-in-out" variants={pathV}/>
                    <motion.path fillRule="evenodd" clipRule="evenodd" d="M10 20L10 8.74228e-07C4.47715 3.91405e-07 1.35705e-06 4.47715 8.74228e-07 10C3.91405e-07 15.5228 4.47715 20 10 20Z" fill="white" variants={pathV2}/>
                </motion.svg>
                
                <motion.svg width="32" height="26" viewBox="0 0 32 26"  className='block dark:hidden fill-transparent w-10 duration-500 ease-in-out'
                    variants={svgV}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.circle cx="16" cy="13" r="9.5" className=' stroke-black duration-500 ease-in-out' variants={pathV}/>
                    <motion.path fillRule="evenodd" clipRule="evenodd" d="M16 3V23C21.5228 23 26 18.5228 26 13C26 7.47715 21.5228 3 16 3Z" className='fill-black' variants={pathV2}/>
                </motion.svg>
            </button>
            <motion.svg width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg"
            variants={svgV}
            initial="hidden"
            animate="visible"
            >
                <motion.line x1="6" y1="6.5" x2="26" y2="6.5"  className='stroke-black dark:stroke-white duration-500 ease-in-out' variants={pathV}/>
                <motion.line x1="6" y1="12.5" x2="26" y2="12.5" className='stroke-black dark:stroke-white duration-500 ease-in-out' variants={pathV}/>
                <motion.line x1="6" y1="18.5" x2="26" y2="18.5" className='stroke-black dark:stroke-white duration-500 ease-in-out' variants={pathV}/>
            </motion.svg>
            </nav>
        </div>
      </motion.div>
  );
}
  
export default Header2;
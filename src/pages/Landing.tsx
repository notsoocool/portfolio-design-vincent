import React from "react";
import Link from 'next/link';
import { motion } from "framer-motion";

const Landing = () => {

    
    const childV={
        hidden: {
            opacity: 0,
            y: 100
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 2,
                ease: "easeInOut"
            }
        }
    }
   
  
  return (

  
    <div className=" overflow-x-hidden bg-white dark:bg-black mt-[25%] xl:mt-[10%] transition-colors duration-500 ">

      <main className="flex flex-col content-center">
        <motion.p className=" font-Inter w-[90%] xl:w-[60%] uppercase self-start text-[2rem] xl:text-[5rem] pl-[10%] dark:text-white transition duration-500 ease-in-out"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
                visible: {
                    opacity: 1,
                    transition: {
                        delay: 2,
                        duration: 1
                    }
                } ,
              hidden: { opacity: 0}
            }}
        >
                Vincent Van Gogh.
                post-impressionist painter and artist
        </motion.p>
        <motion.div className=" pt-[10%] pl-[10%] xl:pl-0 pr-[10%] xl:pr-[5%] flex flex-col xl:flex-row justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            variants={{
                visible: {
                    opacity: 1,
                    transition: {
                        staggerChildren: 0.7
                    }
                } ,
              hidden: { opacity: 0}
            }}
        >
            <motion.div className="pr-[10%]" variants={childV}>
                <Link href="/Night">
                    <img src="https://cdn.discordapp.com/attachments/941091409509896283/942357990319751238/1.svg"  className="cursor-pointer"/>
                </Link>
                <Link href="/Night" >
                    <a className="font-Inter dark:text-white duration-500 ease-in-out">1 &nbsp;&nbsp;&nbsp;&nbsp; THE STARRY NIGHT</a>
                </Link>
            </motion.div>
            
            <motion.div className=" pt-[10%]  xl:pt-[3%]" variants={childV}>
                <Link href="/Cafe">
                    <img src="https://cdn.discordapp.com/attachments/941091409509896283/942357990890168320/2.svg" className="cursor-pointer"/>
                </Link>
                <Link href="/Cafe">
                    <a className="font-Inter dark:text-white duration-500 ease-in-out">2 &nbsp;&nbsp;&nbsp;&nbsp;   THE NIGHT CAFE</a>
                </Link>
            </motion.div>
        </motion.div>
        <motion.div className=" pt-10 xl:pt-24 pl-[10%] xl:pl-[7%] flex flex-col xl:flex-row justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            variants={{
                visible: {
                    opacity: 1,
                    transition: {
                        staggerChildren: 0.7
                    }
                } ,
            hidden: { opacity: 0}
            }}
        >
            <motion.div className="pr-[17%] xl:pr-[11%]" variants={childV}>
                <img src="https://cdn.discordapp.com/attachments/941091409509896283/942357991158599710/3.svg" />
                <a className="font-Inter dark:text-white duration-500 ease-in-out">3 &nbsp;&nbsp;&nbsp;&nbsp;   THE RED VINEYARD</a>
            </motion.div>
            <motion.div className=" pt-11 xl:pt-0 pr-10 xl:pr-0" variants={childV}>
                <img src="https://cdn.discordapp.com/attachments/941091409509896283/942357979792044072/4.svg" />
                <a className="font-Inter dark:text-white duration-500 ease-in-out">4 &nbsp;&nbsp;&nbsp;&nbsp;   WARD IN THE HOSPITAL IN ARLES</a>
            </motion.div>
        </motion.div>
        <motion.div className=" pt-10 xl:pt-24 pl-[10%] xl:pl-0 flex flex-col xl:flex-row justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            variants={{
                visible: {
                    opacity: 1,
                    transition: {
                        staggerChildren: 0.7
                    }
                } ,
            hidden: { opacity: 0}
            }}
        >
            <motion.div className="pr-[11%] xl:pr-[3%]" variants={childV}>
                <img src="https://cdn.discordapp.com/attachments/941091409509896283/942357980194693190/5.svg" />
                <a className="font-Inter dark:text-white duration-500 ease-in-out">5 &nbsp;&nbsp;&nbsp;&nbsp;   PLOUGHMAN IN THE FIELDS NEAR ARLES</a>
            </motion.div>
            <motion.div className="pr-[16%] xl:pr-0 pt-11 xl:pt-[3%]" variants={childV}>
                <img src="https://cdn.discordapp.com/attachments/941091409509896283/942357989787054140/6.svg" />
                <a className="font-Inter dark:text-white duration-500 ease-in-out">6  &nbsp;&nbsp;&nbsp;&nbsp;  PAUL GAUGUINS'S ARMCHAIR</a>
            </motion.div>
        </motion.div>
        <motion.p className="pt-20 xl:pt-[10%] w-[90%] xl:w-[80%] font-Inter uppercase self-start text-[2rem] xl:text-[5rem] pl-[10%] dark:text-white transition duration-500 ease-in-out"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        delay: 0.5
                    }
                } ,
              hidden: { opacity: 0, y: 100}
              
            }}
        >
            Van Gogh painted several landscapes with flowers, roses, lilacs, and sunflowers.
        </motion.p>
        <motion.p className="pt-5 xl:pt-11 w-[90%] xl:w-[80%] font-Inter uppercase self-start text-[0.8rem] xl:text-[2rem] pl-[10%] dark:text-white transition duration-500 ease-in-out"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
                visible: {
                    opacity: 1, y: 0,
                    transition: {
                        delay: 0.5
                    }
                } ,
              hidden: { opacity: 0, y: 100}
            }}
        >
            Some reflect his interests in the language of colour, and also in Japanese ukiyo-e. There are two series of dying sunflowers. The first was painted in Paris in 1887 and shows flowers lying on the ground.
        </motion.p>
        <div className="pt-[8rem] pl-[5%] xl:pl-0 w-[100%] flex flex-col xl:flex-row justify-end pb-[15rem] xl:pb-[20rem]">
            <img src="https://cdn.discordapp.com/attachments/941091409509896283/942358432466477076/Group.svg" className="pr-[6%]"/>
            <div className=" flex w-full xl:w-[55%] flex-col pt-11 xl:pt-[6rem] xl:pr-[12%] font-Inter uppercase">
                <div className="flex w-[100%] justify-between pr-[5%]">
                    <div className="flex flex-col">
                        <a className=" text-xl xl:text-2xl font-bold dark:text-white duration-500 ease-in-out">Nuenen and Antwerp</a>
                        <a className=" text-base xl:text-lg dark:text-white duration-500 ease-in-out">painting intern</a>
                    </div>
                    <a className="pt-2 text-xl xl:text-2xl font-bold text-gray-400">1883</a>
                </div>
                <div className="flex w-[100%] pt-11 justify-between pr-[5%]">
                    <div className="flex flex-col">
                        <a className=" text-xl xl:text-2xl font-bold dark:text-white duration-500 ease-in-out">PAris</a>
                        <a className=" text-base xl:text-lg dark:text-white duration-500 ease-in-out">Junior Painter</a>
                    </div>
                    <a className="pt-2 text-xl xl:text-2xl font-bold text-gray-400">1886</a>
                </div>
                <div className="flex w-[100%] pt-11 justify-between pr-[5%]">
                    <div className="flex flex-col">
                        <a className=" text-xl xl:text-2xl font-bold dark:text-white duration-500 ease-in-out">Gauguin's visit</a>
                        <a className=" text-base xl:text-lg dark:text-white duration-500 ease-in-out">Experimental artist</a>
                    </div>
                    <a className="pt-2 text-xl xl:text-2xl font-bold text-gray-400">1888</a>
                </div>
                <div className="flex w-[100%] pt-11 justify-between pr-[5%]">
                    <div className="flex flex-col">
                        <a className=" text-xl xl:text-2xl font-bold dark:text-white duration-500 ease-in-out">Saint-Rémy</a>
                        <a className=" text-base xl:text-lg dark:text-white duration-500 ease-in-out">Senior Painter</a>
                    </div>
                    <a className="pt-2 text-xl xl:text-2xl font-bold text-gray-400">1889</a>
                </div>
                <div className="flex w-[100%] pt-11 justify-between pr-[5%]">
                    <div className="flex flex-col">
                        <a className=" text-xl xl:text-2xl font-bold dark:text-white duration-500 ease-in-out">Auvers-sur-Oise</a>
                        <a className=" text-base xl:text-lg dark:text-white duration-500 ease-in-out">painting studio manager</a>
                    </div>
                    <a className="pt-2 text-xl xl:text-2xl font-bold text-gray-400">1890</a>
                </div>
            </div>
        </div>
      </main>
    </div>
  );
}


export default Landing;
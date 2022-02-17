import React from "react";
import Link from "next/link"

const Red =() => {
  
  return (
    <div className=" overflow-x-hidden flex flex-col font-Inter pb-[10%] bg-white dark:bg-black transition-colors duration-500 ">
      <div className=" fixed ">
      <main className=" w-full h-screen flex place-items-center justify-evenly text-center">
        <a className=" rotate-[270deg] text-black dark:text-white text-xs uppercase duration-500 ease-in-out">
          2. THE night cafe
        </a>
      </main>
     </div> 
     <div className=" absolute ">
      <main className=" w-full h-screen flex place-items-center justify-evenly text-center">
        <a className="text-black dark:text-white  text-[2rem] xl:text-[3rem] 2xl:text-[5rem] w-[75%] uppercase duration-500 ease-in-out ">
        I have tried to express the terrible passions of humanity by means of red and purple
        </a>
      </main>
     </div> 
    <div className=" w-full h-screen bg-white dark:bg-black flex flex-col xl:flex-row duration-500 ease-in-out">
      <div className="flex h-[50%] xl:h-full w-full xl:w-[50%] place-items-center justify-evenly"></div>
      <div className=" h-[50%] xl:h-full w-full xl:w-[50%] bg-no-repeat bg-cover bg-red "></div>
    </div>
    <div className="flex gap-x-[5%] px-[15%] pt-[10%] ">
      <div className="flex uppercase flex-col text-gray-300 dark:text-gray-500 duration-500 ease-in-out">
        <span>year</span>
        <span>medium</span>
        <span>location</span>
        <span>size</span>
      </div>
      <div className="flex flex-col xl:flex-row gap-x-[10%]" >
        <div className="flex uppercase flex-col dark:text-white duration-500 ease-in-out">
          <span>1888</span>
          <span>oil on canvas</span>
          <span>ayale university gallery</span>
          <span>28.5 IN x 36.3 in</span>
        </div>
        <p className=" pt-5 xl:pt-0 w-full xl:w-[40%] text-[0.82rem] dark:text-white duration-500 ease-in-out">
          The Night Café (French: Le Café de nuit) is an oil painting created by Dutch artist Vincent van Gogh in September 1888 in Arles. Its title is inscribed lower right beneath the signature. The painting is owned by Yale University and is currently held at the Yale University Art Gallery in New Haven, Connecticut.
        </p>
      </div>
    </div>
    <div className="flex justify-center pt-[10%]">
      <img src="https://cdn.discordapp.com/attachments/941091409509896283/943861938323075103/Image_1.svg" alt="" className="w-[70%]" />
    </div>
   
    <div className=" flex flex-row justify-center pt-[15%] xl:pt-[5%] 2xl:pt-[10%]">
      <div className=" flex flex-col w-[60%] xl:w-[40%] 2xl:w-[35%] justify-end place-items-end pr-[5%]">
        <img src="https://cdn.discordapp.com/attachments/941091409509896283/943862500020092998/Image_2.svg" alt="" className="hidden xl:block rotate-90 xl:rotate-0        pr-[5%]   h-[350px]    xl:h-[320px] 2xl:h-[450px]"/>
        <span className=" pt-[50%] text-black dark:text-white xl:text-[1.8rem] 2xl:text-[2.5rem] uppercase duration-500 ease-in-out">The interior depicted is the Café de la Gare, 30 Place Lamartine, run by Joseph Ginoux and his wife Marie, who in November 1888 posed for Van Gogh's and Gauguin's Arlésienne; a bit later, Joseph Ginoux evidently posed for both artists.</span>
      </div>
        <img src="https://cdn.discordapp.com/attachments/941091409509896283/943862647353405460/Image_3.svg" alt="" className="  xl:mt-[10%] 2xl:mt-[7%]     xl:pl-[5%]  h-[150px]   xl:h-[520px] 2xl:h-[800px]"/> 
      </div>
    <div className="flex xl:h-screen justify-center mt-[10%]">
      <img src="https://cdn.discordapp.com/attachments/941091409509896283/943865474205249577/Image_4.svg" alt="" className="w-[70%]" />
    </div>
    <div className=" flex justify-center ml-[25%] mt-[10%]">
      <div className="w-[70%]">
        <span className= "xl:text-[1.8rem]  2xl:text-5xl text-black dark:text-white uppercase duration-500 ease-in-out" >he Night Café (French: Le Café de nuit) is an oil painting created by Dutch artist Vincent van Gogh in September 1888 in Arles.[1] Its title is inscribed lower right beneath the signature. The painting is owned by Yale University and is currently held at the Yale University Art Gallery in New Haven, Connecticut.</span>
      </div>
    </div>
    <div className="flex xl:h-screen justify-center mt-[10%]">
      <img src="https://cdn.discordapp.com/attachments/941091409509896283/943869006002126848/Image_5.svg" alt="" className="w-[70%]" />
    </div>
 
    <div className="flex w-full pt-[10%] justify-evenly pb-[11rem] xl:pb-[7%]">
      <Link href="/Night">
      <div className="  cursor-pointer flex flex-col w-[8rem] h-[8rem] xl:w-[15rem] xl:h-[15rem] justify-center items-center rounded-full bg-black dark:bg-white duration-500 ease-in-out">
        <div>
          <svg  viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 xl:w-11 xl:h-11">
          <path fillRule="evenodd" clipRule="evenodd" d="M3.61461 0.159096L0.622553 3.61591C0.438946 3.82804 0.438946 4.17196 0.622553 4.38409L3.61461 7.8409C3.79822 8.05303 4.0959 8.05303 4.27951 7.8409C4.46312 7.62878 4.46312 7.28485 4.27951 7.07272L2.09006 4.54319H16V3.45681H2.09006L4.27951 0.927276C4.46312 0.715149 4.46312 0.371223 4.27951 0.159096C4.0959 -0.0530318 3.79822 -0.0530318 3.61461 0.159096Z" className=' fill-white dark:fill-black duration-500 ease-in-out'/>
          </svg>
        </div>
        <span className="uppercase text-[0.7rem] xl:text-[1.5rem] text-center text-white dark:text-black duration-500 ease-in-out">
          the starry night
        </span>
      </div>
      </Link>
      <Link href="/">
      <div className=" cursor-pointer flex flex-col w-[8rem] h-[8rem] xl:w-[15rem] xl:h-[15rem] justify-center items-center rounded-full bg-black dark:bg-white duration-500 ease-in-out">
        <div>
          <svg  viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 xl:w-11 xl:h-11 rotate-180">
          <path fillRule="evenodd" clipRule="evenodd" d="M3.61461 0.159096L0.622553 3.61591C0.438946 3.82804 0.438946 4.17196 0.622553 4.38409L3.61461 7.8409C3.79822 8.05303 4.0959 8.05303 4.27951 7.8409C4.46312 7.62878 4.46312 7.28485 4.27951 7.07272L2.09006 4.54319H16V3.45681H2.09006L4.27951 0.927276C4.46312 0.715149 4.46312 0.371223 4.27951 0.159096C4.0959 -0.0530318 3.79822 -0.0530318 3.61461 0.159096Z" className=' fill-white dark:fill-black duration-500 ease-in-out'/>
          </svg>
        </div>
        <span className="uppercase text-[0.7rem] xl:text-[1.5rem] text-center text-white dark:text-black duration-500 ease-in-out">
        The red vineyard
        </span>
      </div>
      </Link>
    </div>
  </div>

    
    
  );
};

export default Red;
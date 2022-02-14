import React from "react";

const Stairy =() => {
  
  return (
    <div className=" overflow-x-hidden flex flex-col font-Inter pb-[10%] bg-white dark:bg-black transition-colors duration-500 ">

    <main className=" bg-hero bg-no-repeat bg-cover w-full h-screen flex place-items-center justify-evenly text-center">
      <a className="  text-[2rem] xl:text-[3rem] 2xl:text-[5rem] w-[75%] uppercase ">
        The Starry Night is an oil on canvas painting by Dutch Post Impressionist painter van Gogh. Painted in June 1889.
      </a>
    </main>
    <div className="flex justify-center pt-[10%]">
      <img src="https://cdn.discordapp.com/attachments/941091409509896283/942493880060899338/Image_1.svg" alt="" className="w-[80%]" />
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
    <div className=" flex flex-col xl:flex-row justify-center pt-[15%] xl:pt-[10%]">
        <img src="https://cdn.discordapp.com/attachments/941091409509896283/942510400967172197/Image_2.svg" alt="" className=" rotate-90 xl:rotate-0 pr-0 xl:pr-[5%]   h-[350px]   xl:h-[520px] 2xl:h-[800px]"/>
        <img src="https://cdn.discordapp.com/attachments/941091409509896283/942510249313726544/Image_3.svg" alt="" className=" rotate-90 xl:rotate-0           h-[350px]    xl:h-[520px] 2xl:h-[800px]"/>
    </div>
    <div className=" w-full h-screen bg-[#2EBCC7] flex flex-col xl:flex-row mt-[10%]">
      <div className=" h-[50%] xl:h-full w-full xl:w-[50%] bg-no-repeat bg-cover bg-half z-20"></div>
      <div className="flex h-[50%] xl:h-full w-full xl:w-[50%] place-items-center justify-evenly">
        <p className="flex xl:h-[80%] w-[70%] xl:w-[80%] uppercase dark:text-white duration-500 ease-in-out  place-items-center text-[1.1rem] xl:text-3xl 2xl:text-5xl tracking-wide text-justify">
          it depicts the view from the east-facing window of his asylum room at Saint Rémy de Provence, just before sunrise, with the addition of an imaginary village. It has been in the permanent collection of the Museum of Modern Art in New York City since 1941, acquired through the Lizzie Plummer Bliss Bequest.
        </p>
      </div>
    </div>
    <div className="flex flex-col uppercase place-items-center pt-[10%]">
      <div className="w-[80%]">
        <p className=" dark:text-white duration-500 ease-in-out text-[2rem] xl:text-[4rem] 2xl:text-[5rem]">
          Although The Starry Night was painted during the day in Van Gogh's ground-floor studio, it would be inaccurate to state that the picture was painted from memory.
        </p>
      </div>
      <div className="w-[80%] pt-8">
        <p className="  dark:text-white duration-500 ease-in-out xl:text-[2rem] 2xl:text-[2.7rem]">
          The view has been identified as the one from his bedroom window, facing east, a view which Van Gogh painted variations of no fewer than twenty-one times, including The Starry Night. 
        </p>
      </div>
    </div>
    <div className=" hidden xl:flex flex-col xl:flex-row w-full pt-[10%] justify-center">
      <div className=" ">
        <img src="https://cdn.discordapp.com/attachments/941091409509896283/942529415894687794/Image_4.svg" alt="" className=" 2xl:h-[500px]"/>
      </div>
      <div className=" pt-[10%] pl-[2%]">
        <img src="https://cdn.discordapp.com/attachments/941091409509896283/942528420808646696/Image_4.svg" alt="" className=" 2xl:h-[450px]"/>
      </div>
      <div className=" pt-[5%] pl-[8%]">
        <img src="https://cdn.discordapp.com/attachments/941091409509896283/942529958394343474/Image_4.svg" alt="" className=" 2xl:h-[250px]"/>
      </div>
    </div>
    <div className=" flex xl:hidden flex-col xl:flex-row w-full pt-[15%] justify-center">
      <div className=" pl-1">
        <img src="https://cdn.discordapp.com/attachments/941091409509896283/942529415894687794/Image_4.svg" alt="" className=" w-[350px]"/>
      </div>
      <div className="flex  justify-end pr-5 pt-5 ">
        <img src="https://cdn.discordapp.com/attachments/941091409509896283/942528420808646696/Image_4.svg" alt="" className=" w-[400px]"/>
      </div>
      <div className=" pt-5 pl-4">
        <img src="https://cdn.discordapp.com/attachments/941091409509896283/942529958394343474/Image_4.svg" alt="" className=" "/>
      </div>
    </div>
    <div className="flex w-full pt-[10%] justify-evenly pb-[11rem] xl:pb-[7%]">
      <div className="flex flex-col w-[8rem] h-[8rem] xl:w-[15rem] xl:h-[15rem] justify-center items-center rounded-full bg-black dark:bg-white duration-500 ease-in-out">
        <div>
          <svg  viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 xl:w-11 xl:h-11">
          <path fillRule="evenodd" clipRule="evenodd" d="M3.61461 0.159096L0.622553 3.61591C0.438946 3.82804 0.438946 4.17196 0.622553 4.38409L3.61461 7.8409C3.79822 8.05303 4.0959 8.05303 4.27951 7.8409C4.46312 7.62878 4.46312 7.28485 4.27951 7.07272L2.09006 4.54319H16V3.45681H2.09006L4.27951 0.927276C4.46312 0.715149 4.46312 0.371223 4.27951 0.159096C4.0959 -0.0530318 3.79822 -0.0530318 3.61461 0.159096Z" className=' fill-white dark:fill-black duration-500 ease-in-out'/>
          </svg>
        </div>
        <span className="uppercase text-[0.7rem] xl:text-[1.5rem] text-center text-white dark:text-black duration-500 ease-in-out">
          Paul Gauguin's Armchair
        </span>
      </div>
      <div className="flex flex-col w-[8rem] h-[8rem] xl:w-[15rem] xl:h-[15rem] justify-center items-center rounded-full bg-black dark:bg-white duration-500 ease-in-out">
        <div>
          <svg  viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 xl:w-11 xl:h-11 rotate-180">
          <path fillRule="evenodd" clipRule="evenodd" d="M3.61461 0.159096L0.622553 3.61591C0.438946 3.82804 0.438946 4.17196 0.622553 4.38409L3.61461 7.8409C3.79822 8.05303 4.0959 8.05303 4.27951 7.8409C4.46312 7.62878 4.46312 7.28485 4.27951 7.07272L2.09006 4.54319H16V3.45681H2.09006L4.27951 0.927276C4.46312 0.715149 4.46312 0.371223 4.27951 0.159096C4.0959 -0.0530318 3.79822 -0.0530318 3.61461 0.159096Z" className=' fill-white dark:fill-black duration-500 ease-in-out'/>
          </svg>
        </div>
        <span className="uppercase text-[0.7rem] xl:text-[1.5rem] text-center text-white dark:text-black duration-500 ease-in-out">
        The Night Café
        </span>
      </div>
    </div>
  </div>

    
    
  );
};

export default Stairy;
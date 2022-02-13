import React from "react";

export default function Landing() {
   
  
  return (
  
    <div className=" overflow-y-hidden bg-white dark:bg-black mt-[10%] transition-colors duration-500 ">

      <main className="flex flex-col content-center">
        <p className=" font-Inter uppercase self-start text-[5rem] pl-[10%] dark:text-white transition duration-500 ease-in-out">
                Vincent Van Gogh.<br/>
                post-impressionist<br/> painter and artist
        </p>
        <div className=" pt-[10%] pr-[5%] flex justify-center">
            <div className="pr-[10%]">
                <img src="/image/1.svg" />
                <a className="font-Inter dark:text-white duration-500 ease-in-out">1    THE STARRY NIGHT</a>
            </div>
            <div className="pt-[3%]">
                <img src="/image/2.svg" />
                <a className="font-Inter dark:text-white duration-500 ease-in-out">2    THE NIGHT CAFE</a>
            </div>
        </div>
        <div className=" pt-24 pl-[7%] flex justify-center">
            <div className="pr-[11%]">
                <img src="/image/3.svg" />
                <a className="font-Inter dark:text-white duration-500 ease-in-out">3    THE RED VINEYARD</a>
            </div>
            <div className="">
                <img src="/image/4.svg" />
                <a className="font-Inter dark:text-white duration-500 ease-in-out">4    WARD IN THE HOSPITAL IN ARLES</a>
            </div>
        </div>
        <div className=" pt-24 flex justify-center">
            <div className="pr-[3%]">
                <img src="/image/5.svg" />
                <a className="font-Inter dark:text-white duration-500 ease-in-out">5    PLOUGHMAN IN THE FIELDS NEAR ARLES</a>
            </div>
            <div className="pt-[3%]">
                <img src="/image/6.svg" />
                <a className="font-Inter dark:text-white duration-500 ease-in-out">6    PAUL GAUGUINS'S ARMCHAIR</a>
            </div>
        </div>
        <p className="pt-[10%] w-[80%] font-Inter uppercase self-start text-[5rem] pl-[10%] dark:text-white transition duration-500 ease-in-out">
            Van Gogh painted several landscapes with flowers, roses, lilacs, and sunflowers.
        </p>
        <p className="pt-11 w-[80%] font-Inter uppercase self-start text-[2rem] pl-[10%] dark:text-white transition duration-500 ease-in-out">
            Some reflect his interests in the language of colour, and also in Japanese ukiyo-e. There are two series of dying sunflowers. The first was painted in Paris in 1887 and shows flowers lying on the ground.
        </p>
        <div className="pt-[8rem] w-[100%] flex justify-end pb-[20rem]">
            <img src="image/Group.svg" className="pr-[6%]"/>
            <div className="flex w-[55%] flex-col pt-[6rem] pr-[12%] font-Inter uppercase">
                <div className="flex w-[100%] justify-between pr-[5%]">
                    <div className="flex flex-col">
                        <a className=" text-2xl font-bold dark:text-white duration-500 ease-in-out">Nuenen and Antwerp</a>
                        <a className=" text-lg dark:text-white duration-500 ease-in-out">painting intern</a>
                    </div>
                    <a className="pt-2 text-2xl font-bold text-gray-400">1883</a>
                </div>
                <div className="flex w-[100%] pt-11 justify-between pr-[5%]">
                    <div className="flex flex-col">
                        <a className=" text-2xl font-bold dark:text-white duration-500 ease-in-out">PAris</a>
                        <a className=" text-lg dark:text-white duration-500 ease-in-out">Junior Painter</a>
                    </div>
                    <a className="pt-2 text-2xl font-bold text-gray-400">1886</a>
                </div>
                <div className="flex w-[100%] pt-11 justify-between pr-[5%]">
                    <div className="flex flex-col">
                        <a className=" text-2xl font-bold dark:text-white duration-500 ease-in-out">Gauguin's visit</a>
                        <a className=" text-lg dark:text-white duration-500 ease-in-out">Experimental artist</a>
                    </div>
                    <a className="pt-2 text-2xl font-bold text-gray-400">1888</a>
                </div>
                <div className="flex w-[100%] pt-11 justify-between pr-[5%]">
                    <div className="flex flex-col">
                        <a className=" text-2xl font-bold dark:text-white duration-500 ease-in-out">Saint-Rémy</a>
                        <a className=" text-lg dark:text-white duration-500 ease-in-out">Senior Painter</a>
                    </div>
                    <a className="pt-2 text-2xl font-bold text-gray-400">1889</a>
                </div>
                <div className="flex w-[100%] pt-11 justify-between pr-[5%]">
                    <div className="flex flex-col">
                        <a className=" text-2xl font-bold dark:text-white duration-500 ease-in-out">Auvers-sur-Oise</a>
                        <a className=" text-lg dark:text-white duration-500 ease-in-out">painting studio manager</a>
                    </div>
                    <a className="pt-2 text-2xl font-bold text-gray-400">1890</a>
                </div>
            </div>
        </div>
      </main>
    </div>
  );
}

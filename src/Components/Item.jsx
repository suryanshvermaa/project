"use client"


import Image from "next/image";

import FirstI from "../../s1-image.d6d4b7703bc14f99bb7e.jpg";
import Item2 from "./item2";
import Item3 from "./Item3";
import Item4 from "./Item4";
import { useEffect, useState } from "react";




const Item = () => {
   
  const [sTheme,setStheme]=useState('light');

  useEffect(()=>{
    if(localStorage.theme!=='dark'){
      let bodyClass=document.querySelector('body').classList;
     
      bodyClass.add('bg-[#f0f8ff]');
     
    }
  },[sTheme]);

  const toggleTheme=()=>{
    setStheme('light')
    let htmlClass=document.querySelector("html").classList;
    if(localStorage.theme==='dark'){
      htmlClass.remove('dark');
      localStorage.removeItem('theme');
      let bodyClass=document.querySelector('body').classList;
      bodyClass.remove('bg-[#212529]')
     
    }else{
      htmlClass.add('dark');
      setStheme('dark')
      localStorage.setItem('theme','dark');
      let bodyClass=document.querySelector('body').classList;
      bodyClass.add('duration-500')
      bodyClass.add('bg-[#212529]');
      
        bodyClass.remove('bg-[#f0f8ff]');
       

    }
  }
  

  return (  <div className=" ">
          
    <div className="md:max-w-[1061px]    xl:mx-auto lg:mx-8 md:mx-8 sm:m-8   m-auto">
      <div className="sm:text-[24px]  text-1.8xl font-bold m-10 mt-7 mb-[60px] ml-5 font-serif relative">
        <h1 className="dark:text-white hover:text-[#a1a1a1] sm:ml-auto ml-[20px] mt-6 hover:translate-x-[-10px] duration-200 block">
          Lets Collaborate
        </h1>
      </div>
      <div className="w-[100%] flex sm:flex-row flex-col flex-wrap justify-center">
        <div className="sm:w-[50%]  flex  justify-start">
          <div className="w-full flex  sm:justify-start justify-center ">
            <div className=" w-[80%] flex justify-between flex-col  ">
              <h1 className=" dark:text-white text-[50px] font-extralight font-serif leading-[65px] box  hover:scale-105 duration-50 ">
                AI + RPA is what we do
              </h1>

              <div className="sm:w-[100%] font-bold ">
                <p className="dark:text-white font-serif mb-[56px] font-bold">
                  Future-Proof your business. Drive efficiency, profitability and
                  deliver on customer experience
                </p>
                <div className="flex flex-row ">
                  <h1 className="dark:text-blue-500 font-serif text-xl font-bold hover:text-[#909090] w-full">
                    AI + RPA Automation
                  </h1>

                  <span className=" dark:text-blue-500  text-xl font-bold ml-[56px] ">&#8594;</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:w-[50%]  ">
          <Image
            className="h-full w-full hover:transform-style-3d  lg:m-auto m-8 hover:rotate-y-180 duration-1000 cursor-pointer"
            src={FirstI}
          />
        </div>
      </div>
      <Item2/>
      <Item3/>
      <Item4/>
     
      <div className=" md:mt-auto mb-[20px] mt-[100px]  ">
      <button onClick={toggleTheme} className="    dark:border-white sm:mt-auto mt-[6px] sm:ml-auto ml-8 sm:w-auto w-full md:w-auto dark:border-[1px] text-white py-4 px-10 bg-[#212529] hover:bg-slate-700">Toggle Night Mode</button>
    </div>

    </div>
    
    </div>
  );
 
};
export default Item;

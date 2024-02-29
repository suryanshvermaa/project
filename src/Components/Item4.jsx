 
import Image from "next/image";
import FourthI from "../../s4-image.e02e593de8014f43f419.jpg";
const Item4=()=>{
    return    <div className="w-[100%] flex sm:flex-row flex-col flex-wrap justify-center">
      <div className="sm:w-[50%]  flex  justify-start">
        <div className="w-full sm:h-[80%] flex  sm:justify-start justify-center ">
          <div className=" w-[80%] flex justify-between flex-col  ">
            <h1 className="font-serif dark:text-white mt-10 text-[50px] font-extralight leading-[65px] box  hover:scale-105 duration-50 ">
            Embrace Cloud
            </h1>

            <div className="sm:w-[100%]  ">
              <p className="font-serif dark:text-white mb-[82px] font-semibold">
              With Cloud-First accelerate innovation and optimize performance
              </p>
              <div className="flex flex-row ">
                <h1 className="font-serif dark:text-blue-500 text-xl font-bold hover:text-[#909090] w-full">
                Cloud Services
                </h1>

                <span className="dark:text-blue-500 text-xl font-bold ml-[56px] ">&#8594;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:w-[50%]  ">
        
      <Image
          className="sm:h-[80%] w-full hover:transform-style-3d  lg:m-auto ml-4 mr-4 hover:rotate-y-180 duration-1000 cursor-pointer"
          src={FourthI}
          
        />
      </div>
    </div>
}
export default Item4;

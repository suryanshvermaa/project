
import Image from "next/image";
import SecondI from "../../s2-image.e0b53b689fd9881066ec.png"; 

const Item2=()=>{
    return   <div className="w-[100%] flex sm:flex-row flex-col flex-wrap justify-center">
      <div className="sm:w-[50%]  flex  justify-start">
        <div className="w-full flex  sm:justify-start justify-center ">
          <div className=" w-[80%] flex justify-between flex-col  ">
            <h1 className="  font-serif dark:text-white mt-4  text-[50px] font-extralight leading-[65px] box  hover:scale-105 duration-50 ">
            Make Bolder Choices
            </h1>

            <div className="sm:w-[100%]  ">
              <p className="font-serif dark:text-white mb-[56px] font-semibold">
               
              Digital focused strategies to realize market-changing ideas

              </p>
              <div className="flex flex-row ">
                <h1 className="font-serif dark:text-blue-500 text-xl font-bold hover:text-[#909090] w-full">
                Build Better Apps
                </h1>

                <span className="dark:text-blue-500 text-xl font-bold ml-[56px] ">&#8594;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:w-[50%]  ">
        <Image
          className="h-full w-full hover:transform-style-3d  lg:m-auto m-8 hover:rotate-y-180 duration-1000 cursor-pointer"
          src={SecondI}
        />
      </div>
    </div>
}
export default Item2;
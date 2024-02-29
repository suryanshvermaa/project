
import Image from "next/image";
import ThirdI from "../../s3-image.8bc14b86ce6eff22c3cb.jpg";
const Item3=()=>{
    return   <div className="w-[100%] flex sm:flex-row flex-col flex-wrap justify-center">
      <div className="sm:w-[50%]  flex  justify-start">
        <div className="w-full flex  sm:justify-start justify-center ">
          <div className=" w-[80%] flex justify-between flex-col  ">
            <h1 className=" font-serif mt-6 dark:text-white text-[50px] font-extralight leading-[65px] box  hover:scale-105 duration-50 ">
            Innovate With Speed
            </h1>

            <div className="sm:w-[100%]  ">
              <p className="font-serif dark:text-white mb-[50px] font-semibold">
              Create higher quality software, deliver on customer expectations and business goals
              </p>
              <div className="flex flex-row ">
                <h1 className="font-serif dark:text-blue-500 text-xl font-bold hover:text-[#909090] w-full">
                  DevOps
                </h1>

                <span className="dark:text-blue-500 text-xl font-bold ml-[56px] ">&#8594;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:w-[50%]  ">
        <Image
          className="h-full w-full hover:transform-style-3d  lg:m-auto ml-4 mr-4 hover:rotate-y-180 duration-1000 cursor-pointer"
          src={ThirdI}
          
        />
      </div>
    </div>


}
export default Item3;

// import Navbar from "../Navbar/navbar"
import staffs from "./StaffsData";
import { BsArrowUpRight } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import Consultant from "./images/Consultant Image.png";

const Staffs = () => {
  return (
    <main className="w-full h-full md:overflow-hidden font-euclid">
      {/* <Navbar /> */}
      <div className="pt-[80px]  w-full h-full">
        <div className="lg:ml-[83px] md:ml-[50px] md:grid grid-cols-2 gap-2 px-4">
          <h1 className=" font-semibold text-[24px] leading-[30.43px] md:text-[28px] lg:w-[513px] md:w-[350px] md:h-[183px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic nisi,
            beatae fugiat.
          </h1>
          <p className=" font-regular lg:w-[449px] mt-[25px] md:w-[350px] md:h-[80px] md:mt-[103px] md:mr-[5px] break-words leading-[20.29px] text-[#54555B] text-[16px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa in sed
            adipisci officia incidunt? Ut, ex hic. Eligendi libero praesentium
            error doloremque, aut culpa, eaque veritatis impedit iure totam ab.
          </p>
        </div>

        <div className="hidden md:flex md:border-b-2 mt-[30px] md:border-b-[#D4D5DB] lg:ml-[83px] md:ml-[50px]   md:mr-[20px]"></div>
        <div className="w-full h-full bg-[#F6F7FF] px-4 mt-[60px] md:pb-[100px]  ">
          <div className="w-full h-full lg:pl-[83px] md:pl-[50px] flex flex-col items-center sm:flex-none sm:items-start">
            <h1 className="text-[#04050C] md:leading-[60.83px] leading-[41px]   md:text-[48px] text-[32px] md:flex    md:pt-[80px] font-semibold">
              Meet our <br /> staff team
            </h1>

            <div className="sm:grid  sm:grid-cols-2 sm:gap-2 md:grid-cols-3 md:gap-3 lg:grid-cols-4 lg:gap-4">
              {/* Accessing the staffs details from the Staffs data page */}
              {staffs.map((staff) => {
                const { id, title, position, img } = staff;
                return (
                  <div key={id} className="mt-[20px]">
                    <img className="h-[250px]" src={img} alt={title} />
                    <div>
                      <p className="text-[20px] leading-[25.63px] text-[#04050C] capitalize font-medium">
                        {title}
                      </p>
                      <p className="text-[16px] text-[#85868D] leading-[20.29px] font-normal">
                        {position}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="hidden md:flex md:border-b-2 mt-[70px] md:border-b-[#D4D5DB] lg:ml-[83px] md:ml-[50px]  md:mr-[20px]"></div>

          <div className="md:flex justify-between lg:ml-[83px] md:ml-[50px] mt-[80px] md:mt-[50px]">
            <h1 className=" font-semibold md:text-[48px] text-[24px] leading-[30px] md:leading-[50px] text-[#04050C]">
              Want to work for us?
            </h1>
            <div className="pt-[20px] md:pt-0">
              <p className="text-[#54555B]  lg:w-[469px] md:w-[350px] ">
                We believe it takes great people to make a great product. That’s
                why we hire not only the perfect professional fits, but people
                who embody out company values.
              </p>
              <div className="text-[#4D5DED] flex mt-[30px] w-full ">
                <p className=" font-normal text-[16px] underline underline-offset-4 cursor-pointer mb-[50px] md:mb-0">
                  See open positions
                </p>
                <BsArrowUpRight className="ml-[20px]" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-[750px] md:h-[650px] bg-[#04050C] flex flex-col-reverse md:flex-row justify-between">
          <div className="w-full md:w-[510px] px-[15px] lg:ml-[83px] md:ml-[50px] pt-[15px] md:pt-[40px]">
            <h1 className="text-[#FFFFFF] md:text-[38px] text-[24px] lg:text-[48px] leading-[30.43px] md:leading-[61px]    font-normal">
              Have a queston? <br /> Our team is happy <br /> to assist you
            </h1>
            <p className="text-[#B3B4BB] w-[300px] text-[16px]  font-normal leading-[20.29px] pt-[30px]">
              Ask about hostels around UNILAG, inspection process, pricing,
              implementation, or anything else concerning SACCOM. Our highly
              trained reps are standing by, ready to help.
            </p>
            <div className="flex border-b-[1px] md:border-b-2 mt-[70px] border-b-[#54555B]  "></div>
            <div className="w-full flex flex-col sm:flex-row md:justify-between pt-[30px] mb-[20px] md:mb-0">
              <button className="bg-[#4D5DED] flex items-center justify-center text-[20px] text-white h-[58px] w-full sm:w-[200px] lg:w-[280px] rounded-[15px] opacity-80 hover:opacity-100 ">
                {" "}
                <p>Contact us</p>{" "}
                <AiOutlineArrowRight className="mt-[5px] ml-[15px]" />{" "}
              </button>
              <p className="text-[#D4D5DB] pt-[15px] sm:pl-[30px] md:pl-0 flex justify-center">
                Or call <span className="text-[#4D5DED]"> +2348112345678 </span>{" "}
              </p>
            </div>
          </div>

          <div className="w-full md:w-[380px] h-full">
            <div className="bg-[#7E4BCF] md:w-[200px] w-[180px] h-[160px] md:rounded-[24px] rounded-r-[24px] relative z-0 md:h-[227px] mt-[10px]  md:mt-[30px]">
              <div className="absolute  flex justify-center top-[40px] left-[40px]  bg-[#EDEFFD] h-[220px] w-[300px]  md:w-[380px] md:h-[350px] rounded-[24px] md:rounded-l-[24px]">
                <img
                  className="h-[240px] md:h-[370px] -m-[20px]"
                  src={Consultant}
                  alt="consultant"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Staffs;

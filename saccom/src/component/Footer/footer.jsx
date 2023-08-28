// import styles from "./footer.module.css";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import { RiLinkedinLine } from "react-icons/ri";
import Backtotop from "../Back-to-top/backtotop";
import { Link } from "react-router-dom";
import SACCOM from '../Navbar/images/saccum design.svg.png'


const Footer = () => {
  return (
    <main className="w-full h-full mt-[150px] ">
      <div className="flex md:hidden ">
        <Backtotop />
      </div>
      <div className="hidden border-b-[1px]  border-b-[#D4D5DB] md:flex md:border-b-2    border-[1px] "></div>
      <div className="bg-[#FFFFFF] md:grid   md:grid-cols-4 md:gap-x-1 font-euclid font-normal w-full h-[450px] md:h-[150px] text-black pt-[35px]">
        <div className="pl-[15px] w-full lg:pl-[83px] md:pl-[20px] md:flex md:w-1/4">
          <div>
            <Link to="/">
        <div className=" h-[24px] md:w-[175px] md:h-[50px]  cursor-pointer ">
          <img src={SACCOM} alt="saccom" />
        </div>
      </Link>
            <p className="hidden md:flex text-[#2F3035] text-[12px] pt-[10px]">
              {" "}
              All rights reserved. © 2023
            </p>
          </div>
          <div className="hidden lg:ml-[40px] md:ml-[30px]  border-l-[#D4D5DB] md:flex md:border-l-2 h-[75px]"></div>
        </div>

        <div className="pl-[15px] md:flex pt-[25px] md:pl-0 md:pt-0 md:ml-[30px] md:w-1/4">
          <div>
            <p className="text-[20px]">Follow us</p>
            <div className="flex justify-between w-[120px] pt-[15px] ">
              <AiOutlineInstagram size={26} className="cursor-pointer" />
              <FiTwitter size={26} className="cursor-pointer" />
              <RiLinkedinLine size={26} className="cursor-pointer" />
            </div>
          </div>

          <div className="hidden lg:ml-[40px] md:ml-[30px]  border-l-[#D4D5DB] md:flex md:border-l-2 h-[75px]"></div>
        </div>

        <ul className="text-[#2F3035] pl-[15px] md:pl-0 md:flex text-[12px] leading-[15.2px] ">
          <Link to="/about">
            <li className="mt-[25px]  md:pt-0 cursor-pointer w-[100px] md:w-[70px] ">
              About us
            </li>
          </Link>

          <Link to="/staff">
            <li className="mt-[25px] md:pt-0 cursor-pointer w-[100px] md:w-[70px] ">
              Staffs
            </li>
          </Link>

          <li className="mt-[25px]  md:pt-0 cursor-pointer w-[100px] md:w-[70px]">
            Terms
          </li>
          <li className="mt-[25px] md:pt-0 cursor-pointer w-[100px] md:w-[100px]">
            Privacy policies
          </li>
          <div className="hidden lg:ml-[40px] md:ml-[30px]  border-l-[#D4D5DB] md:flex md:border-l-2 h-[75px]"></div>
        </ul>

        <div className="w-full flex flex-col items-center pt-[50px] md:hidden">
          <div className="border-b-[#D4D5DB] border-b-[1px] w-[95%] md:hidden "></div>
          <div className="text-[#2F3035] text-[12px] pt-[25px]">
            <p> All rights reserved. © 2023</p>
          </div>
        </div>

        <div className="hidden md:flex ">
          <Backtotop />
        </div>
      </div>
    </main>
  );
};

export default Footer;

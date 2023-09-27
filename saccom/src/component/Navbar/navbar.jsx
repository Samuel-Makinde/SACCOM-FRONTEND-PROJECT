import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import person1 from "./images/person 1.png";
import person2 from "./images/person 2.png";
import aboutUs from "./images/about us.png";
import staffs from "./images/staffs.png";
import styles from "./navbar.module.css";
import love from "./images/love.png";
import cart from "./images/cart.png";
import search from "./images/search.png";
import person3 from "./images/personPlaceholder.png";
import logoImage from "./images/saccum design.svg.png";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [lgtoggle, setLgToggle] = useState(false);

  const handleMouseOver = () => {
    setLgToggle(true);
    console.log("calling toggle");
  };
  const handleMouseOut = () => {
    setLgToggle(false);
    console.log("removing toggle");
  };

  // To set mobile navbar toggle
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <main className="fixed w-full h-[60px] md:h-[90px] flex items-center md:grid md:grid-cols-3 md:gap-4 px-4 bg-white z-20 font-euclid">
      <div onClick={handleToggle} className="md:hidden z-10">
        {toggle ? (
          <div className="w-[32px] h-[32px] bg-[#EDEFFD] cursor-pointer flex justify-center items-center rounded-[20px]">
            <FaTimes className="text-[#54555B] w-[18px] h-[16px]   transition-transform ease-in-out delay-1000 duration-1000 transform hover:scale-110" />
          </div>
        ) : (
          <FaBars className="text-[#54555B] w-[18px] h-[16px]  cursor-pointer transition-transform hover:scale-110 ease-in-out delay-1000 duration-1000 transform" />
        )}
      </div>
      <Link to="/">
        <div className="w-[93px] h-[24px] md:w-[175px] md:h-[50px] ml-[20px] cursor-pointer ">
          <img src={logoImage} alt="logoImage" />
        </div>
      </Link>
      {/* mobile-view-navbar */}
      <ul
        className={`${
          toggle ? "block" : "hidden"
        } w-3/4 bg-white absolute top-0 left-0 h-screen md:hidden flex flex-col  pt-[100px]   ${
          styles.mobile
        }`}
      >
        <Link to="/signup">
          <li className="text-[#04050C] leading-[20px] text-[16px] flex px-[24px] py-[16px]  font-medium">
            <img src={person1} alt="account" className="cursor-pointer" />
            <h1 className="pl-[10px] cursor-pointer">Create account</h1>
          </li>
        </Link>

        <Link to="/login">
          <li className="text-[#54555B] leading-[20px] text-[16px] flex  px-[24px] py-[16px] font-normal ">
            <img src={person2} alt="login" className="cursor-pointer" />
            <h1 className="pl-[10px] cursor-pointer">Log in</h1>
          </li>
        </Link>

        <Link to="/">
          <li className="text-[#54555B] leading-[20px] text-[16px] flex  px-[24px] py-[16px] font-normal ">
            <AiOutlineHome size={20} />
            <h1 className="pl-[10px] cursor-pointer">Home</h1>
          </li>
        </Link>

        <Link to="/savedproduct">
          <li className="text-[#54555B] leading-[20px] text-[16px] flex  px-[24px] py-[16px] font-normal ">
            <img src={love} alt="cart" className="cursor-pointer" />
            <h1 className="pl-[7px] cursor-pointer">Saved hostel</h1>
          </li>
        </Link>

        <Link to="/cart">
          <li className="text-[#54555B] leading-[20px] text-[16px] flex  px-[24px] py-[16px] font-normal ">
            <img src={cart} alt="cart" className="cursor-pointer" />
            <h1 className="pl-[10px] cursor-pointer">Interests</h1>
          </li>
        </Link>

        <li className=" flex border-b-2 mt-[10px] border-b-[#D4D5DB] mx-[15px] "></li>

        <Link to="/about">
          <li className="text-[#54555B] leading-[20px] text-[16px] flex  px-[24px] py-[16px] font-normal ">
            <img src={aboutUs} alt="about" className="cursor-pointer" />
            <h1 className="pl-[10px] cursor-pointer">About us</h1>
          </li>
        </Link>

        {/* <li className="text-[#54555B] leading-[20px] text-[16px] flex  px-[24px] py-[16px] font-normal ">
          <img src={contacts} alt="contact" className="cursor-pointer" />
          <h1 className="pl-[10px] cursor-pointer">Contact us</h1>
        </li> */}

        <Link to="/staff">
          <li className="text-[#54555B] leading-[20px] text-[16px] flex  px-[24px] py-[16px] font-normal ">
            <img src={staffs} alt="staffs" className="cursor-pointer" />
            <h1 className="pl-[10px] cursor-pointer">Staff page</h1>
          </li>
        </Link>
      </ul>
      <div className="absolute flex right-2">
        <p className="w-[24px] h-[24px] flex items-center justify-center bg-[#D3D7FB] rounded-[40px] md:hidden">
          <img src={person3} alt="person" />
        </p>
      </div>
      {/* big screen topBar */}
      {/* <div className="hidden md:flex lg:w-[400px] md:w-[250px] h-full items-center justify-center ">
        <input
          type="text"
          className="relative w-[250px] lg:w-[400px] rounded-[40px] h-[40px] border-solid border-2 border-[#54555B] placeholder-[#B3B4BB] pl-[16px]"
          placeholder="Search through hostels"
          
        />
        <div className="bg-blue-700 w-[36px] h-[30px] absolute ml-[200px] lg:ml-[350px] rounded-[40px] cursor-pointer">
          <img src={search} alt="search" className="pt-[5px] pl-[6px]" />
        </div>
      </div> */}
      <SearchBar />

      <div className=" hidden md:flex flex-col w-full h-full items-center justify-center">
        <div className=" w-[150px] lg:w-[150px] flex justify-evenly rounded-[40px] items-center h-[40px] border-solid border-2 border-[#54555B] ">
          <div className="relative">
            <p
              onMouseOver={handleMouseOver}
              className="w-[18px] h-[16px] mr-[3px] cursor-pointer "
            >
              <FaBars className="text-[#54555B]" />
            </p>
            {lgtoggle && (
              <div
                onMouseLeave={handleMouseOut}
                className=" absolute  h-full w-[300px]  mt-[30px]  mr-[100px] "
              >
                <ul className="mr-[20px] bg-white rounded-[24px] shadow-2xl ">
                  <Link to="/signup">
                    <li className="flex text-[#54555B] leading-[20px] text-[16px]   px-[24px] py-[16px] font-normal">
                      <img
                        src={person1}
                        alt="account"
                        className="cursor-pointer"
                      />
                      <h1 className="pl-[10px] cursor-pointer">
                        Create account
                      </h1>
                    </li>
                  </Link>

                  <Link to="/login">
                    <li className="text-[#54555B] leading-[20px] text-[16px] flex  px-[24px] py-[16px] font-normal">
                      <img
                        src={person2}
                        alt="login"
                        className="cursor-pointer"
                      />
                      <h1 className="pl-[10px] cursor-pointer">Log in</h1>
                    </li>
                  </Link>

                  <Link to="/">
                    <li className="text-[#54555B] leading-[20px] text-[16px] flex  px-[24px] py-[16px] font-normal ">
                      <AiOutlineHome size={20} />
                      <h1 className="pl-[10px] cursor-pointer">Home</h1>
                    </li>
                  </Link>

                  <Link to="/savedproduct">
                    <li className="text-[#54555B] leading-[20px] text-[16px] flex  px-[24px] py-[16px] font-normal ">
                      <img src={love} alt="cart" className="cursor-pointer" />
                      <h1 className="pl-[7px] cursor-pointer">Saved hostel</h1>
                    </li>
                  </Link>

                  <Link to="/cart">
                    <li className="text-[#54555B] leading-[20px] text-[16px] flex  px-[24px] py-[16px] font-normal ">
                      <img src={cart} alt="cart" className="cursor-pointer" />
                      <h1 className="pl-[10px] cursor-pointer">Cart</h1>
                    </li>
                  </Link>

                  <li className=" flex border-b-2 mt-[10px] border-b-[#D4D5DB] mx-[15px] "></li>

                  <Link to="/about">
                    <li className="text-[#54555B] leading-[20px] text-[16px] flex  px-[24px] py-[16px] font-normal ">
                      <img
                        src={aboutUs}
                        alt="about"
                        className="cursor-pointer"
                      />
                      <h1 className="pl-[10px] cursor-pointer">About us</h1>
                    </li>
                  </Link>

                  {/* <li className="text-[#54555B] leading-[20px] text-[16px] flex  px-[24px] py-[16px] font-normal ">
                    <img
                      src={contacts}
                      alt="contact"
                      className="cursor-pointer"
                    />
                    <h1 className="pl-[10px] cursor-pointer">Contact us</h1>
                  </li> */}

                  <Link to="/staff">
                    <li className="text-[#54555B] leading-[20px] text-[16px] flex  px-[24px] py-[16px] font-normal ">
                      <img
                        src={staffs}
                        alt="staffs"
                        className="cursor-pointer"
                      />
                      <h1 className="pl-[10px] cursor-pointer">Staff page</h1>
                    </li>
                  </Link>
                </ul>
              </div>
            )}
          </div>

          <p className="w-[24px] h-[24px] flex items-center justify-center bg-[#D3D7FB] rounded-[40px]">
            <img src={person3} alt="person" />
          </p>

          <p className="text-[16px] text-[#54555B]">Account</p>
        </div>
        {/* <div>
          {lgtoggle && (
            <div className=" absolute  bg-blue-900 md:right-[80px] lg:right-[150px] h-full w-[400px] "></div>
          )}
        </div> */}
      </div>
    </main>
  );
};

export default Navbar;

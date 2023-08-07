import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import roomImage from "./Image.png";
import "./login.css";
import { AiOutlineMail } from "react-icons/ai";
import { BiKey } from "react-icons/bi";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// import roomImage from './Image.png';
// import Main from '../Main-Page/Main';

const formSchema = yup.object().shape({
  email: yup
    .string()
    .required("email can't be empty")
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Invalid email address"
    ),
  password: yup.string().required("Password is required"),
});

function Login() {
  // const [isAuthenticated, setIsAuthenticated] = useState("true");
  const {
    register,
    // handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  // const onSubmit = (date) => {
  //   setIsAuthenticated("false");
  // };

  const [passwordVisibile, passwordNotVisible] = useState(false);
  const togglePassword = () => {
    passwordNotVisible((prevState) => !prevState);
  };
  return (
    <main className="w-full h-full md:h-[726px]  bg-[#FFFFFF] px-4 font-euclid">
      <h1 className="text-[#2F3035] text-[32px] font-bold mt-[1px] md:ml-[56px] header-hi">
        SACCOM
      </h1>
      <div className=" text-black w-full h-full px-4   md:flex md:justify-center md:items-center ">
        <form className="h-full w-full md:h-[626px] mb-8 md:mb-0  mt-[30px] md:w-[400px] lg:w-[600px] flex flex-col justify-center items-center">
          <div className="w-full h-full md:pr-[60px] ">
            <h2 className="text-[#2F3035] text-center text-[24px] md:text-[32px] leading-[60.86px] font-semibold">
              Welcome back
            </h2>
            <p className=" text-[#85868D] text-[16px] text-center leading-[20.29px] pt-[10px] align-middle">
              Lorem ipsum dolor sit amet consectetur. Malesuada ultricies ut
              proin tempus. Dolor rhoncus eget platea mi.
            </p>
            <div className="relative w-full flex flex-col-reverse   mt-[50px]">
              <label
                className="absolute top-[4px] left-[50px] text-[#04050C] md:text-[12px] leading-[15.22px]"
                htmlFor="email"
              >
                Email address
              </label>
              <AiOutlineMail
                size={24}
                className="absolute top-[20px] left-[10px] text-[#85868D]"
              />
              <input
                type="email"
                id="email"
                name="email"
                {...register("email")}
                placeholder="Email@address.com"
                className="w-full h-[60px] border-2  border-[#B3B4BB] rounded-[5px]"
                style={{ paddingLeft: "50px" }}
              ></input>
            </div>
            <div className="errorContainer">
              <small
                className="errorMsg"
                style={{ visibility: errors.email ? "visible" : "hidden" }}
              >
                {errors.email?.message}
              </small>
            </div>
            <div className="relative w-full flex flex-col-reverse mt-[30px] md:mt-[50px] ">
              <label
                className="absolute top-[4px] left-[50px] text-[#04050C] md:text-[12px] leading-[15.22px]"
                htmlFor="password"
              >
                password
              </label>
              <BiKey
                size={24}
                className="absolute top-[20px] left-[10px] text-[#85868D]"
              />
              <input
                type={passwordVisibile ? "text" : "password"}
                id="password"
                name="password"
                {...register("password")}
                placeholder="************"
                className="w-full h-[60px] border-2  border-[#B3B4BB] rounded-[5px]"
                style={{ paddingLeft: "50px" }}
              ></input>
              <button
                type="button"
                onClick={togglePassword}
                className="absolute top-1/3 right-[20px] bg-transparent border-none text-red-900"
              >
                {passwordVisibile ? "Hide" : "show"}
              </button>
            </div>
            <div className="flex justify-between">
              <small
                className="errorMsg"
                style={{ visibility: errors.password ? "visible" : "hidden" }}
              >
                {errors.password?.message}{" "}
              </small>
              <p className="text-[#4D5DED] text-[12px] leading-[15.22px] mt-[5px] cursor-pointer">
                Forgot Password?
              </p>
            </div>

            <div className="bg-[#4D5DED] text-center text-[16px] md:text-[20px] rounded-[12px] mt-[60px]  px-[20px] py-[20px] w-full h-[60px]  text-white">
              <button type="submit">Log in</button>
            </div>
            <p className="text-[#54555B] leading-[15.22px] text-[12px] mt-[20px]">
              <input type="checkbox" id="checkbox" /> Keep me logged in.
            </p>
            <p className="text-[#2F3035] text-[16px] leading-[20.22px] font-normal mt-[30px] text-center">
              Don&apos;t have an account?{" "}
              <Link to="/signup">
                <button
                  className="text-[#4D5DED]"
                  // onClick={() => props.onFormSwitch("/signup")}
                >
                  Sign Up.
                </button>
              </Link>
            </p>
          </div>
        </form>

        <div className="hidden md:flex h-[626px] w-[400px] lg:w-[500px] ">
          <img src={roomImage} alt="roomImage" className="w-full h-full" />
        </div>
      </div>
    </main>
  );
}

// Login.propTypes = {
//   onFormSwitch: PropTypes.func.isRequired,
// };
export default Login;

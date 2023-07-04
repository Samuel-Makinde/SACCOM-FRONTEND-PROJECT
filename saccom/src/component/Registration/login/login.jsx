import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import roomImage from "./Image.png";
import "./login.css";
import { AiOutlineMail } from "react-icons/ai";
import { BiKey } from "react-icons/bi";

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

function Login(props) {
  const [isAuthenticated, setIsAuthenticated] = useState("true");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (date) => {
    setIsAuthenticated("false");
  };

  const [passwordVisibile, passwordNotVisible] = useState(false);
  const togglePassword = () => {
    passwordNotVisible((prevState) => !prevState);
  };
  return (
    <main className="w-full h-full md:h-[726px] bg-[#FFFFFF]  ">
      <h1 className="text-[#2F3035] text-[32px] font-bold mt-[1px] md:ml-[56px] header-hi">
        SACCOM
      </h1>
      <div className=" text-black w-full h-full px-4  md:flex md:justify-center md:items-center ">
        <form
          className="h-full w-full md:h-[526px] md:w-[400px] lg:w-[600px] flex flex-col justify-center items-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="w-full h-full ">
            <h2 className="text-[#2F3035] text-center md:text-[32px] leading-[60.86px] font-semibold">
              Welcome back
            </h2>
            <p className=" text-[#85868D] text-[16px] text-center leading-[20.29px] align-middle">
              Lorem ipsum dolor sit amet consectetur. Malesuada ultricies ut
              proin tempus. Dolor rhoncus eget platea mi.
            </p>

            <div className="relative w-full flex flex-col-reverse">
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
                className=""
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

            <div className="relative w-full flex flex-col-reverse">
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
                style={{ paddingLeft: "50px" }}
              ></input>
              <button
                type="button"
                onClick={togglePassword}
                className="passwordToggle"
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
              <p>Forgot Password?</p>
            </div>
            {/* <p>Forgot Password?</p> */}
          </div>
          <button
            className="bg-[#4D5DED] rounded-[12px] px-[20px] py-[10px] w-[328px] h-[58px] text-white"
            type="submit"
          >
            Login
          </button>
          <p>
            Don&apos;t have an account?{" "}
            <button onClick={() => props.onFormSwitch("register")}>
              Create Account
            </button>
          </p>
        </form>

        <div className="hidden md:flex h-[526px] w-[400px] lg:w-[500px] ">
          <img src={roomImage} alt="roomImage" className="w-full h-full" />
        </div>
      </div>
    </main>
  );
}

export default Login;

import { useState } from "react";
import styles from "./Registration.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import bedimage from "./images/Image.png";
import axios from "axios";
import { RxPerson } from "react-icons/rx";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { BiKey } from "react-icons/bi";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// import GmailRegistration from "./GmailRegistration";

// using yup library to validate input
const formSchema = yup.object().shape({
  firstName: yup.string().required("first name can't be empty"),
  lastName: yup.string().required("last name is required"),
  phoneNumber: yup
    .string()
    .required("phone number is required")
    .matches(/^\d{11}$/, "phone number must be exactly 11 digits"),
  email: yup
    .string()
    .required("email can't be empty")
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Invalid email address"
    ),
  password: yup.string().required("Password is required"),
  cpassword: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("password")], "Passwords do not match"),
});

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post(`http://localhost:4000/api/v1/register`, {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phoneNumber,
        password: data.password,
      })
      .then((response) => {
        console.log("sending", response);
      })
      .catch((error) => {
        console.log("not sending", error);
      });
  };

  const [passwordVisibile, passwordNotVisible] = useState(false);
  const togglePassword = () => {
    passwordNotVisible((prevState) => !prevState);
  };

  const [cpasswordVisibile, passwordNotVisibleC] = useState(false);
  const toggleCPassword = () => {
    passwordNotVisibleC((prevState) => !prevState);
  };

  return (
    <main className="w-full h-full px-4  font-euclid">
      <div className="w-full h-full">
        <h1 className="text-[#2F3035] text-[32px] font-bold mt-[1px] md:ml-[56px] header-hi">
          SACCOM
        </h1>
        <div className="text-black w-full h-full px-4  md:flex md:justify-center mt-[40px]">
          <form
            className="h-full w-full mb-8 md:mb-0 md:h-[726px] md:w-[400px] lg:w-[600px] flex flex-col justify-center items-center md:pr-[60px]"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className="text-[#04050C] text-[20px] md:text-[48px] font-semibold">
              Create your account
            </h1>
            <p className=" text-[#85868D] text-[16px] text-center leading-[20.29px] pt-[10px] align-middle">
              Lorem ipsum dolor sit amet consectetur. Malesuada ultricies ut
              proin tempus. Dolor rhoncus eget platea mi.
            </p>

            <div className="w-full h-full mt-[60px] ">
              <div className="w-full  flex flex-col md:flex-row justify-between  ">
                <div className="w-full md:w-5/12">
                  <div className="relative  flex flex-col-reverse ">
                    <label
                      className="absolute top-[4px] left-[50px] text-[#04050C] md:text-[12px] leading-[15.22px]"
                      htmlFor="firstname"
                    >
                      first name{" "}
                    </label>
                    <RxPerson
                      size={24}
                      className="absolute top-[20px] left-[10px] text-[#85868D]"
                    />
                    <input
                      type="text"
                      id="firstname"
                      className="  h-[60px] border-2  border-[#B3B4BB] rounded-[5px]"
                      name="firstName"
                      {...register("firstName")}
                      placeholder="first name"
                      style={{ paddingLeft: "50px" }}
                    />
                  </div>

                  <div className={styles.errorContainer}>
                    <small
                      className={styles.errorMsg}
                      style={{
                        visibility: errors.firstName ? "visible" : "hidden",
                      }}
                    >
                      {errors.firstName?.message}
                    </small>
                  </div>
                </div>

                <div className="w-full md:w-5/12">
                  <div className="relative   flex flex-col-reverse ">
                    <label
                      className="absolute top-[4px] left-[50px] text-[#04050C] md:text-[12px] leading-[15.22px]"
                      htmlFor="lastname"
                    >
                      Last name{" "}
                    </label>
                    <RxPerson
                      size={24}
                      className="absolute top-[20px] left-[10px] text-[#85868D]"
                    />
                    <input
                      type="text"
                      id="lastname"
                      className=" h-[60px] border-2  border-[#B3B4BB] rounded-[5px]"
                      name="lastName"
                      {...register("lastName")}
                      placeholder="last name"
                      style={{ paddingLeft: "50px" }}
                    />
                  </div>
                  <div className={styles.errorContainer}>
                    <small
                      className={styles.errorMsg}
                      style={{
                        visibility: errors.lastName ? "visible" : "hidden",
                      }}
                    >
                      {errors.lastName?.message}{" "}
                    </small>
                  </div>
                </div>
              </div>

              {/* <label htmlFor="lastname">last name</label>
              <input
                type="text"
                id="lastname"
                className={styles.lastName}
                name="lastName"
                {...register("lastName")}
                placeholder="last name"
              /> */}

              <div className="w-full ">
                <div className=" relative w-full flex flex-col-reverse">
                  <label
                    className="absolute top-[4px] left-[50px] text-[#04050C] md:text-[12px] leading-[15.22px]"
                    htmlFor="phonenumber"
                  >
                    phone number
                  </label>
                  <BsTelephone
                    size={24}
                    className="absolute top-[20px] left-[10px] text-[#85868D]"
                  />
                  <input
                    type="text"
                    id="phonenumber"
                    name="phoneNumber"
                    {...register("phoneNumber")}
                    placeholder="phone number"
                    className="w-full h-[60px] border-2  border-[#B3B4BB] rounded-[5px]"
                    style={{ paddingLeft: "50px" }}
                  />
                </div>
                <div className={styles.errorContainer}>
                  <small
                    className={styles.errorMsg}
                    style={{
                      visibility: errors.phoneNumber ? "visible" : "hidden",
                    }}
                  >
                    {errors.phoneNumber?.message}
                  </small>
                </div>
              </div>

              <div className="w-full">
                <div className="relative w-full flex flex-col-reverse">
                  <label
                    className="absolute top-[4px] left-[50px] text-[#04050C] md:text-[12px] leading-[15.22px]"
                    htmlFor="email"
                  >
                    Email
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
                    placeholder="email address"
                    className="w-full h-[60px] border-2  border-[#B3B4BB] rounded-[5px]"
                    style={{ paddingLeft: "50px" }}
                  />
                </div>
              </div>

              <div className={styles.errorContainer}>
                <small
                  className={styles.errorMsg}
                  style={{ visibility: errors.email ? "visible" : "hidden" }}
                >
                  {errors.email?.message}
                </small>
              </div>
            </div>

            <div className="w-full">
              <div className="relative w-full flex flex-col-reverse">
                <label
                  className="absolute top-[4px] left-[50px] text-[#04050C] md:text-[12px] leading-[15.22px]"
                  htmlFor="password"
                >
                  Password
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
                  placeholder="********"
                  className="w-full h-[60px] border-2  border-[#B3B4BB] rounded-[5px]"
                  style={{ paddingLeft: "50px" }}
                />
                <button
                  type="button"
                  onClick={togglePassword}
                  className="absolute top-1/3 right-[20px] bg-transparent border-none text-red-900"
                >
                  {passwordVisibile ? "Hide" : "show"}
                </button>
              </div>
              <div className={styles.errorContainer}>
                <small
                  className={styles.errorMsg}
                  style={{ visibility: errors.password ? "visible" : "hidden" }}
                >
                  {errors.password?.message}{" "}
                </small>
              </div>
            </div>

            <div className="w-full">
              <div className="relative w-full flex flex-col-reverse ">
                <label
                  className="absolute top-[4px] left-[50px] text-[#04050C] md:text-[12px] leading-[15.22px]"
                  htmlFor="cpassword"
                >
                  Comfirm Password
                </label>
                <BiKey
                  size={24}
                  className="absolute top-[20px] left-[10px] text-[#85868D]"
                />
                <input
                  type={cpasswordVisibile ? "text" : "password"}
                  id="cpassword"
                  name="cpassword"
                  {...register("cpassword")}
                  placeholder="**********"
                  className="w-full h-[60px] border-2  border-[#B3B4BB] rounded-[5px]"
                  style={{ paddingLeft: "50px" }}
                />
                <button
                  type="button"
                  onClick={toggleCPassword}
                  className="absolute top-1/3 right-[20px] bg-transparent border-none text-red-900"
                >
                  {cpasswordVisibile ? "Hide" : "show"}
                </button>
              </div>
              <div className={styles.errorContainer}>
                <small
                  className={styles.errorMsg}
                  style={{
                    visibility: errors.cpassword ? "visible" : "hidden",
                  }}
                >
                  {errors.cpassword?.message}{" "}
                </small>
              </div>
            </div>

            <div className="bg-[#4D5DED] text-[16px] md:text-[20px] rounded-[12px] mt-[30px]  px-[20px] pt-[20px] w-full h-[60px] cursor-pointer text-white text-center">
              <button type="submit">Create Account</button>
            </div>

            <p className="text-[#54555B] text-[12px] mt-[15px] text-center">
              By siging up, you agree to the{" "}
              <span className="text-[#4D5DED] cursor-pointer">
                {" "}
                Terms of Service
              </span>{" "}
              and{" "}
              <span className="text-[#4D5DED] cursor-pointer">
                Privacy Policy
              </span>
              , including{" "}
              <span className="text-[#4D5DED] cursor-pointer">Cookie use</span>.
            </p>
            <p className="text-[#2F3035] text-[16px] md:text-[20px] mt-[10px]">
              Have an account?{" "}
              <Link to="/login">
                <button
                  className="text-[#4D5DED] cursor-pointer"
                  // onClick={() => props.onFormSwitch("/login")}
                >
                  login
                </button>
              </Link>
            </p>
          </form>
          <div className="hidden md:flex h-[776px] w-[400px] lg:w-[500px]">
            <img src={bedimage} alt="bedImages" />
          </div>
        </div>
      </div>
    </main>
  );
}

SignUp.propTypes = {
  onFormSwitch: PropTypes.func.isRequired,
};

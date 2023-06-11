import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from "yup";
import roomImage from './Image.png'
import './login.css'

// import roomImage from './Image.png';
// import Main from '../Main-Page/Main';


const formSchema = yup.object().shape({
  email: yup.string().required("email can't be empty")
    .matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,"Invalid email address"),
  password: yup.string().required("Password is required"),
})


function Login(props) {
    const [isAuthenticated, setIsAuthenticated] = useState('true');
    const {register, handleSubmit, formState : {errors}} = useForm({
      resolver: yupResolver(formSchema)
    });

    const onSubmit = (date) => {
        setIsAuthenticated('false')
    }

    const [passwordVisibile, passwordNotVisible] = useState(false);
    const togglePassword = () =>{
      passwordNotVisible((prevState) => !prevState);
    }
  return (
    <div className=' text-black w-full h-screen md:flex md:justify-center  md:items-center'>
            <form className='flex flex-col justify-center items-center' onSubmit={handleSubmit(onSubmit)}>
                <div>
        <h1 className='text-[#2F3035] text-[32px] font-bold mt-[1px] md:ml-[56px] header-hi' >SACCOM</h1>

                    <h2 className='text-[#2F3035] text-[24px] leading-7 font-normal' >Welcome back</h2>
                <label htmlFor='email'>email address</label>
                <input type='email' id='email' name='email' {...register("email")} placeholder='email address'></input>
                <div className='errorContainer'>
            <small className='errorMsg' style={{ visibility: errors.email ? "visible" : "hidden" }}>{errors.email?.message}</small>
                </div>

                <div className='passwordInput'>
                  <label htmlFor='password'>password</label>
                <input  type={passwordVisibile ? 'text' : 'password'} id='password' name='password' {...register("password")}placeholder='************'></input>
                <button
                type='button'
                onClick={togglePassword}
                className='passwordToggle'
                >{passwordVisibile ? 'Hide' : 'show'}</button>

                </div>
                
                <div className='errorContainer' >
             <small className='errorMsg' style={{ visibility: errors.password ? "visible" : "hidden" }}>{errors.password?.message} </small>
          </div>
          <p >Forgot Password?</p>
                </div>
                <button className='bg-[#4D5DED] rounded-[12px] px-[20px] py-[10px] w-[328px] h-[58px] text-white' type='submit'>Login</button>
                <p >Don&apos;t have an account? <button  onClick={() => props.onFormSwitch('register')}>Create Account</button></p>
            </form>

            <div className='hidden md:flex' >
              <img src={roomImage} alt='roomImage' />
            </div>
        
    </div>
    
  )
}

export default Login
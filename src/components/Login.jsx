import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import LoadingBar from 'react-top-loading-bar'
import React,{useRef} from 'react';
import { Link } from 'react-router-dom';
// import { userdataform } from '../slices/SignUpData';
import { data } from 'autoprefixer';
import { apiConnecter } from '../services/apiconnecter';
import {useNavigate} from 'react-router-dom'
import { useSelector ,useDispatch} from 'react-redux';
import { setUserImage ,setcType,setuserdata,isLogin,setLogin} from '../slices/UserDataSlice';
import logo from '../assets/IMG_20230909_193215-removebg-preview-removebg-preview.png'
const Login = () => {
  const ref = useRef();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const Navigate = useNavigate();
  const dispatch = useDispatch();
   async function userLogin(data){
    const toastid = toast.loading("Loading...");
   try{
    if (ref.current) {
      ref.current.continuousStart(); // Start the loading animation
  }
    console.log(data);
    const res = await apiConnecter("POST","https://e-ballot-server.vercel.app/api/v1/auth/login",data);
    console.log(res);
    if (ref.current) {
      ref.current.complete(); // Complete the loading animation
    }
    if(res.status == 201){
      
    toast.error(res.data.message);
    toast.dismiss(toastid)
    return;
    }
    toast.success("Login Succefully");
    console.log(res);
    const imageurl = res.data.userDetails.Image;
    const ctype = res.data.userDetails.accounttype;
    
    dispatch(setUserImage(imageurl));
    dispatch(setcType(ctype));
    dispatch(setuserdata(res.data.userDetails));
    dispatch(setLogin(true));
    console.log(imageurl,ctype);
    toast.dismiss(toastid)
    Navigate("/UserHome")
  }
  catch(err){
    
    if (ref.current) {
      ref.current.complete(); // Complete the loading animation
    }
    toast.dismiss(toastid)
    toast.error("Network error , please try again")
    
    console.log(err);
   }
   }
  return (
    <div className="flex h-screen flex-col items-center bg-white object-cover">
    <LoadingBar color="red" ref={ref} />
    
      <div className="flex max-w-[1600px] w-full h-full object-cover relative">
        <ul className="notifications"></ul>
        {/* Left bar */}
        <Link to="/" className="absolute top-0 left-0 flex gap-2 items-center font-bold text-white primary-color px-3 py-2 rounded-lg">
          <i className="fa fa-home fa-2x flex items-center justify-center text-yellow-300" aria-hidden="true"></i>
          Go To Home
        </Link>
        <div className="primary-color w-[40%] h-full hidden items-center justify-center md:flex lg:flex">
          <img src={logo} alt="" />
        </div>

        {/* Right bar */}
        <div className="flex object-cover max-w-[700px] w-[100%] xl:w-[60%] lg:w-[60%] items-center justify-center flex-col mx-auto relative ">
          <form  onSubmit={handleSubmit(userLogin)}
          className="flex object-cover w-[60%] min-w-[440px] md:w-[80%] lg:w-[80%] py-3  shadow-xl shadow-black items-center justify-center flex-col mx-auto  rounded-md" id="form">
            <legend className="text-3xl p-2 font-bold text-[#1d3a59] mb-6 mx-auto flex items-center justify-center ">Login</legend>

            {/* email */}
            <label className="flex p-2 min-w-[220px] md:max-w-[270px] lg:max-w-[370px] flex-col w-[50%] rounded-md ">
              Email:
              <input {...register('email')} type="email" name="email" placeholder="Enter Your Email" className="border border-black p-2 py-1 rounded-md text-sm shadow-lg" />
            </label>

            {/* Password */}
            <label className="flex p-2 min-w-[220px] md:max-w-[270px] lg:max-w-[370px] flex-col w-[50%] rounded-md">
              Password:
              <input  {...register('password')} type="password" name="password" placeholder="Enter Your Password" className="border border-black p-2 py-1 rounded-md text-sm shadow-lg" />
            </label>

            {/* Login and Sign Up buttons */}
            <button type='submit' className="flex max-w-[50%] w-[30%] lg:max-w-[290px] min-w-[180px] md:max-w-[320px] bg-black flex-col justify-between items-center px-2 py-2 border text-white hover:bg-blue-900 border-slate-800 hover:text-white group transition-all duration-200 rounded-xl hover:scale-95 shadow-xl hover:shadow-blue-700 shadow-black hover:shadow-xl mt-4">
              Login
            </button>

            <div className="flex max-w-[50%] w-[80%] lg:max-w-[290px] min-w-[180px]   flex-col justify-between items-center px-2 py-2  mt-5">
              <p> Or Sign Up Using</p>
              <div className="text-black  flex flex-row gap-2 mr-5 border-primary-color mt-3">
                <span className="flex items-center justify-center border text-white rounded-full h-9 w-9 bg-blue-600 hover:text-white transition-all duration-200">
                  <i className="fa fa-facebook-square" aria-hidden="true"></i>
                </span>
                <span className="flex items-center justify-center border text-white rounded-full h-9 w-9 bg-red-600 hover:text-white transition-all duration-200">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </span>
                <span className="flex items-center justify-center border text-white rounded-full h-9 w-9 bg-green-600 hover:text-white transition-all duration-200">
                  <i className="fa fa-google" aria-hidden="true"></i>
                </span>
              </div>
            </div>

            <div className="flex justify-center items-center flex-col mt-20 gap-2">
              <p> Have an account?</p>
              <Link to="/signup" className="font-bold">Sign Up</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

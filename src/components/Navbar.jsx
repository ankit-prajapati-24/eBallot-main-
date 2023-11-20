import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo from '../assets/IMG_20230909_193215-removebg-preview-removebg-preview.png'
import UserDataSlice from '../slices/UserDataSlice';
import {NavLink} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import { useSelector ,useDispatch} from 'react-redux';
import { setUserImage ,setcType,setuserdata,isLogin,setLogin} from '../slices/UserDataSlice';
import OurServices from '../common/OurServices';
const Navbar = () => {
  const nevigate = useNavigate();
  const userdata = useSelector((state) => state.UserData.userdata);
  
  // const userdata = useSelector((state) => state.UserData.userdata);
  const dispatch = useDispatch();
    const userimage = useSelector((state) => state.UserData.Image);
    const  isLogin = useSelector((state) => state.UserData.isLogin);
     console.log("use log ",isLogin);
    function logout(){
      dispatch(setLogin(false))
    nevigate("/");
   }
   
    
  return (
    <div className="max-w-screen w-full flex flex-col items-center bg-sky-500 py-4 justify-between">
          <div className="max-w-[1200px] w-11/12 flex items-center justify-between border-b-2 border-slate-200 text-white">
            <div className="logo">
             {
              isLogin?<Link to="/UserHome">
              <img src={logo} className="h-[80px] w-[130px] py-[5px] px-0" alt="" />
              </Link>:<Link to="/">
              <img src={logo} className="h-[80px] w-[130px] py-[5px] px-0" alt="" />
              </Link>
             }
            </div>

            <ul className="justify-between items-center object-cover gap-4 hide_nav lg:flex">
              <Link to="/UserHome" className="flex items-center border-primary-color px-3 py-2 rounded-md hover:bg-yellow-500 hover:text-black transition-all duration-200 hover:scale-95"><li>Home</li></Link>
             
             {
              isLogin == false || userdata.accounttype == "Voter" ? <Link to="#" className="flex items-center border-primary-color px-3 py-2 rounded-md hover:bg-yellow-500 hover:text-black transition-all duration-200 hover:scale-95"><li>Services</li></Link>
             : <Link to="/Services" className="flex items-center border-primary-color px-3 py-2 rounded-md hover:bg-yellow-500 hover:text-black transition-all duration-200 hover:scale-95"><li>Services</li></Link>
             
             }
              <Link to="/about" className="flex items-center border-primary-color px-3 py-2 rounded-md hover:bg-yellow-500 hover:text-black transition-all duration-200 hover:scale-95"><li>About Us</li></Link>
            </ul>
{
  isLogin == true?
            <div className="items-center space-x-4  md:flex lg:flex">
              {/* Add other social media icons here */}
              <div className="flex space-x-4">
                <Link to="/Profile" className="px-3 py-2 font-bold hover:bg-yellow-500 hover:text-black rounded-md transition-all duration-200">Profile</Link>
                <div to="/" onClick={logout} className="px-3 py-2 font-bold hover:bg-yellow-500 hover:text-black rounded-md transition-all duration-200 ">Logout</div>
                <img src={userdata.Image} className="h-9 w-9 p-0 flex items-center rounded-full bg-black object-cover" alt="Profile" />
              </div>
            </div>:
             <div className="items-center space-x-4 hidden lg:flex">
            <NavLink to="#" className="text-blue-600 hover:text-blue-800">
              <i className="fa fa-facebook-square text-2xl" aria-hidden="true"></i>
            </NavLink>
            <NavLink to="#" className="text-red-400 hover:text-red-500">
              <i className="fa fa-twitter text-2xl" aria-hidden="true"></i>
            </NavLink>
            <NavLink to="#" className="text-pink-400 hover:text-pink-500">
              <i className="fa fa-instagram text-2xl" aria-hidden="true"></i>
            </NavLink>
            <NavLink to="#" className="text-green-400 hover:text-green-500">
              <i className="fa fa-whatsapp text-2xl" aria-hidden="true"></i>
            </NavLink>

            <div className="flex space-x-4 ">
              <NavLink to="/Login" className="px-3 py-2 font-bold hover:bg-yellow-500 hover:text-black rounded-md transition-all duration-200">Login</NavLink>
              <NavLink to="/Signup" className="px-3 py-2 font-bold hover:bg-yellow-500 hover:text-black rounded-md transition-all duration-200 ">SignUp</NavLink>
            </div>
          </div>
}
          </div>

          <button className="open">
            <i className="fa fa-bars fa-2x" aria-hidden="true"></i>
          </button>

          <button className=" close ">
            <i className="fa fa-times fa-2x" aria-hidden="true"></i>
          </button>
        </div>
  )
}

export default Navbar

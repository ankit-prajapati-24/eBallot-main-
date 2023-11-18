import React from 'react';
import logo from '../assets/IMG_20230909_193215-removebg-preview-removebg-preview.png'
import { Link, NavLink } from 'react-router-dom'; // Import Link from react-router-dom
import Footer from '../common/Footer';
import SliderComponent from '../common/SliderComponent';
import OurServices from '../common/OurServices';

const Home = () => {
  
  return (
    <div className="bg-black w-screen h-screen flex flex-col " >

      <div className="max-w-screen w-full flex flex-col items-center bg-sky-500 py-4 justify-between ">
        <div className="max-w-[1200px] w-11/12 flex items-center justify-between border-b-2 border-slate-200 text-white">
          <div className="logo">
            <img src= {logo} className="h-[80px] w-[130px] py-[5px] px-0" alt="" />
          </div>

          <ul className="justify-between items-center object-cover gap-4 hide_nav lg:flex ">
            <NavLink to="/" className="flex items-center border-primary-color px-3 py-2 rounded-md hover:bg-yellow-500 hover:text-black transition-all duration-200 hover:scale-95"><li>Home</li></NavLink>
            <NavLink to="#" className="flex items-center border-primary-color px-3 py-2 rounded-md hover:bg-yellow-500 hover:text-black transition-all duration-200 hover:scale-95">
              <li>Services</li>
            </NavLink>
            <Link to="about" className="flex items-center border-primary-color px-3 py-2 rounded-md hover:bg-yellow-500 hover:text-black transition-all duration-200 hover:scale-95">
              <li>About Us</li>
            </Link>
          </ul>

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
              <NavLink to="./Login" className="px-3 py-2 font-bold hover:bg-yellow-500 hover:text-black rounded-md transition-all duration-200">Login</NavLink>
              <NavLink to="./Signup" className="px-3 py-2 font-bold hover:bg-yellow-500 hover:text-black rounded-md transition-all duration-200 ">SignUp</NavLink>
            </div>
          </div>
        </div>
      </div>
      {/* <SliderComponent></SliderComponent> */}

      {/* Mobile Navbar */}
      <div id="mobile-menu" className="hidden md:hidden lg:hidden">

        <button id="mobile-menu-close" className="text-white">
          <i className="fa fa-times fa-2x" aria-hidden="true"></i>
        </button>

        <ul className="flex flex-col items-center mt-4 space-y-2">

          <li className="hover:text-black">
            <Link to="index.jsp" className="px-3 py-2 rounded-md hover:bg-yellow-600 transition-all duration-200 hover:scale-95">Home</Link>
          </li>
          <li className="hover:text-black">
            <Link to="#" className="px-3 py-2 rounded-md hover:bg-yellow-600 hover:text-black transition-all duration-200 hover:scale-95">Services</Link>
          </li>
          <li className="hover:text-black">
            <Link to="#" className="px-3 py-2 rounded-md hover-bg-yellow-600 hover-text-black transition-all duration-200 hover-scale-95">About Us</Link>
          </li>
          <li className="hover:text-black">
            <Link to="#" className="px-3 py-2 text-white font-bold hover-bg-yellow-600 hover-text-black rounded-md transition-all duration-200 hover-scale-95">Login</Link>
          </li>
          <li className="hover:text-black">
            <Link to="#" className="px-3 py-2 text-white font-bold hover-bg-yellow-600 hover-text-black rounded-md transition-all duration-200 hover-scale-95">SignUp</Link>
          </li>
        </ul>
      </div>

      {/* <!-- Mobile Navbar --> */}
      <div className="container flex overflow-visible text-white">
        <div className="flex-col justify-between gap-3 p-3 mx-auto mobile_nav w-11/12 left-[5%] top-[10%]">
          <ul className="justify-between items-center object-cover gap-4 flex flex-col text-md">
            <li className="hover:text-black">
              <Link to="index.jsp" className="px-3 py-2 rounded-md font-bold hover-bg-yellow-600 bg-yellow-500 text-black hover-text-black transition-all duration-200 hover-scale-95">Home</Link>
            </li>
            <li className="hover:text-black">
              <Link to="#" className="px-3 py-2 rounded-md hover-bg-yellow-600 hover-text-black font-bold transition-all duration-200 hover-scale-95">Services</Link>
            </li>
            <li className="hover:text-black">
              <Link to="#" className="px-3 py-2 rounded-md hover-bg-yellow-600 hover-text-black font-bold transition-all duration-200 hover-scale-95">About Us</Link>
            </li>
            <li className="hover:text-black">
              <Link to="./myjsp/login.jsp" className="px-3 py-2 rounded-md hover-bg-yellow-600 font-bold hover-text-black transition-all duration-200 hover-scale-95">Login</Link>
            </li>
            <li className="hover:text-black">
              <Link to="./myjsp/signup.jsp" className="px-3 py-2 rounded-md hover-bg-yellow-600 font-bold hover-text-black transition-all duration-200 hover-scale-95">SignUp</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* <!-- Hero Section --> */}
      <section className="bg-sky-200 py-12">
        <div className="container mx-auto text-center">
          <div className="mx-auto max-w-2xl">
            <h1 className="text-4xl font-semibold text-gray-800 mb-4">Welcome to eBallot</h1>
            <p className="mt-4 text-lg text-gray-700">Your online voting platform</p>
            <div className="mt-6">
              <Link to="Login">
                <button className="bg-yellow-500 text-black px-6 py-3 rounded-full hover-bg-yellow-600 hover-text-black transition-all duration-200 hover-scale-95">Get Started</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Services Section --> */}
     
      {/* Upcoming Elections Section */}
    
    <OurServices></OurServices>
    <Footer></Footer>
    </div>
  )
}

export default Home;

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ViewProfile from './ViewProfile';
import Navbar from './Navbar';
import UpdateProfile from './UpdateProfile';
import ChangePassword from './ChangePassword';
import { useState } from 'react';
import { useSelector } from 'react-redux';
// import './UserProfile.css'; // Assuming you have a CSS file for styling

const UserProfile = () => {
    
  const userdata = useSelector((state) => state.UserData.userdata);
    const [index,setIndex] = useState(0);
    const sectons = [
        <ViewProfile></ViewProfile>,
        <UpdateProfile></UpdateProfile>,
        <ChangePassword></ChangePassword>
    ]
  useEffect(() => {
    // Place any JavaScript code that needs to run after the component is mounted
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-gray-900 overflow-visible">
    <Navbar></Navbar>
      <div className=" mx-auto">
        
        <div className="h-screen max-w-[1525px] w-full flex  mx-auto">
          <aside className="w-1/4  bg-black  text-white p-6 relative hidden md:block lg:block">
            <div className="flex justify-between flex-col items-center ">
              <h2 className="right-0 top-0 text-2xl font-semibold mb-4 mt-2 overflow-visible text-center">User Menu</h2>
              <ul className="flex items-center justify-center flex-col mt-9">
                <div className="flex justify-center mb-4 " id="">
                  <img src = {userdata.Image} alt="Profile Image" className="w-32 h-32 rounded-full object-cover" />
                </div>
                <li className="mb-2">
                  <button id="view-profile-btn" onClick={()=>setIndex(0)}  className="text-blue-300 hover:text-blue-100">View Profile</button>
                </li>
                <li className="mb-2">
                  <button id="update-profile-btn" onClick={()=>setIndex(1)} className="text-blue-300 hover:text-blue-100">Update Profile</button>
                </li>
                <li className="mb-2">
                  <button id="change-password-btn" onClick={()=>setIndex(2)} className="text-blue-300 hover:text-blue-100">Change Password</button>
                </li>
              </ul>
            </div>
          </aside>
           {
            sectons[index]
           }
        </div>
      </div>

      <script type="module" src="./jsfiles/userprofile.js"></script>
      <script type="module" src="./jsfiles/taoster.js"></script>
    </div>
  );
};

export default UserProfile;

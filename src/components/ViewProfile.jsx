import React from 'react';
import { useSelector } from 'react-redux';

const ViewProfile = () => {
  const userdata = useSelector((state) => state.UserData.userdata);
  console.log(userdata);
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-ful bg-gradient-to-b from-blue-300 w-full">
      <div className="flex justify-center mb-4 flex-col gap-2 font-bold items-center">
        <img src={userdata.Image} alt="Profile Image" className="w-32 h-32 rounded-full object-cover" />
        <div>Profile Photo</div>
      </div>

      <div className="grid grid-cols-1 flex-wrap gap-2">
        <div className="mb-2 border flex gap-2  rounded-md p-2">
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-2 text-lg gap-2 w-full ">
            <div className='bg-white w-full p-2 rounded-md'> <b>Name :</b> {userdata.firstName} {userdata.lastName}</div>
          </label>
        </div>
        <div className="mb-2 border flex gap-3  rounded-md p-2">
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-2 text-lg gap-2 w-full ">
            <div className='bg-white w-full p-2 rounded-md'> <b>Contact Number :</b>  {userdata.phone == null?"Empty":userdata.phone}</div>
          </label>
        </div>
        <div className="mb-2 border flex gap-3  rounded-md p-2">
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-2 text-lg gap-2 w-full ">
            <div className='bg-white w-full p-2 rounded-md'> <b>Email :</b> {userdata.email} </div>
          </label>
        </div>
        <div className="mb-2 border flex gap-3  rounded-md p-2">
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-2 text-lg gap-2 w-full ">
            <div className='bg-white w-full p-2 rounded-md'> <b>Aadhar Information :</b> {userdata.uid} </div>
          </label>
        </div>
        <div className="mb-2 border flex gap-3  rounded-md p-2">
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-2 text-lg gap-2 w-full ">
            <div className='bg-white w-full p-2 rounded-md'> <b>Account Type :</b> {userdata.accounttype}</div>
          </label>
        </div>

       
      </div>
    </div>
  );
};

export default ViewProfile;

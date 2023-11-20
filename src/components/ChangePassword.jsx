import React from 'react';
import { useForm } from 'react-hook-form';
import { apiConnecter } from '../services/apiconnecter';
import { toast } from 'react-hot-toast';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const ChangePassword = () => {
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  const userdata = useSelector((state) => state.UserData.userdata);

  const handleChangePassword = async (data) => {
    console.log(data);
    const Data = {
      ...data,
      ...userdata
    }
    if(data.NewPassword !== data.ConfirmPassword){
      toast.error("Password Does Not Match");
      return;
    }
    try {
      setLoading(true);

      const toastId = toast.loading('Waiting...');
      const res = await apiConnecter("POST", "https://e-ballot-server.vercel.app/api/v1/profile/ChangePassword", Data);
      console.log(res);
      toast.success(res.data.message);  
      setLoading(false);
      toast.dismiss(toastId)
    } catch (err) {
      console.error(err);
      setLoading(false);
      toast.error("Please try again later");
    }
  };

  return (
    <form onSubmit={handleSubmit(handleChangePassword)} id="change-password-section" className="bg-white p-6 rounded-lg shadow-md w-full bg-gradient-to-b from-blue-300 w-full">
       
      <h3 className="text-2xl font-semibold mb-2">Change Password</h3>
      <div className="mb-4">
        <label htmlFor="current-password" className="block text-gray-700 font-semibold mb-2">
          Current Password
        </label>
        <input required {...register("CurrentPassword")} type="password" id="current-password" className="w-full p-2 border border-gray-300 rounded-md" />
      </div>
      <div className="mb-4">
        <label htmlFor="new-password" className="block text-gray-700 font-semibold mb-2">
          New Password
        </label>
        <input required {...register("NewPassword")} type="password" id="new-password" className="w-full p-2 border border-gray-300 rounded-md" />
      </div>
      <div className="mb-4">
        <label htmlFor="confirm-password" className="block text-gray-700 font-semibold mb-2">
          Confirm New Password
        </label>
        <input required {...register("ConfirmPassword")} type="password" id="confirm-password" className="w-full p-2 border border-gray-300 rounded-md" />
      </div>
      <div className="flex justify-end">
        <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-200">
          Change Password
        </button>
      </div>
    </form>
  );
};

export default ChangePassword;

import React, { useState } from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import { useForm } from 'react-hook-form';
import { setuserdata } from '../slices/UserDataSlice';
import { apiConnecter } from '../services/apiconnecter';

import toast, { Toaster } from 'react-hot-toast';

const UpdateProfile = () => {
    const dispatch= useDispatch();
  const userdata = useSelector((state) => state.UserData.userdata);
  console.log(userdata);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm();

  async function submitHandler(data) {
    const formData = new FormData();

    formData.append('Name', data.name);
    formData.append('image', data.image[0]); // Assuming 'image' is the name of the file input
    formData.append('Phone', data.phone);
    formData.append('email', userdata.email);
    console.log(formData , " this is formdata");

    const toastId = toast.loading('Waiting...');
    try {
      setLoading(true);
      
      const res = await apiConnecter("POST", "https://e-ballot-server.vercel.app/api/v1/profile/UpdateProfile", formData);
      console.log(res);
      dispatch(setuserdata(res.data.UserDetails));
      setLoading(false);
      toast.dismiss(toastId);
      toast.success("Profile Update Succefully");
    }catch (err) {
      
    toast.error("Network Error, please try again");
      toast.dismiss(toastId); 
    setLoading(false);
      console.error(err);
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full bg-gradient-to-b from-blue-300">
      <div className="flex justify-center mb-4" id="profileimg">
        <img
          id="profileimg"
          src={userdata.Image}
          name="img"
          alt="Profile Image"
          className="w-32 h-32 rounded-full object-cover"
        />
      </div>
      
   
      <form onSubmit={handleSubmit((data) => submitHandler(data))}>
        <div className="mb-4 w-full">
          <label htmlFor="profile-photo" className="block text-gray-700 font-semibold mb-2">
            Profile Photo
          </label>
          <input required {...register("image")} type="file" id="uploadfile" accept="image/*" className="w-full p-2 border border-gray-300 rounded-md" />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
            Name
          </label>
          <input required {...register("name")} type="text" id="name" placeholder="Your Name" className="w-full p-2 border border-gray-300 rounded-md" />
        </div>
        <div className="mb-4">
          <label htmlFor="contact" className="block text-gray-700 font-semibold mb-2">
            Contact Information
          </label>
          <input
          required
            {...register("phone")}
            type="text"
            id="contact"
            placeholder="Email or Phone"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex justify-end">
          <button type="submit" id="button" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;

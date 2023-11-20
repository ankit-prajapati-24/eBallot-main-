import toast, { Toaster } from 'react-hot-toast';
import LoadingBar from 'react-top-loading-bar'
import React,{useRef} from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { apiConnecter } from '../../services/apiconnecter';
const CreateSurvey = ({setstep}) => {
  const ref = useRef();
  const { register, handleSubmit } = useForm();
  const Name = useSelector((state) => state.Steps.Name);
  const Election_Name = useSelector((state) => state.Steps.ElectionName);
  const onSubmit = (data) => {
    // Handle form submission logic here
    const Formdata = {
      ...data,
      Election_Name
    }
    console.log('Form data:', Formdata);

    addCandidates(Formdata);
    // Add further logic, like sending data to a server, etc.
  };
  
    async function addCandidates(data){
      const formData = new FormData();
    formData.append('Name', data.Name);
    formData.append('Details', data.Details);
    formData.append('Image', data.image[0]); // Assuming 'image' is the name of the file input
    formData.append('Video', data.Video[0]);
    formData.append('End_Date', data.End_Date);
    formData.append('Start_Date', data.Start_Date);
    formData.append('Category', Name);

   const toastid =  toast.loading("Uploading....");
         try{
          if (ref.current) {
            ref.current.continuousStart(); // Start the loading animation
        }
        console.log(formData);
          const response = await apiConnecter("POST", "https://e-ballot-server.vercel.app/api/v1/Survey/CreateSurvey",formData);
          
    if (ref.current) {
      ref.current.complete(); // Complete the loading animation
    }
      toast.success("Survey Created successfully");
      setstep(6);
          // Assuming data is an object and you want to convert it into an array
        //   const data = response.data;
        //   const electionsArray = Object.values(data);
          console.log('Converted data to array:', response);
          toast.dismiss(toastid);
        }
        catch(err){
             toast.dismiss(toastid);
          console.log(err);
         }
    }
  return (
    <div className="container mx-auto mt-8 mb-4">
    <LoadingBar color="red" ref={ref} />
    
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md mx-auto bg-white p-8 border border-gray-300 rounded-md shadow-md"
      >
        <h2 className="text-2xl font-semibold mb-6 mx-auto ">Product Form</h2>

        <div className="mb-4">
          <label htmlFor="candidateName" className="block text-sm font-medium text-gray-600">
            Product Name
          </label>
          <input
            type="text"
            id="ProductName"
            name="ProductName"
            {...register('Name', { required: 'This field is required' })}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-medium text-gray-600">
           Product Image 
          </label>
          <input
            type="file"
            id="image"
            name="image"
            {...register('image', { pattern: { value: /^https?:\/\/\S+/i, message: 'Invalid URL' } })}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="age" className="block text-sm font-medium text-gray-600">
           Product Video
          </label>
          <input
            type="file"
            id="Video"
            name="Video"
            {...register('Video', {
              required: 'This field is required',
            })}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="candidateName" className="block text-sm font-medium text-gray-600">
            Product Details
          </label>
          <input
            type="text"
            id="candidateName"
            name="candidateName"
            {...register('Details', { required: 'This field is required' })}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
        <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
          Start Date
        </label>
        <input
          type="datetime-local"
          id="startDate"
          className="mt-1 p-2 border rounded-md w-full"
          {...register('Start_Date', { required: 'This field is required' })}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
          End Date
        </label>
        <input
          type="datetime-local"
          id="endDate"
          className="mt-1 p-2 border rounded-md w-full"
          {...register('End_Date', { required: 'This field is required' })}
        />
      </div>


        <div className="flex items-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          >
            Submit
          </button>
        </div>
      </form>
      <div className="flex justify-between mt-4">
    <button
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                  onClick={ ()=> setstep(2)}
                >
                  Previous
                </button>
                <button
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => console.log('Previous button clicked')}
                >
                  Next
                </button>
    </div>
    </div>
  );
};

export default CreateSurvey;

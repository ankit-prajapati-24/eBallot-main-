import toast, { Toaster } from 'react-hot-toast';
import LoadingBar from 'react-top-loading-bar'
import React,{useRef} from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { apiConnecter } from '../services/apiconnecter';
const CandidateForm = ({setstep}) => {
  const ref = useRef();
  const { register, handleSubmit } = useForm();
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
    formData.append('Party', data.Party);
    formData.append('age', data.age);
    formData.append('image', data.image[0]); // Assuming 'image' is the name of the file input
    formData.append('Election_Name', Election_Name);
         try{
          if (ref.current) {
            ref.current.continuousStart(); // Start the loading animation
        }
        console.log(formData);
          const response = await apiConnecter("POST", "https://e-ballot-server.vercel.app/api/v1/services/addCandidate",formData);
    
          
    if (ref.current) {
      ref.current.complete(); // Complete the loading animation
    }
      toast.success("Candidate added successfully");
      setstep(2);
          // Assuming data is an object and you want to convert it into an array
          const data = response.data;
          const electionsArray = Object.values(data);
      
          console.log('Converted data to array:', electionsArray);
         }
         catch(err){
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
        <h2 className="text-2xl font-semibold mb-6 mx-auto ">Candidate Form</h2>

        <div className="mb-4">
          <label htmlFor="candidateName" className="block text-sm font-medium text-gray-600">
            Candidate Name
          </label>
          <input
            type="text"
            id="candidateName"
            name="candidateName"
            {...register('Name', { required: 'This field is required' })}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="Party" className="block text-sm font-medium text-gray-600">
            Party
          </label>
          <input
            type="text"
            id="party"
            name="party"
            {...register('Party', { required: 'This field is required' })}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="age" className="block text-sm font-medium text-gray-600">
            Age (18-40)
          </label>
          <input
            type="number"
            id="age"
            name="age"
            {...register('age', {
              required: 'This field is required',
              min: 18,
              max: 40,
            })}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-medium text-gray-600">
            Image 
          </label>
          <input
            type="file"
            id="image"
            name="image"
            {...register('image', { pattern: { value: /^https?:\/\/\S+/i, message: 'Invalid URL' } })}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
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

export default CandidateForm;

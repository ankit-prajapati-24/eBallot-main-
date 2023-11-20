import toast, { Toaster } from 'react-hot-toast';
import LoadingBar from 'react-top-loading-bar'
import React, { useState } from 'react';
import { useRef } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { setCategory ,setName} from '../slices/ServicesStepSlice';
import { apiConnecter } from '../services/apiconnecter';

const CreateElection = ({ onCreateElection,setstep }) => {
    const ref = useRef();
    const Name = useSelector((state) => state.Steps.Name);
    const Category = useSelector((state) => state.Steps.Category);

  const [electionTitle, setElectionTitle] = useState('');
  const [electionDetails, setElectionDetails] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  
  async function handleCreateElection() {
    
    if (!electionTitle.trim() || !startDate || !endDate) {
        alert('Please enter a title, start date, and end date for the election.');
        return;
    }
    
    const newElection = {
      Election_Topic: electionTitle,
      Election_Details: electionDetails,
      Start_Date: startDate,
      End_Date: endDate,
      Name,
      Category
    };
    
    try {
      if (ref.current) {
        ref.current.continuousStart(); // Start the loading animation
    }
  
      const res = await apiConnecter("POST", "https://e-ballot-server.vercel.app/api/v1/services/createElection", newElection);
      console.log(res);
  
      if (ref.current) {
        ref.current.complete(); // Complete the loading animation
      }
      toast.success("Election Created Succefully");
      setstep(2);
  
      setElectionTitle('');
      setElectionDetails('');
      setStartDate('');
      setEndDate('');
    } catch (err) {
      console.error(err);
      if (ref.current) {
          ref.current.complete(); // Make sure to complete the loading animation on error as well
        }
        toast.error("Election Could Not be Crated , Try Again leter");
    }

  }
  

  return (
    <div className="container mx-auto w-[60%]  m-4 p-4 bg-white shadow-lg rounded-lg">
    <LoadingBar color="red" ref={ref} />
      <h2 className="text-xl font-bold mb-4">Create New Election</h2>

      <div className="mb-4">
        <label htmlFor="electionTitle" className="block text-sm font-medium text-gray-700">
          Election Title
        </label>
        <input
          type="text"
          id="electionTitle"
          className="mt-1 p-2 border rounded-md w-full"
          value={electionTitle}
          onChange={(e) => setElectionTitle(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="electionDetails" className="block text-sm font-medium text-gray-700">
          Election Details
        </label>
        <textarea
          id="electionDetails"
          className="mt-1 p-2 border rounded-md w-full"
          rows="3"
          value={electionDetails}
          onChange={(e) => setElectionDetails(e.target.value)}
        ></textarea>
      </div>

      <div className="mb-4">
        <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
          Start Date
        </label>
        <input
          type="datetime-local"
          id="startDate"
          className="mt-1 p-2 border rounded-md w-full"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
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
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>

      <button
        className="bg-blue-500 text-white py-2 px-4 rounded"
        onClick={handleCreateElection}
      >
        Create Election
      </button>
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

export default CreateElection;

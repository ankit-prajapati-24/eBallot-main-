import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { apiConnecter } from '../../services/apiconnecter';
import { setElectionName } from '../../slices/ServicesStepSlice';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import EmptyStateComponent from '../../common/EmptyStateComponent';

const Surveylist = ({ setstep }) => {
  const [loading, setLoading] = useState(true);
  const [elections, setElections] = useState([]);
  const Category = useSelector((state) => state.Steps.Name);
  const cType = useSelector((state) => state.UserData.cType);
  const dispatch = useDispatch();

  async function GetElections() {
    try {
      const response = await apiConnecter("POST", "https://e-ballot-server.vercel.app/v1/Survey/GetSurvey", { Category });
    
      // Assuming data is an object and you want to convert it into an array
      const data = response.data;
      const electionsArray = Object.values(data);
  
      console.log('Converted data to array:', electionsArray);
    //   console.log('Converted data to array:', electionsArray);
      setElections(electionsArray[0]);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching elections:', error);
      setLoading(false);
    }
  }

  useEffect(() => {
    GetElections();
  }, [Category]);

  return (
    <div className="flex container flex-col items-center justify-center  border min-w-[500px]  w-full">
      <div className=" container mx-auto  bg-white shadow-lg rounded-lg bg-gradient-to-b from-white-300">
      <h1 className="text-4xl font-bold text-center hover:scale-100 transition-all duration-200 shadow-lg bg-gradient-to-r from-sky-300  p-3 rounded-md text-black-600 animate__animated animate__fadeIn">
      Existing Survey of {Category}
        </h1>
        {cType === "Admin" ? (
          <div className="mt-4">
            <h2 className="text-xl font-bold mb-2">Create New Survey</h2>
            <button
              className="bg-blue-500 text-white py-2 px-4 mb-4 rounded"
              onClick={() => setstep(7)}
            >
              Create Survey
            </button>
          </div>
        ) : null}
        <h2 className="text-xl font-bold mb-2"></h2>
        <div className='flex gap-4 flex-wrap'>
          {loading ? (
            <div className='w-full flex flex-col gap-4'>
              
            <div className="w-full">
            <Skeleton height={70} />
            <Skeleton height={20} />
            <Skeleton height={20} />
            <Skeleton height={20} />
            </div>
            <div className="w-full">
            <Skeleton height={70} />
            <Skeleton height={20} />
            <Skeleton height={20} />
            <Skeleton height={20} />
            </div>
            <div className="w-full">
            <Skeleton height={70} />
            <Skeleton height={20} />
            <Skeleton height={20} />
            <Skeleton height={20} />
            </div>
            <div className="w-full">
            <Skeleton height={70} />
            <Skeleton height={20} />
            <Skeleton height={20} />
            <Skeleton height={20} />
            </div>
            </div>
          ) : elections.length == 0 ? <EmptyStateComponent></EmptyStateComponent>:
          (
            elections &&  elections.map((election) => (
              <div key={election._id} className="border p-4 mb-4 hover:scale-95 transition-all duration-200 bg-gradient-to-b from-sky-300 w-full">
                <h3 className="text-lg font-bold mb-2">{election.Name}</h3>
                <p className=""><b>Details : </b>{election.Details}</p>
                <p><b>Start Date:</b> {new Date(election.Start_Date).toLocaleDateString()}</p>
                <p><b>End Date:</b> {new Date(election.End_Date).toLocaleDateString()}</p>
              </div>
            ))
          )}
        </div>

       

        <div className="flex justify-between mt-4">
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setstep(1)}
          >
            Previous
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => console.log('Next button clicked')}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Surveylist;

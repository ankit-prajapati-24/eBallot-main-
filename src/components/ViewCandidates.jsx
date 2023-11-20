import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { apiConnecter } from '../services/apiconnecter';
import CandidateCard from './CandidateCard';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const ViewCandidates = ({ setstep }) => {
  console.log("Fetching candidates...");
  const Name = useSelector((state) => state.Steps.Name);
  const ElectionName = useSelector((state) => state.Steps.ElectionName);
  const [loading, setLoading] = useState(true);
  const [candidates, setCandidates] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const electionData = {
    Election_Title: ElectionName,
  };

  async function getCandidates() {
    try {
      const response = await apiConnecter("POST", "https://e-ballot-server.vercel.app/v1/services/getCandidates", electionData);
      const responseData = response.data;
      const candidatesArray = responseData.data[0].Candidates;
      console.log('Candidate data:' );
      setCandidates(candidatesArray);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching candidates:', error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    getCandidates();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredCandidates =candidates&& candidates.filter((candidate) =>
  candidate.Name && candidate.Name.toLowerCase().includes(searchTerm.toLowerCase())
);


  return (
    <div className="container mx-auto mt-8 mb-4">
      <button
        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setstep(2)}
      >
        Previous
      </button>
      <h2 className="text-center text-3xl font-semibold mb-2 mx-auto">All Candidates</h2>
      <p className="text-center text-gray-600 mb-6 mx-auto">Total Candidates: {candidates&&candidates.length}</p>

      <div className="flex items-center justify-center mb-4">
        <input
          type="text"
          id="search"
          name="search"
          value={searchTerm}
          onChange={handleSearch}
          className="mt-1 p-2 w-full max-w-[500px] border border-gray-300 rounded-md"
        />
        <button
          className="ml-2 bg-blue-500 text-white py-2 px-4 rounded-md"
          onClick={() => console.log('Search button clicked')}
        >
          Search
        </button>
      </div>

      {loading ? (
        <div className='w-full flex flex-wrap items-center justify-center gap-9  '>
              
            <div className="w-[400px] bg-gray-100  rounded-md content-center">
            <Skeleton height={200} width={400}  containerClassName="flex-1 ">
            </Skeleton>
            <Skeleton height={40} />
            <Skeleton height={20} />
            <Skeleton height={20} />
            </div>
            <div className="w-[400px] bg-gray-100  rounded-md content-center">
            <Skeleton height={200} width={400}  containerClassName="flex-1 ">
            </Skeleton>
            <Skeleton height={40} />
            <Skeleton height={20} />
            <Skeleton height={20} />
            </div>
            <div className="w-[400px] bg-gray-100  rounded-md content-center">
            <Skeleton height={200} width={400}  containerClassName="flex-1 ">
            </Skeleton>
            <Skeleton height={40} />
            <Skeleton height={20} />
            <Skeleton height={20} />
            </div>
            <div className="w-[400px] bg-gray-100  rounded-md content-center">
            <Skeleton height={200} width={400}  containerClassName="flex-1 ">
            </Skeleton>
            <Skeleton height={40} />
            <Skeleton height={20} />
            <Skeleton height={20} />
            </div>
            <div className="w-[400px] bg-gray-100  rounded-md content-center">
            <Skeleton height={200} width={400}  containerClassName="flex-1 ">
            </Skeleton>
            <Skeleton height={40} />
            <Skeleton height={20} />
            <Skeleton height={20} />
            </div>
            <div className="w-[400px] bg-gray-100  rounded-md content-center">
            <Skeleton height={200} width={400}  containerClassName="flex-1 ">
            </Skeleton>
            <Skeleton height={40} />
            <Skeleton height={20} />
            <Skeleton height={20} />
            </div>
                      
            </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  mx-auto">
          {filteredCandidates&&filteredCandidates.map((candidate) => (
            <CandidateCard candidate = {candidate} show={false}></CandidateCard>
          ))}
        </div>
      )}
    </div>
    // <div>hello ji</div>
  );
};

export default ViewCandidates;

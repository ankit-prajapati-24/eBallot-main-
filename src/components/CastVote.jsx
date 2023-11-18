import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CandidateCard from './CandidateCard';
import { apiConnecter } from '../services/apiconnecter';
import Navbar from './Navbar';
import Footer from '../common/Footer';
import EmptyStateComponent from '../common/EmptyStateComponent';
import toast, { Toaster } from 'react-hot-toast';
import LoadingBar from 'react-top-loading-bar'
import {useRef} from 'react';
import CountdownTimer from '../common/CountdownTimer';
import { useNavigate } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const  CastVote = ({ setstep }) => {
    const nevigate = useNavigate();
    const [timerFinished, setTimerFinished] = useState(false);

  const handleTimerFinish = () => {
    setTimerFinished(true);
  };
    const [timer,settimer] = useState(1);
  console.log("Fetching candidates...");
  const ref = useRef();
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
        if (ref.current) {
            ref.current.continuousStart(); // Start the loading animation
        }
      const response = await apiConnecter("POST", "http://localhost:4000/api/v1/services/getCandidates", electionData);
      const responseData = response.data;
      const candidatesArray = responseData.data[0].Candidates;
      console.log('Candidate data:' );
      setCandidates(candidatesArray);
      setLoading(false);
      if (ref.current) {
        ref.current.complete(); // Complete the loading animation
      }
    } catch (error) {
      console.error('Error fetching candidates:', error.message);
      setLoading(false);
    }
  }
  async function showResult(){

  }

  useEffect(() => {
  
    setTimeout(() => {
        settimer((prev) => prev-=1);
    }, 100);
    getCandidates();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

//   const filteredCandidates =candidates&& candidates.filter((candidate) =>
//   candidate.Name && candidate.Name.toLowerCase().includes(searchTerm.toLowerCase())
// );


  return (

 <div>
   <LoadingBar color="red" ref={ref} />
    
 <Navbar></Navbar>
  <div className='flex flex-col justify-center items-center  bg-gray-100'>
  <div className='flex jastify-center   gap-4  mb-4  mt-2  items-center'>
  <h2 className='text-3xl font-bold my-3'>This Are Following  Candidates For {ElectionName} Election</h2>
      { (
        <button
          onClick={()=>(timerFinished&&nevigate("/result"))} 
          className="bg-blue-500 text-white px-4 py-2 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 transform hover:scale-105"
        >
          View Results 
          {!timerFinished&&<CountdownTimer time={10} onFinish={handleTimerFinish} />}
        </button>
      )}
  </div>
  {
    loading?<div className='w-full flex flex-c flex-wrap items-center justify-center gap-9  '>
              
              <div className="w-[400px] bg-gray-100  rounded-md content-center">
              <Skeleton height={200} width={400} baseColor='#DCDCDC'  containerClassName="flex-1 ">
              </Skeleton>
              <Skeleton height={40}  baseColor='#DCDCDC' />
              <Skeleton height={20}  baseColor='#DCDCDC' />
              <Skeleton height={20}  baseColor='#DCDCDC' />
              </div>
              <div className="w-[400px] bg-gray-100  rounded-md content-center">
              <Skeleton height={200} width={400}  baseColor='#DCDCDC'  containerClassName="flex-1 ">
              </Skeleton>
              <Skeleton height={40}  baseColor='#DCDCDC'  />
              <Skeleton height={20}  baseColor='#DCDCDC'  />
              <Skeleton height={20}  baseColor='#DCDCDC' />
              </div>
              <div className="w-[400px] bg-gray-100  rounded-md content-center">
              <Skeleton height={200} width={400}  baseColor='#DCDCDC'  containerClassName="flex-1 ">
              </Skeleton>
              <Skeleton height={40}  baseColor='#DCDCDC'  />
              <Skeleton height={20}  baseColor='#DCDCDC'  />
              <Skeleton height={20}  baseColor='#DCDCDC' />
              </div>
              <div className="w-[400px] bg-gray-100  rounded-md content-center">
              <Skeleton height={200} width={400}  baseColor='#DCDCDC'  containerClassName="flex-1 ">
              </Skeleton>
              <Skeleton height={40}  baseColor='#DCDCDC'  />
              <Skeleton height={20}  baseColor='#DCDCDC'  />
              <Skeleton height={20}  baseColor='#DCDCDC' />
              </div>
              <div className="w-[400px] bg-gray-100  rounded-md content-center">
              <Skeleton height={200} width={400}  baseColor='#DCDCDC'  containerClassName="flex-1 ">
              </Skeleton>
              <Skeleton height={40}  baseColor='#DCDCDC'  />
              <Skeleton height={20}  baseColor='#DCDCDC'  />
              <Skeleton height={20}  baseColor='#DCDCDC' />
              </div>
              <div className="w-[400px] bg-gray-100  rounded-md content-center">
              <Skeleton height={200} width={400}  baseColor='#DCDCDC'  containerClassName="flex-1 ">
              </Skeleton>
              <Skeleton height={40}  baseColor='#DCDCDC'  />
              <Skeleton height={20}  baseColor='#DCDCDC'  />
              <Skeleton height={20}  baseColor='#DCDCDC' />
              </div>
              <div className="w-[400px] bg-gray-100  rounded-md content-center">
              <Skeleton height={200} width={400}  baseColor='#DCDCDC'  containerClassName="flex-1 ">
              </Skeleton>
              <Skeleton height={40}  baseColor='#DCDCDC'  />
              <Skeleton height={20}  baseColor='#DCDCDC'  />
              <Skeleton height={20}  baseColor='#DCDCDC' />
              </div>
              <div className="w-[400px] bg-gray-100  rounded-md content-center">
              <Skeleton height={200} width={400}  baseColor='#DCDCDC'  containerClassName="flex-1 ">
              </Skeleton>
              <Skeleton height={40}  baseColor='#DCDCDC'  />
              <Skeleton height={20}  baseColor='#DCDCDC'  />
              <Skeleton height={20}  baseColor='#DCDCDC' />
              </div>
              <div className="w-[400px] bg-gray-100  rounded-md content-center">
              <Skeleton height={200} width={400}  baseColor='#DCDCDC'  containerClassName="flex-1 ">
              </Skeleton>
              <Skeleton height={40}  baseColor='#DCDCDC'  />
              <Skeleton height={20}  baseColor='#DCDCDC'  />
              <Skeleton height={20}  baseColor='#DCDCDC' />
              </div>
             
              </div>:
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {candidates.length == 0 ?<EmptyStateComponent></EmptyStateComponent> :candidates.map((candidate, index) => (
          <CandidateCard key={index} candidate={candidate} show={true}/>
        ))}
      </div>
  }
  </div>
      <Footer></Footer>
 </div>
  );
};

export default CastVote;

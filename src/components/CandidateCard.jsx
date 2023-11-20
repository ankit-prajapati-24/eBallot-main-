import React, { useState } from 'react';
import { setCandidate_id } from '../slices/ServicesStepSlice';
import { useDispatch, useSelector } from 'react-redux';
import { apiConnecter } from '../services/apiconnecter';
import toast, { Toaster } from 'react-hot-toast';
import LoadingBar from 'react-top-loading-bar'
import {useRef} from 'react';

const CandidateCard = ({ candidate,show }) => {
  const ref = useRef();
   const ElectionName = useSelector((state) => state.Steps.ElectionName);
   const userdata = useSelector((state) => state.UserData.userdata)
  const { Name, Party, age, image, partyLogo,_id } = candidate;
  const [voted, setVoted] = useState(false);
  const dispatch = useDispatch();

  async function  handleVoteClick() {
    const payload = {
      Candidate_id : _id,
      Election_Title:ElectionName,
      email:userdata.email
    }
    dispatch(setCandidate_id(_id));
    // console.log(`Vote for ${Party}`);
    console.log("this is data for call ",payload);
    const taostid = toast.loading("Loading....");
    try{
      if (ref.current) {
        ref.current.continuousStart(); // Start the loading animation
    }
       const res = await apiConnecter("POST","https://e-ballot-server.vercel.app/v1/services/addVote",payload);
       console.log("response ",res);
       if (ref.current) {
        ref.current.complete(); // Complete the loading animation
      }
      toast.success("Your vote is SuccesFully Submited");
      setVoted(true);
      toast.dismiss(taostid);
    }
    catch(err){
      toast.dismiss(taostid);
      toast.success("You have already voted for this election");
      console.log(err,"bad request from server");
    }
    // You can perform additional actions here related to the vote
  };

  return (
    <div className="bg-gradient-to-b from-sky-200 to-white-300 p-4 rounded-lg shadow-md min-w-[300px] mx-auto mb-8 transition-transform transform hover:scale-105">
      <div className="mb-4 overflow-hidden rounded-lg">
        <img src={image} alt={`${Name}'s Photo`} className="w-[250px] h-[250px] object-cover rounded-md shadow-lg transform transition-transform hover:scale-110" />
      </div>
      <div className="text-center">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{Name}</h3>
        <p className="text-gray-600 mb-2">Party: {Party}</p>
        <p className="text-gray-600 mb-4">Age: {age}</p>
        {partyLogo && (
          <div className="mb-4">
            <img src={partyLogo} alt={`${Party}'s Logo`} className="w-16 h-16 object-cover rounded-full mx-auto shadow transform transition-transform hover:scale-110" />
          </div>
        )}
       {show&& <button
          onClick={handleVoteClick}
          className={`bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-2 rounded-md focus:outline-none focus:shadow-outline-blue transition-colors ${voted ? 'animate-wiggle' : 'hover:from-blue-600 hover:to-blue-800 active:bg-blue-800'}`}
          disabled={voted}
        >
          {voted ? 'Voted!' : 'Vote'}
        </button>
       }
      </div>
    </div>
  );
};

export default CandidateCard;

import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { apiConnecter } from '../services/apiconnecter';
import Footer from '../common/Footer';
import EmptyStateComponent from '../common/EmptyStateComponent';
import LoadingBar from 'react-top-loading-bar';
import { useRef } from 'react';
import CountdownTimer from '../common/CountdownTimer';
import { useNavigate } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ResultGraph = ({ ref }) => {
  const Name = useSelector((state) => state.Steps.Name);
  const ElectionName = useSelector((state) => state.Steps.ElectionName);
  const [loading, setLoading] = useState(true);
  const [sortedCandidates, setSortedCandidates] = useState([]);
  const [totalVotes, setTotalVotes] = useState();

  const can = [];
  const navigate = useNavigate();

  async function getCandidates() {
    try {
      const response = await apiConnecter("POST", "https://e-ballot-server.vercel.app/api/v1/services/getCandidates", { Election_Title: ElectionName });
      const responseData = response.data;
      const candidatesArray = responseData.data[0].Candidates;
      if (candidatesArray.length === 0) {
        setLoading(false);
        return;
      }
      const formattedCandidates = candidatesArray.map(candidate => {
        let val = 0;
        candidate.votes.forEach(vote => {
          if (vote.Election_Title === ElectionName) val++;
        });

        return {
          name: candidate.Name,
          votes: val,
          photo: candidate.image
        };
      });

      const sortedCandidates = [...formattedCandidates].sort((a, b) => b.votes - a.votes);
      const totalVotes = sortedCandidates.reduce((sum, candidate) => sum + candidate.votes, 0);
      setSortedCandidates(sortedCandidates);
      setTotalVotes(totalVotes);
      console.log('Candidate data:', sortedCandidates, candidatesArray);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching candidates:', error.message);
      setLoading(false);
    }
  }

  // Find the winner (candidate with the most votes)
  const winner = sortedCandidates[0];

  useEffect(() => {
    getCandidates();
  }, []);

  return (
    <div className="container bg-white p-6 rounded-lg shadow-lg w-full bg-gradient-to-b from-sky-300">
      <h2 className="text-3xl font-semibold mb-6">Results of {ElectionName} Elections</h2>
      {loading ? (
        <Skeleton height={40} baseColor='#DCDCDC' />
      ) : (
        <div className="text-center mt-4 p-2 mb-4  mx-auto flex items-center justify-center gap-2">
        {sortedCandidates.length > 0 ?
          <p className="text-2xl font-semibold text-green-500 flex gap-2 ">
             
              <img src={winner.photo} className='w-10 h-10 object-cover rounded-full ' alt="Winner" />
             
            {winner.name}
            is the Winner!
          </p>: ""}
        </div>
      )}

      {loading ? (
        <div className='w-full flex flex-col flex-wrap items-center justify-center gap-9  '>
          {[...Array(6)].map((_, index) => (
            <div key={index} className="w-full bg-gray-100 inline rounded-md content-center p-4">
              <Skeleton height={100} inline={true} width={100} baseColor='#DCDCDC' circle={true} containerClassName="flex-1" />
              <Skeleton height={40} baseColor='#DCDCDC' />
              <Skeleton height={20} baseColor='#DCDCDC' />
              <Skeleton height={20} baseColor='#DCDCDC' />
            </div>
          ))}
        </div>
      ) : sortedCandidates.length === 0 ? (
        <EmptyStateComponent />
      ) : sortedCandidates.map((candidate, index) => (
        <div key={index} className={`mb-6 ${winner === candidate ? 'border-2 border-green-500 p-2 rounded-md' : ''}`}>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img
                src={candidate.photo}
                alt={`${candidate.name}'s Photo`}
                className="w-10 h-10 object-cover rounded-full mr-2"
              />
              <span className="text-xl font-semibold">{candidate.name}</span>
            </div>
            <span className="text-sm text-gray-500">{candidate.votes} Votes</span>
          </div>
          <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-blue-200 text-blue-800">
                  {((candidate.votes / totalVotes) * 100).toFixed(2)}%
                </span>
              </div>
            </div>
            <div className="flex mb-2 items-center justify-between">
              <div className="w-full bg-gray-300 rounded-full">
                <div
                  className="bg-blue-500 text-xs leading-none py-1 text-center text-white rounded-full"
                  style={{ width: `${(candidate.votes / totalVotes) * 100}%` }}
                >
                  {candidate.votes}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResultGraph;

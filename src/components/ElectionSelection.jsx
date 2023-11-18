// ElectionSelection Component
import React from 'react';

import { useSelector,useDispatch } from 'react-redux';
import { setStep } from '../slices/ServicesStepSlice';
import { setName } from '../slices/ServicesStepSlice';

const ElectionSelection = ({setstep}) => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.Steps.Category)
  console.log(category,"this is category");
  const CandidateElections = [
    {
      id: 'government-university',
      name: 'Offocial Govt Elections',
      description: 'Participate in elections related to government and academic institutions.',
    },
    {
      id: 'government-university-1',
      name: 'University Elections',
      description: 'Participate in elections related to universities and academic institutions.',
    },
    {
      id: 'government-college',
      name: 'College Elections',
      description: 'Vote in elections specific to colleges and educational establishments.',
    },
    {
      id: 'government-school',
      name: 'School Elections',
      description: 'Engage in elections focused on schools and educational organizations.',
    },
    {
      id: 'government-society',
      name: 'Society Elections',
      description: 'Take part in elections within societies and community groups.',
    },
    {
      id: 'government-reality-show',
      name: 'Reality Show Elections',
      description: 'Vote for your favorite participants in reality show-based elections.',
    },
  ];
  const SurveyElections = [
    {
      id: 'Survey-Election1',
      name: 'Product Survey',
      description: 'Gather feedback on our latest products and services to help us improve and meet your needs.',
    },
    {
      id: 'Survey-Election2',
      name: 'Rating',
      description: 'Rate your experience with our platform and services. Your feedback is valuable to us!',
    },
    // Add more survey/election objects as needed
  ];
  
  return (
    <div className="my-8 text-center">
      <h2 className="text-2xl font-bold mb-4">Choose Election </h2>
      <div className="flex flex-wrap justify-center space-x-4">
        {category == 'govt' ? CandidateElections.map((election) => (
          <div key={election.id} className="max-w-sm rounded overflow-hidden shadow-lg bg-white bg-gradient-to-b from-blue-300 hover:scale-105 duration-200 transition-all mb-4">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{election.name}</div>
              <p className="text-gray-700 text-base">{election.description}</p>
            </div>
            <div className="px-6 py-4">
              <button
                className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
                onClick={ ()=> {
                  setstep(2)
                   dispatch(setName(election.name))
                 }}
              >
                Select
              </button>
            </div>
          </div>
        )) :SurveyElections.map((election) => (
          <div key={election.id} className="max-w-sm rounded overflow-hidden shadow-lg bg-white bg-gradient-to-b from-blue-300 hover:scale-105 duration-200 transition-all mb-4">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{election.name}</div>
              <p className="text-gray-700 text-base">{election.description}</p>
            </div>
            <div className="px-6 py-4">
              <button
                className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
                onClick={ ()=> {
                  setstep(6)
                   dispatch(setName(election.name))
                 }}
              >
                Select
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-4">
    <button
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                  onClick={ ()=> setstep(0)}
                >
                  Previous
                </button>
                <button
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                  // onClick={ ()=> setstep(0)}
                >
                  Next
                </button>
    </div>
    </div>
  );
};

export default ElectionSelection;

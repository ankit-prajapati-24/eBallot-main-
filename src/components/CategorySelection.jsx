// CategorySelection Component
import React from 'react';
import { UseSelector,useDispatch } from 'react-redux';
import { setCategory } from '../slices/ServicesStepSlice';

const CategorySelection = ({ onSelect,setstep }) => {
  const dispatch = useDispatch(); 
  const categories = [
    {
      id: 'govt',
      name: 'Candidate Category',
      description: 'Explore and participate in government-based elections such as national, state, and local elections.',
    },
    {
      id: 'survey',
      name: 'Survey Category',
      description: 'Participate in various survey-based elections to voice your opinions on different topics and issues.',
    },
  ];

  return (
    <div className="flex w-screen flex-col items-center">
    <div className="my-8 text-center">
      <h2 className="text-2xl font-bold mb-4">Select Category</h2>
      <div className="flex justify-center space-x-4">
        {categories.map((category) => (
          <div key={category.id} className="max-w-sm rounded overflow-hidden shadow-lg  bg-gradient-to-b from-gray-300 hover:scale-105 duration-200 transition-all">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{category.name}</div>
              <p className="text-gray-700 text-base">{category.description}</p>
            </div>
            <div className="px-6 py-4">
              <button
                className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => {
                  dispatch(setCategory(category.id));
                  setstep(1)
                  }}
              >
                Select
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default CategorySelection;

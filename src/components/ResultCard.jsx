// ResultCard.js

import React from 'react';
import { Link } from 'react-router-dom';

const ResultCard = ({ electionName, viewResultLink }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">{electionName}</h2>
      <Link to={viewResultLink} className="bg-blue-500 text-white py-2 px-4 rounded-full inline-block hover:bg-blue-600">
        View Result
      </Link>
    </div>
  );
};
export default ResultCard;

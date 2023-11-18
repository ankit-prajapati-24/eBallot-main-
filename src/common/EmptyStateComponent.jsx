import React from 'react';

const EmptyStateComponent = () => {
  return (
    <div className="bg-gray-200 p-8 rounded-md text-center w-full h-screen w-screen  flex justify-center items-center">
      <p className="text-gray-600">No data available.</p>
    </div>
  );
};

export default EmptyStateComponent;

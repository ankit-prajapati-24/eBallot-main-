import React from 'react';

const OurServices = () => {
  return (
    <section id="services" className="bg-indigo-100 text-gray-800 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <div className="bg-purple-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-200">
            <i className="fa fa-globe text-4xl text-purple-500 mb-4"></i>
            <h3 className="text-xl font-semibold text-gray-800">Online Voting</h3>
            <p className="mt-4 text-gray-700">Vote from anywhere in the world with our online voting platform.</p>
          </div>
          <div className="bg-blue-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-200">
            <i className="fa fa-users text-4xl text-blue-500 mb-4"></i>
            <h3 className="text-xl font-semibold text-gray-800">Community Engagement</h3>
            <p className="mt-4 text-gray-700">Engage with your community through our platform and discuss important issues.</p>
          </div>
          <div className="bg-green-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-200">
            <i className="fa fa-lock text-4xl text-green-500 mb-4"></i>
            <h3 className="text-xl font-semibold text-gray-800">Security</h3>
            <p className="mt-4 text-gray-700">Your votes are secure and confidential with our advanced security measures.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;

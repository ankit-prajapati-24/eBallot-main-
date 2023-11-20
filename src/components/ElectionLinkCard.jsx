import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { apiConnecter } from '../services/apiconnecter';
import { useDispatch } from 'react-redux';
import { setElectionName, setSurveyid } from '../slices/ServicesStepSlice';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ElectionLinkCard = ({ heading, links, colorTheme, Category }) => {
  const [Elections, setElections] = useState([]);
  const [loader, setLoader] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getColorClasses = () => {
    switch (colorTheme) {
      case 'purple':
        return 'bg-gradient-to-b from-red-300';
      case 'blue':
        return 'bg-gradient-to-b from-blue-300';
      case 'green':
        return 'bg-gradient-to-b from-green-300';
      default:
        return '';
    }
  };

  async function getElections() {
    try {
      const apiEndpoint = Category === "govt" ? "https://e-ballot-server.vercel.app/api/v1/services/getElection" : "https://e-ballot-server.vercel.app/api/v1/Survey/GetSurvey";
      console.log(apiEndpoint, heading);

      const response = await apiConnecter("POST", apiEndpoint, { Name: heading, Category: heading });

      // Assuming data is an object and you want to convert it into an array
      const data = response.data;
      const electionsArray = Object.values(data);
      setElections(electionsArray[0]);
      console.log('Converted data to array:', Elections);
      setLoader(false);
    } catch (error) {
      console.error('Error fetching elections:', error);
    }
  }

  useEffect(() => {
    getElections();
  }, [heading, Category]);

  return (
    <div className={`max-w-md mx-auto rounded-xl overflow-hidden h-[250px] w-[400px] shadow-lg transform hover:scale-105 transition duration-300 m-3 ${getColorClasses()}`}>
      <div className="md:flex">
        <div className="p-8 w-full">
          <h2 className="text-2xl text-center font-bold leading-7 text-black sm:text-3xl sm:truncate flex flex-wrap">
            {heading}
          </h2>
          {
            loader ? <div>
              <Skeleton height={30} count={5} baseColor="#D3D3D3" />
            </div> :
              <div className="mt-4">
                <ul className="list-disc list-inside ">
                  {Elections.length === 0 ? <div className='flex items-center justify-center mt-6'> No Elections </div> :
                    Elections.map((election) => (
                      <li key={election._id} className="text-blue  mb-2">
                        {
                          Category === "survey" ?
                            <button className="text-blue-800 hover:underline" onClick={() => {
                               dispatch(setSurveyid(election._id));
                              navigate("/SurveyFeedBack");
                            }}>
                              {election.Name}
                            </button> :
                            <button className="text-blue-800 hover:underline" onClick={() => {
                              dispatch(setElectionName(election.Election_Title));
                              navigate("/CastVote");
                            }}>
                              {election.Election_Title}
                            </button>
                        }
                      </li>
                    ))}
                </ul>
              </div>
          }
        </div>
      </div>
    </div>
  );
};

export default ElectionLinkCard;

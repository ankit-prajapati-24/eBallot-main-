import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo from '../assets/IMG_20230909_193215-removebg-preview-removebg-preview.png'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
import UserDataSlice from '../slices/UserDataSlice';
import OurServices from '../common/OurServices';
import Navbar from './Navbar';
import CandidateCard from './CandidateCard';
import ElectionLinkCard from './ElectionLinkCard';
import Footer from '../common/Footer';
import HomeSlider from './HomeSlider';
import ResultGraph from '../common/ResultGraph';
import SliderComponent from '../common/SliderComponent';
const UserHome = () => {
   const settings = {
    dots: true,
    infinite: true,
    speed: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const userdata = useSelector((state) => state.UserData.userdata);
  console.log(userdata);
  
  const candidatebase = [
    {
      heading: 'Offocial Govt Elections',
    },
    {
      heading: 'University Elections',
    },
    {
      heading: 'Reality Show Elections',
    },
    {
      heading: 'School Elections',
    },
    {
      heading: 'Society Elections',
    },
    {
      heading: 'College Elections',
    },
  ];

  const surveybase = [
    {
      heading: 'Product Survey',
    },
    {
      heading: 'Feedback Collections',
    },
    {
      heading: 'Rating',
    }
  ];
    const userimage = useSelector((state) => state.UserData.Image);
    console.log(userimage);
  useEffect(() => {
    // Add any script-related code or external library initializations here
  }, []);


  return (
    <div className=''>
      {/* Header */}
      <div className="max-w-[1520px] mx-auto  w-screen flex-col items-center">
       
       <Navbar></Navbar>
       <SliderComponent></SliderComponent>
     
   {/* <div>hii</div> */}
  {   
    userdata.accounttype != "Admin" && <div>
    <div className='border bg-sky-100 border-block'>
       <h2 className='text-center font-bold text-4xl '>Candidate Based Elections Links </h2>
      <div className='flex flex-wrap justify-center bg-sky-100 gap-2  max-w-[1540px] rounded-md  shadow-xl p-5 border-black '>
      {candidatebase.map((group, index) => (
        <ElectionLinkCard key={index} heading={group.heading}  Category={"govt"}  colorTheme={"blue"}/>
      ))}
      </div>
    </div>
      <div className='border border-block bg-sky-100'>
       <h2 className='text-center font-bold text-4xl '>Survey Based Elections Links </h2>
      <div className='flex flex-wrap justify-center bg-sky-100 gap-2  max-w-[1540px] rounded-md  shadow-xl p-5 border-black '>
      {surveybase.map((group, index) => (
        <ElectionLinkCard key={index} heading={group.heading} Category={"survey"} colorTheme={"purple"}/>
      ))}
      </div>
    </div>
      </div>
  }
       

         <OurServices></OurServices>
  
  <Footer></Footer>
      </div>
    </div>
  );
};

export default UserHome;

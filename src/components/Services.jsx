// CategorySelection Component
import React from 'react';
import Navbar from './Navbar';
import Footer from '../common/Footer';
import CategorySelection from './CategorySelection';
import ElectionSelection from './ElectionSelection';
import { useState } from 'react';
import ElectionList from './ElectionList';
import CreateElection from './CreateElection';

import { useSelector,useDispatch } from 'react-redux';
import { setStep } from '../slices/ServicesStepSlice';
import ViewCandidates from './ViewCandidates';
import CandidateForm from './CandidateForm';
import CreateSurvey from './Surveycomponents/CreateSurvey';
import Surveylist from './Surveycomponents/Surveylist';

const Services = ({ onSelect }) => {
  
  const userdata = useSelector((state) => state.UserData.userdata);
  const [step,setstep] = useState(0);
   const stepsContainer = [<CategorySelection setstep = {setstep}></CategorySelection>,
                          <ElectionSelection setstep = {setstep} ></ElectionSelection>,
                          <ElectionList setstep = {setstep}  ></ElectionList>, 
                          <CreateElection setstep = {setstep}></CreateElection>,
                          <CandidateForm setstep = {setstep}></CandidateForm> ,
                          <ViewCandidates setstep = {setstep}></ViewCandidates>,
                          <Surveylist  setstep = {setstep}></Surveylist>,
                          <CreateSurvey  setstep = {setstep}></CreateSurvey>
                        ];
    // const step = useSelector((state) => state.Steps.step);
    console.log(step);
  
  return (
    <div className="flex w-screen flex-col items-center">
    <Navbar></Navbar>
    {
      stepsContainer[step]
    }
    <Footer></Footer>
    </div>
  );
};

export default Services;

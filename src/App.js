// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import VerifyOtp from './components/VerifyOtp'
import UserHome from './components/UserHome';
import CategorySelection from './components/CategorySelection';
import Services from './components/Services';
import CastVote from './components/CastVote';
import ResultComponent from './components/ResultComponent.jsx'
import AboutUsPage from './components/AboutUsPage.jsx';
import UserProfile from './components/UserProfile.jsx';
import SurveyFeedBack from './components/Surveycomponents/SurveyFeedBack.jsx';

function App() {
  return (
    <div className=''>
     <Routes>
     <Route path='/' element = {<Home></Home>}></Route>
      <Route path='Home' element = {<Home></Home>}></Route>
      <Route path='login' element = {<Login></Login>}></Route>
      <Route path='Signup' element = {<Signup></Signup>}></Route>
      <Route path='VerifyOtp' element = {<VerifyOtp></VerifyOtp>}></Route>
      <Route path='UserHome' element = {<UserHome></UserHome>}></Route>
      <Route path='CategorySelection' element = {<CategorySelection></CategorySelection>}></Route>
      <Route path='Services' element = {<Services></Services>}></Route>
      <Route path='CastVote' element = {<CastVote></CastVote>}></Route>
      <Route path='Result' element = {<ResultComponent></ResultComponent>}></Route>
      <Route path='about' element = {<AboutUsPage></AboutUsPage>}></Route>
      <Route path='Profile' element = {<UserProfile></UserProfile>}></Route>
      <Route path='SurveyFeedBack' element = {<SurveyFeedBack></SurveyFeedBack>}></Route>
    
      
      
     </Routes>    
    </div>
  );
}

export default App;

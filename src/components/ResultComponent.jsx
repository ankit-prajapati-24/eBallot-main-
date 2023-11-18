import React,{useRef} from 'react'
import ResultGraph from '../common/ResultGraph'
import Navbar from './Navbar'
import LoadingBar from 'react-top-loading-bar'
import Footer from '../common/Footer'

const ResultComponent = () => {
  const ref = useRef();
  return (
    <div>
     <LoadingBar color="red" ref={ref} />
     <Navbar></Navbar>
     <ResultGraph ref={ref}></ResultGraph>
     <Footer></Footer>
    </div>
  )
}

export default ResultComponent

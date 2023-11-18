import React, { useState ,useEffect} from 'react'
import { useSelector } from 'react-redux';
import { apiConnecter } from '../../services/apiconnecter';
import Navbar from '../Navbar';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import Footer from '../../common/Footer';
import ProductCard from './ProductCard';
const SurveyFeedBack = () => {
  const Surveyid = useSelector((state) => state.Steps.Surveyid);
  const [Product,SetProduct] = useState();
  const [loading,seteloading] = useState(true);
  console.log(Surveyid);
  async function fetchProductDetails(){
    try{
       const res = await apiConnecter("POST","http://localhost:4000/api/v1/Survey/GetProduct",{_id:Surveyid});
        // console.log(res.data.product);
        const inputObject = res.data.product;
        // const arrayOfObjects = Object.entries(inputObject).map(([key, value]) => ({ [key]: value }));
        // const electionsArray = Object.values(res.data.product);
        SetProduct(inputObject);
        seteloading(false);
        console.log(Product,"this is product");
    }
    catch(err){
      seteloading(false);
        console.error(err);
    }
  }
  useEffect(() => {
    fetchProductDetails();
  }, [])
  
  return (
    <div className='flex flex-col items-center justify-center container'> 
      <Navbar></Navbar>
    {
        loading? <div className='w-full flex flex-col gap-4'>
              
              <div className="w-full">
              <Skeleton height={70} />
              <Skeleton height={20} />
              <Skeleton height={20} />
              <Skeleton height={20} />
              </div>
              <div className="w-full">
              <Skeleton height={70} />
              <Skeleton height={20} />
              <Skeleton height={20} />
              <Skeleton height={20} />
              </div>
              <div className="w-full">
              <Skeleton height={70} />
              <Skeleton height={20} />
              <Skeleton height={20} />
              <Skeleton height={20} />
              </div>
              <div className="w-full">
              <Skeleton height={70} />
              <Skeleton height={20} />
              <Skeleton height={20} />
              <Skeleton height={20} />
              </div>
              </div>:
      <ProductCard  Data={Product} ></ProductCard>
      }
      <Footer></Footer>
    </div>
  )
}

export default SurveyFeedBack

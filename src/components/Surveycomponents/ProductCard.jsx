import React, { useState } from 'react';
import Slider from 'react-slick';
import { useSelector } from 'react-redux';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { apiConnecter } from '../../services/apiconnecter';
import toast from 'react-hot-toast';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const ProductCard = ({ Data, onLike, onUnlike, onSuggest }) => {
  const [suggestion, setSuggestion] = useState('');
  const [isZoomed, setIsZoomed] = useState(false);
  const [ like , Setlike] = useState();
  const [ unlike , Setunlike] = useState();
  const Surveyid = useSelector((state) => state.Steps.Surveyid);
  const userdata = useSelector((state) => state.UserData.userdata);
  const surveyData = [
    {
      type: 'image',
      url: Data.Image,
      // other properties...
    },
    {
      type: 'video',
      url: Data.Video,
      // other properties...
    },
    ]
    const apiData = {
        _id : Surveyid,
        email:userdata.email,
        Suggetion:suggestion
    }
  const handleLike = async() => {
   try{ 
    const res = await apiConnecter("POST","https://e-ballot-server.vercel.app/v1/Survey/AddLike",apiData);
    toast.success("Product Liked");
   }
   catch(err){
    toast.error("Product Does Not Liked");
    console.log(err);
   }
  };

  const handleUnlike = async() => {
    try{ 
        const res = await apiConnecter("POST","https://e-ballot-server.vercel.app/v1/Survey/AddUnlike",apiData);
        toast.success("Product UnLiked");
       }
       catch(err){
        toast.error("Product Does Not UnLiked");
        console.log(err);
       }
  };

  const handleSuggest = async() => {
    try{ 
        const res = await apiConnecter("POST","https://e-ballot-server.vercel.app/v1/Survey/AddSuggetions",apiData);
        toast.success("Product Suggested");
       }
       catch(err){
        toast.error("Product Does Not Suggested");
        console.log(err);
       }
  };

  const handleToggleZoom = () => {
    setIsZoomed(!isZoomed);
  };
  const CustomNextArrow = (props) => (
    <div
      {...props}
      className="slick-arrow slick-next"
      style={{ right: '60px', zIndex: 1, fontSize: '24px', color: 'black' }}
    >
      Next
    </div>
  );

  const CustomPrevArrow = (props) => (
    <div
      {...props}
      className="slick-arrow slick-prev"
      style={{ left: '10px', zIndex: 1, fontSize: '24px', color: 'black' }}
    >
      Prev
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <div className=" container  mx-auto rounded overflow-hidden  flex-col items-center justify-center shadow-lg mb-4">
      <div className=" bg-gradient-to-b from-sky-500  mx-auto gap-5">
        <Slider {...settings}>
          {surveyData.map((surveyItem, index) => (
            <div key={index} className={`flex mx-auto items-center justify-center object-fit`}>
              {surveyItem.type === 'image' ? (
                <img
                  src={surveyItem.url}
                  alt="Survey Image"
                  className="max-w-[400px] w-[100%] cursor-pointer mx-auto"
                  onClick={handleToggleZoom}
                />
              ) : (
                <video
                  src={surveyItem.url}
                  controls={true}
                  className={`max-w-[400px] w-[100%] h-[400px] cursor-pointer mx-auto ${isZoomed ? 'block' : 'block'}`}
                  onClick={handleToggleZoom}
                />
              )}
            </div>
          ))}
        </Slider>
      </div>
      <div className="p-4 flex items-center justify-center flex-col">
        <div className="flex justify-between items-cente r">
          <div>
            <button
              onClick={handleLike}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
              Like
            </button>
            <button
              onClick={handleUnlike}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Unlike
            </button>
          </div>
          <div>
            {/* Other buttons or elements */}
          </div>
        </div>
        <div className="mt-4">
        <label className="flex-1">
                <p className="mb-1 text-sm leading-[1.375rem] text-gray-700">
                Suggestion
                </p>
        <textarea name="textarea" rows="5" cols="100"
        className='border border-black rounded-md'
        onChange={(e) => setSuggestion(e.target.value)}
        value = {suggestion}
        >Give Your Suggestion</textarea>
        </label>
        </div>
        <div className="mt-4">
          <button
            onClick={handleSuggest}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit Suggestion
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

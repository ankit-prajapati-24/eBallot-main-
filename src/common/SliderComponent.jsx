import Slider from 'react-slick';
import React from 'react';
import img1 from '../assets/Home-PM-addressing-the-Press-meet-with-the-Prime-Minister-of-Greece-Mr-Kyriakos-Mitsotakis-at-Athens-in-Greece-01.jpg';
import img2 from '../assets/Home-PM-participated-in-the-20th-ASEAN-India-Summit-at-Jakarta-in-Indonesia.jpg'
import img3 from '../assets/Homepage-Banner-PMs-remarks-at-G20-Summit-on-‘One-Earth-at-Bharat-Mandapam-in-Pragati-Maidan-New-Delhi-01-scaled.jpg'
const SliderComponent = () => {

  const teamMembers = [
    { photo:"https://www.upsu.com/pageassets/elections/elections-bg.png" },
    {  photo: "https://th.bing.com/th/id/OIP.BqJ_usrkiAmSC0m6j59sswHaEK?w=1068&h=600&rs=1&pid=ImgDetMain" },
    {  photo:"https://www.indiacelebrating.com/wp-content/uploads/vote-today-for-a-better-tomorrow.jpg" },
    {  photo: "https://th.bing.com/th/id/OIP.x8l7SNltVqqufcUBOgXKQAAAAA?w=445&h=251&rs=1&pid=ImgDetMain" },
    {  photo: "https://th.bing.com/th/id/OIP.9j1QafYDv8fG-Wc5_iKzEQHaC0?rs=1&pid=ImgDetMain" },
  ];
  const CustomNextArrow = (props) => (
    <div
      {...props}
      className="slick-arrow slick-next"
      style={{ right: '60px', zIndex: 1, fontSize: '24px', color: '#fff' }}
    >
      Next
    </div>
  );

  const CustomPrevArrow = (props) => (
    <div
      {...props}
      className="slick-arrow slick-prev"
      style={{ left: '10px', zIndex: 1, fontSize: '24px', color: '#fff' }}
    >
      Prev
    </div>
  );
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,          // Enable autoplay
    autoplaySpeed: 2000,     // Set the autoplay speed in milliseconds (adjust as needed)
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    appendDots: (dots) => (
      <div
        style={{
          position: 'absolute',
          bottom: '20px',
          textAlign: 'center',
          width: '100%',
        }}
      >
        <ul style={{ margin: '0' }}> {dots} </ul>
      </div>
    ),
  };
  

  return (
    <div className=' w-[100%] mx-auto mb-3'>
      <Slider {...settings}>
        {teamMembers.map((member, index) => (
          <div key={index} className="p-4 bg-gradient-to-b from-sky-300   text-white  rounded-md shadow-md flex items-center justify-center flex-col ">
            <div className='p-5 flex items-center justify-center flex-col'>
              <img src={member.photo} alt={member.name} className='border-black  overflow-hidden w-[100%] h-[400px] object-contain items-center '></img>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;

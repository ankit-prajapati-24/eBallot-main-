import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Navbar from './Navbar';
import Footer from '../common/Footer';
import ankit from '../assets/2022_02_25_18_48_20.png'
import aryan from '../assets/aryan.jpg'
import chirag from '../assets/chirag.jpg'
import anurag from '../assets/anurag.jpg'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { apiConnecter } from '../services/apiconnecter';
import toast from 'react-hot-toast';
const AboutUsPage = () => {
    const ap = 'https://th.bing.com/th/id/OIP.64kKXJ-ME1VX8HKLS-eohQHaIc?pid=ImgDet&rs=1';
    interface FormData {
        fullName: string;
        email: string;
        message: string;
    }

    // React Hook Form setup
    const { register, handleSubmit, formState: { errors } } = useForm();

    // Handle form submission
    async function onSubmit(data) {
        const toastId = toast.loading("Loading....");
          try{
             const res = await apiConnecter("POST","https://e-ballot-main.vercel.app/api/v1/profile/SendMail",data);
             toast.success(res.data.message);
             toast.dismiss(toastId);
          }
          catch(err){
            toast.dismiss();
            toast.error("Please Try Again Leter");
            console.log(err);
          }
    }
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
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    };
    // Define your team members
    const teamMembers = [
        { name: 'Ankit Prajapat', role: 'Backend Developer', photo: ankit },
        { name: 'Chirag Pujari', role: 'Frontend Developer', photo: chirag },
        { name: 'Aryan Prajapat', role: 'Backend Developer', photo: aryan },
        { name: 'Anurag Soni', role: 'Frontend Developer', photo: anurag },
    ];

    return (
        <div className="max-w-[1520px] mx-auto w-screen">
            <Navbar ></Navbar>
            <h1 className="text-4xl font-extrabold mb-4 text-center text-indigo-700 transform hover:scale-105 transition duration-300 ease-in-out">
                About Us
            </h1>


            {/* Introduction Section */}
            <section className="mb-8 bg-gray-100 rounded-lg p-6 animate-fade-in border  shadow-lg">
                <h2 className="text-4xl font-bold mb-2 text-gray-800">Introduction</h2>
                <p className="text-gray-700 text-md text-lg">
                    Welcome to our platform, where we've reimagined the voting experience to overcome the limitations of traditional offline voting systems. Our mission is to provide a solution that empowers individuals to participate in the democratic process from anywhere around the globe, ensuring accessibility, reliability, and increased voter engagement.
                </p>
            </section>

            {/* Challenges Section */}
            <section className="mb-8 bg-blue-100 rounded-lg p-6 animate-fade-in shadow-lg">
                <h2 className="text-4xl font-bold mb-2 text-gray-800">Challenges in Offline Voting</h2>
                <ul className="list-disc list-inside text-gray-700 text-lg ">
                    <li>
                        <span className="mr-2">&#8226;</span>
                        Result generation in offline voting is a time-consuming process.
                    </li>
                    <li>
                        <span className="mr-2">&#8226;</span>It involves a high amount of human resources, leading to increased costs.</li>
                    <li>
                        <span className="mr-2">&#8226;</span>Absence of a completely reliable system for result generation.</li>
                    <li>
                        <span className="mr-2">&#8226;</span>Difficulty in generating accurate and timely results.</li>
                    <li>
                        <span className="mr-2">&#8226;</span>Low voting percentage due to various constraints.</li>
                </ul>
            </section>

            {/* Solutions Section */}
            <section className="mb-8 bg-green-100 rounded-lg p-6 animate-fade-in shadow-lg">
                <h2 className="text-4xl font-bold mb-2 text-gray-800">Our Solutions</h2>
                <ul className="list-disc list-inside text-gray-700 text-lg">
                    <li className="mb-2 flex items-start">
                        <span className="mr-2">&#8226;</span>
                        <span className="flex-1">Vote Anywhere, Anytime: Our platform allows people to cast their votes conveniently, eliminating geographical constraints and enabling participation from anywhere around the globe.</span>
                    </li>
                    <li className="mb-2 flex items-start">
                        <span className="mr-2">&#8226;</span>
                        <span className="flex-1">Minimal Human Resources: With our online voting system, the need for intensive human resources is significantly reduced, making the process more efficient and cost-effective.</span>
                    </li>
                    <li className="mb-2 flex items-start">
                        <span className="mr-2">&#8226;</span>
                        <span className="flex-1">Reliable System: We are committed to providing a completely reliable voting system. By leveraging advanced technology and security measures, we ensure the integrity and accuracy of the voting process.</span>
                    </li>
                    <li className="flex items-start">
                        <span className="mr-2">&#8226;</span>
                        <span className="flex-1">Increased Voting Percentage: Through user-friendly interfaces and accessible voting options, we aim to increase voter participation, fostering a more inclusive and representative democratic experience.</span>
                    </li>
                </ul>
            </section>

            {/* Development Team Section */}
            <section className="mb-8 bg-gray-400  w-[100%] mx-auto mb-3 rounded-lg p-6 animate-fade-in">
                <h2 className="text-4xl font-bold mb-4 text-gray-700 text-center">Our Team Members</h2>

                {/* Team Slider */}
                <Slider {...settings}>
                    {teamMembers.map((member, index) => (
                        <div key={index} className="p-4 bg-gradient-to-r from-teal-400 to-blue-600  text-white border rounded-md shadow-md flex items-center justify-center flex-col ">
                            <div className='p-5 flex items-center justify-center flex-col'>
                                <img src={member.photo} alt={member.name} className='h-[200px] w-[200px] object-cover border-black border items-center overflow-hidden   rounded-full'></img>
                                <h3 className="text-xl font-bold mb-2 text-gray-700">{member.name}</h3>
                                <p className="text-gray-600">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </section>


            <section className="mb-8 bg-purple-100 rounded-lg p-6 animate-fade-in shadow-lg border">
                <h2 className="text-4xl font-bold mb-4 text-gray-800 text-center">Get in Touch</h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label htmlFor="fullName" className="block text-gray-700 font-bold mb-2">Full Name</label>
                        <input
                            type="text"
                            id="fullName"
                            {...register('fullName', { required: 'This field is required' })}
                            className="border rounded-md p-2 w-full"
                        />
                        {errors.fullName && <p className="text-red-500">{errors.fullName.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            {...register('email', { required: 'This field is required', pattern: { value: /\S+@\S+\.\S+/, message: 'Invalid email address' } })}
                            className="border rounded-md p-2 w-full"
                        />
                        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                        <textarea
                            id="message"
                            {...register('message', { required: 'This field is required' })}
                            className="border rounded-md p-2 w-full h-24 resize-none"
                        />
                        {errors.message && <p className="text-red-500">{errors.message.message}</p>}
                    </div>

                    <button
                        type="submit"
                        className="bg-indigo-700 text-white py-2 px-4 rounded-md hover:bg-indigo-800 transition duration-300"
                    >
                        Submit
                    </button>
                </form>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default AboutUsPage;

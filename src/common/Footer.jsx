import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 flex items-center justify-center">
    <div className="container mx-auto ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
        <div>
          <h3 className="text-2xl font-semibold text-gray-200 self-center text-center">About Us</h3>
          <p className="mt-4 text-gray-400">Welcome to our platform, where we've reimagined the voting experience to overcome the limitations of traditional offline voting systems. Our mission is to provide a solution that empowers individuals to participate in the democratic process from anywhere around the globe, ensuring accessibility, reliability, and increased voter engagement.</p>
        </div>
        <div className="flex items-center justify-center flex-col">
          <h3 className="text-2xl font-semibold text-gray-200">Contact Us</h3>
          <ul className="mt-4">
            <li className="flex items-center text-gray-400 mb-2">
              <i className="fa fa-map-marker mr-2" aria-hidden="true"></i>
              1234 Main Street, Dewas, India
            </li>
            <li className="flex items-center text-gray-400 mb-2">
              <i className="fa fa-phone mr-2" aria-hidden="true"></i>
              +1 (123) 456-7890
            </li>
            <li className="flex items-center text-gray-400">
              <i className="fa fa-envelope mr-2" aria-hidden="true"></i>
              info@eBallot.com
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center flex-col">
          <h3 className="text-2xl font-semibold text-gray-200">Follow Us</h3>
          <div className="mt-4">
            <Link to="#" className="text-blue-600 hover:text-blue-800 mr-4">
              <i className="fa fa-facebook-square text-2xl" aria-hidden="true"></i>
            </Link>
            <Link to="#" className="text-red-400 hover:text-red-500 mr-4">
              <i className="fa fa-twitter fa-lg" aria-hidden="true"></i>
            </Link>
            <Link to="#" className="text-pink-400 hover:text-pink-500 mr-4">
              <i className="fa fa-instagram fa-lg" aria-hidden="true"></i>
            </Link>
            <Link to="#" className="text-green-400 hover:text-green-500 mr-4">
              <i className="fa fa-whatsapp fa-lg" aria-hidden="true"></i>
            </Link>
            {/* Add more social media icons here */}
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-400">
        <p>&copy; 2023 eBallot. All rights reserved.</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer

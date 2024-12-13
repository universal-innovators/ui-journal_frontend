import React from 'react';
import fb from '../images/Facebook.png';
import linkedin from '../images/Linkedin.png';
import twitter from '../images/Twitter.png';
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <div className='bg-logoColor font-roboto p-6 md:p-12 text-white mt-8'>
      <div className='flex flex-col md:flex-row text-sm px-4 md:px-8 justify-between mb-8'>
        {/* Company Links */}
        <div className='flex font-extralight w-full md:w-3/5 justify-between mb-4 md:mb-0'>
          <ul className='gap-2 flex flex-col'>
            <li className='font-bold mb-2'>Company</li>
            <li>
              <NavLink to="/about">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Subscription Section (Optional) */}
        {/* 
        <div className="subscribe w-full md:w-1/4">
          <span className='font-semibold text-white block mb-2'>Subscribe</span>
          <div className='flex items-center w-full bg-white'>
            <input 
              type="email" 
              placeholder='Email address' 
              id='subscribeMail'
              className='flex-grow border-none outline-none px-4 py-2 text-sm placeholder-gray-400 text-black' 
            />
            <button 
              className="bg-blue-500 text-white p-2 h-9" 
              onClick={() => document.getElementById('subscribeMail').value = ""}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" fill="currentColor" className="bi bi-arrow-right h-full" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M10.854 8.354a.5.5 0 0 0 0-.708l-4-4a.5.5 0 1 0-.708.708L9.293 8l-3.647 3.646a.5.5 0 0 0 .708.708l4-4z" />
              </svg>
            </button>
          </div>
          <span className='text-xs w-full'>Subscribe us to receive latest information about journals</span>
        </div>
        */}
      </div>

      <hr className="border-gray-400" />

      <div className="lowerFoot flex flex-col md:flex-row justify-between items-center px-4 md:px-8 mt-8">
        <h1 className='text-2xl md:text-3xl font-serif'>UI-JOURNALS</h1>

        <div className="mt-4 md:mt-0">
          <ul className='flex justify-center md:justify-around gap-4'>
            <li>
              <NavLink to="/terms">
                Terms
              </NavLink>
            </li>
            <li>
              <NavLink to="/privacy">
                Privacy
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="socialLinks mt-4 md:mt-0">
          <ul className='flex justify-center md:justify-start gap-4'>
            <li><a href="#"><img src={fb} alt="Facebook" /></a></li>
            <li><a href="#"><img src={linkedin} alt="LinkedIn" /></a></li>
            <li><a href="#"><img src={twitter} alt="Twitter" /></a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

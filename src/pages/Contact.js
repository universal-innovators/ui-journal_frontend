import React from 'react';
import twitter from "../images/Twitter.png";
import linked from "../images/Linkedin.png";
import fb from "../images/Facebook.png";
import phone from "../images/phone.svg";
import location from "../images/location.svg";
import email from "../images/email.svg";

export default function Contact() {
  return (
    <div className='px-4 md:px-16 lg:px-32 py-8 flex flex-col justify-center items-center'>
      <h1 className='text-center text-2xl md:text-3xl text-logoColor font-bold'>Contact Information</h1>
      <p className='m-auto text-sm text-center text-[#717171] mt-3'>
        Any Questions or Remark? Just Write a Message
      </p>

      {/* <div className="contactContainer flex flex-col lg:flex-row mt-4 gap-6 lg:gap-1 shadow-contactCards rounded-2xl"> */}
      <div className="contactContainer flex flex-col w-2/3 md:w-1/3  mt-4 gap-6 shadow-contactCards rounded-2xl">
        
        {/* Left side - Contact Information */}
        {/* <div className="left relative p-4 bg-logoColor text-white flex flex-col justify-between rounded-2xl lg:basis-1/3"> */}
        <div className="left relative p-4 bg-logoColor text-white flex flex-col justify-between rounded-2xl">
          <h2 className='text-xl md:text-2xl font-roboto font-semibold mt-4'>
            Contact Information
          </h2>

          <div className="contact-info my-8">
            <p className='my-4 flex gap-2 items-center'>
              <img src={phone} alt="Phone" /> +91 91600 77753
            </p>
            <p className='my-4 flex gap-2 items-center'>
              <img src={email} alt="Email" /> uijournals786@gmail.com
            </p>
            <p className='my-4 flex gap-2 items-center'>
              <img src={location} alt="Location" /> Rohini , Delhi
            </p>
          </div>

          <div className="links flex gap-4 mt-auto">
            <a href="#" target='_blank'>
              <img src={twitter} className="w-6 bg-blue-600 rounded-full" alt="Twitter" />
            </a>
            <a href="#" target='_blank'>
              <img src={linked} className="w-6 bg-blue-600 rounded-full" alt="LinkedIn" />
            </a>
            <a href="#" target='_blank'>
              <img src={fb} className="w-6 bg-blue-600 rounded-full" alt="Facebook" />
            </a>
          </div>
        </div>

        {/* Right side - Contact Form */}
        {/* <div className="right p-4 flex flex-wrap justify-between lg:basis-2/3 gap-4 lg:gap-10 text-gray-600">
          
          <div className="flex flex-col w-full md:w-[48%]">
            <label htmlFor="firstName" className='text-gray-600'>First Name</label>
            <input type="text" name="firstName" id="firstName" className='border-gray-600 border-b-2 focus:outline-none focus:border-black py-1' />
          </div>

          <div className="flex flex-col w-full md:w-[48%]">
            <label htmlFor="lastName" className='text-gray-600'>Last Name</label>
            <input type="text" name="lastName" id="lastName" className='border-gray-600 border-b-2 focus:outline-none focus:border-black py-1' />
          </div>

          <div className="flex flex-col w-full md:w-[48%]">
            <label htmlFor="email" className='text-gray-600'>Email</label>
            <input type="email" name="email" id="email" className='border-gray-600 border-b-2 focus:outline-none focus:border-black py-1' />
          </div>

          <div className="flex flex-col w-full md:w-[48%]">
            <label htmlFor="phone" className='text-gray-600'>Phone Number</label>
            <input type="tel" name="phone" id="phone" className='border-gray-600 border-b-2 focus:outline-none focus:border-black py-1' />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="msg" className='text-gray-600'>Message</label>
            <textarea rows={2} name="msg" id="msg" className='border-b-2 border-gray-600 focus:outline-none focus:border-black py-1 resize-none' placeholder='Write Your Message'></textarea>
          </div>

          <button type="submit" className='bg-logoColor px-6 py-2 text-white font-roboto rounded-md mt-6'>
            Send Message
          </button>
        </div> */}

      </div>
    </div>
  );
}

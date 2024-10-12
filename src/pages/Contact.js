import React from 'react'
import twitter from "../images/Twitter.png"
import linked from "../images/Linkedin.png"
import fb from "../images/Facebook.png"
import phone from "../images/phone.svg"
import location from "../images/location.svg"
import email from "../images/email.svg"
export default function Contact() {
  return (
    <div className='px-32 py-8'>
      <h1 className='text-center text-3xl text-logoColor font-bold'>Contact Information</h1>
      <p className='m-auto text-sm text-center text-[#717171] mt-3'> Any Questions or Remark? Just Write a Message</p>
      <div className="contactContainer flex mt-2 gap-1 shadow-contactCards rounded-l-2xl">
        <div className="left relative basis-1/3 p-4 bg-logoColor text-white flex flex-col content-between rounded-2xl">
          <h2 className='text-2xl font-roboto font-semibold mt-4'>Contact Information</h2>
          <div className="contact-info my-12">

            <p className='my-6 flex gap-2'><img src={phone} alt="" />+1012 3456 789</p>
            <p className='my-6 flex gap-2'><img src={email} alt="" />demo@gmail.com</p>
            <p className='my-6 flex gap-2'><img src={location} alt="" />132 Dartmouth Street Boston, Massachusetts 02156 United States</p>
          </div>
          <div className="links flex gap-2">

            <a href="#" target='_blank'><img src={twitter} className="w-6 bg-blue-600 rounded-full" alt="" srcset="" /></a>
            <a href="#" target='_blank'><img src={linked} className="w-6 bg-blue-600 rounded-full" alt="" srcset="" /></a>
            <a href="#" target='_blank'><img src={fb} className="w-6 bg-blue-600 rounded-full" alt="" srcset="" /></a>
          </div>
        </div>
        <div className="right basis-2/3  p-4 flex flex-wrap justify-around text-gray-600 gap-10">

          <div className="flex flex-col w-[40%] focus-within:text-black">
            <label htmlFor="firstName" className='text-gray-600'>First Name</label>
            <input type="text" name="firstName" id="firstName" className='border-gray-600 border-b-2 border-solid focus:outline-none focus:border-black' />
          </div>

          <div className="flex flex-col w-[40%] focus-within:text-black">
            <label htmlFor="lastName" className='text-gray-600'>Last Name</label>
            <input type="text" name="lastName" id="lastName" className='border-gray-600 border-b-2 border-solid focus:outline-none focus:border-black' />
          </div>

          <div className="flex flex-col  w-[40%] focus-within:text-black">
            <label htmlFor="email" className='text-gray-600'>Email</label>
            <input type="email" name="email" id="email" className='border-gray-600 border-b-2 border-solid focus:outline-none focus:border-black' />
          </div>

          <div className="flex flex-col  w-[40%] focus-within:text-black">
            <label htmlFor="phone" className='text-gray-600'>Phone Number</label>
            <input type="tel" name="phone" id="phone" className='border-gray-600 border-b-2 border-solid focus:outline-none focus:border-black' />
          </div>

          <div className="flex flex-col w-[94%] focus-within:text-black">
            <label htmlFor="msg" className='text-gray-600'>Message</label>
            <textarea rows={2} name="msg" id="msg" className='border-b-2 placeholder-bottom border-gray-600 border-solid focus:outline-none focus:border-black resize-none' placeholder='Write Your Message'></textarea>
          </div>
          <button type="submit" className='bg-logoColor px-3 py-2 text-white my-6 font-roboto rounded-md'>Send Message</button>
        </div>


      </div>
    </div>
  )
}

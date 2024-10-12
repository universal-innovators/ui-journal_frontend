import React, { useState } from 'react'
import image from '../images/image.png'
import { NavLink } from 'react-router-dom';
export default function Ijdpn() {
  // console.log("rendered")
  const [visibleSection, setVisibleSection] = useState('scope');
  const [activeItem, setActiveItem] = useState('scope');

  // Function to handle click events
  const handleClick = (section) => {
    setVisibleSection(section);
    setActiveItem(section);
  };

  // Determine visibility for each section
  const scopeDisplay = visibleSection === 'scope' ? 'block' : 'hidden';
  const aimDisplay = visibleSection === 'aim' ? 'block' : 'hidden';
  const topicForPublicationDisplay = visibleSection === 'topicforPublication' ? 'block' : 'hidden';
  const guidelinesDisplay = visibleSection === 'guidelines' ? 'block' : 'hidden';

  // Determine underline style for active list item
  const getActiveClass = (section) => (activeItem === section ? 'underline font-semibold text-logoColor' : 'text-lightLogoColor ');
  return (
    <div className='font-roboto px-32'>
      <h1 className='text-center text-logoColor font-bold text-3xl mt-8'>INTERNATIONAL JOURNAL ON DATA PROCESSING & NETWORKING</h1>
      <div className='w-full m-auto mt-8 rounded-lg mb-16'>
        <img src={image} alt="" srcset="" className='rounded-lg' />
      </div>
      <div className="flex w-full gap-2">
        <div className="basis-1/3 p-4 bg-homeCard rounded-xl">
          <div className="">
            <h1 className='text-center text-logoColor underline text-xl font-semibold mb-4'>Journal Information</h1>
            <h1 className='text-logoColor font-bold'>ISSSN (ONLINE)</h1>
            <h2 className='text-logoColor font-bold'>Editor-in-Chief</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto ut ullam eligendi illum deleniti natus incidunt facilis animi voluptatibus Iste, sunt?</p>
            <p className='my-1 text-logoColor font-bold'>Frequency: Quarterly</p>

            <h2 className='text-logoColor font-bold'>Contact Information:</h2>
            <p>

              <span className='text-xl font-medium'>Dr. Ashish Khanna</span>
              <br />
              <span className='italic'>Department of Computer Science & Engineering,</span>
              <br />
              <span className='text-xl font-medium'>Maharaja Agrasen Institute of Technology,</span>
              <br />
              <span>PSP Area, Plot No-1, Sector-22, Rohini, Delhi, India-110085</span>
              <br />
              <span>Email: <a href="mailto:ashishkhanna@mait.ac.in" className='underline'>ashishkhanna@mait.ac.in</a> </span>
            </p>

            <p className='mt-2'>
              <h2 className='text-logoColor font-bold'>Publisher</h2>
              <p className='mt-2'>
                <span className='font-bold'>UI Journals</span><br />
                <span>Website: abc.com
                </span><br />
                <span>E-mail:  abc@gmail.com
                </span><br />
                <span>Mobile:  xxxxxxxxxx
                </span>
              </p>


            </p>

          </div>
        </div>
        <div className="basis-2/3 p-4">
          <h1 className='text-logoColor text-2xl font-bold'>About</h1>
          <p><em>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, tempore. Eos possimus quo modi eaque nihil quidem fugiat dicta maiores expedita porro tenetur officiis perferendis, excepturi magni cumque dolore rem non inventore minus ipsam! Aut beatae voluptatum, nulla voluptas molestiae laboriosam molestias mollitia commodi illum dolorum tempore distinctio doloribus dolore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit rerum nesciunt, iure labore similique hic, ex minus unde impedit, itaque quod assumenda quisquam animi beatae deleniti esse facilis incidunt ab. Optio tempora laborum repudiandae! Facere, sunt! Repellat soluta aspernatur possimus sapiente suscipit vero, voluptates odit magnam iusto qui quis magni dignissimos corporis, repudiandae doloremque dolores officia dolor quia. Eaque, pariatur exercitationem quod quidem obcaecati laudantium consequuntur dolore ducimus fugiat rerum odit, dolorum quasi mollitia! Quod praesentium molestiae facere numquam adipisci, expedita totam error cum placeat dolorem, mollitia necessitatibus commodi ullam! Repudiandae eius maxime sint optio commodi consectetur iusto rem. Itaque?lorem200
          </em>
          </p>
          <h1 className='text-logoColor font-bold text-2xl'>Publishing Mode and Access Fees</h1>
          <h2 className='text-logoColor font-bold text-xl'>
            Submission Process:
          </h2>
          <p>
            <ul>
              <li className='list-disc ml-4 '>
                <em>

                  There is no article processing fee or submission fee associated with submitting your paper.
                </em>
              </li>
            </ul>
          </p>
          <h2 className='text-logoColor font-bold text-xl'>
            Post Acceptance:
          </h2>
          <p>
            <ul>
              <li className='list-disc ml-4'>
                <em>

                  After the paper is accepted, authors have to choose between two modes: open Access and Subscription.The best paper is selected once the issue is published in the journal's volume.
                </em>
              </li>
            </ul>
          </p>
        </div>
      </div>

      <div className="informations">
        <ul className='text-xl  flex justify-around mt-12 mb-4'>
          <li
            onClick={() => handleClick('scope')}
            className={getActiveClass('scope') + ' cursor-pointer'}
          >
            Scope
          </li>
          <li
            onClick={() => handleClick('aim')}
            className={getActiveClass('aim') + ' cursor-pointer'}
          >
            Aim
          </li>
          <li
            onClick={() => handleClick('topicforPublication')}
            className={getActiveClass('topicforPublication') + ' cursor-pointer'}
          >
            Topic for Publication
          </li>
          <li
            onClick={() => handleClick('guidelines')}
            className={getActiveClass('guidelines') + ' cursor-pointer'}
          >
            Guidelines
          </li>
        </ul>

        <div id='scope' className={`${scopeDisplay} text-sm italic`}>
          This is SCOPE Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro possimus nihil autem? Doloremque earum, voluptate voluptates distinctio autem beatae esse, repudiandae aut placeat sint hic animi harum recusandae necessitatibus voluptatibus?
        </div>
        <div id='aim' className={`${aimDisplay} text-sm italic`}>
          This is AIM Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro possimus nihil autem? Doloremque earum, voluptate voluptates distinctio autem beatae esse, repudiandae aut placeat sint hic animi harum recusandae necessitatibus voluptatibus?
        </div>
        <div id='topicforPublication' className={`${topicForPublicationDisplay} text-sm italic`}>
          This is TOPIC FOR PUBLICATION Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro possimus nihil autem? Doloremque earum, voluptate voluptates distinctio autem beatae esse, repudiandae aut placeat sint hic animi harum recusandae necessitatibus voluptatibus?
        </div>
        <div id='guidelines' className={`${guidelinesDisplay} text-sm italic`}>
          This is GUIDELINES Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro possimus nihil autem? Doloremque earum, voluptate voluptates distinctio autem beatae esse, repudiandae aut placeat sint hic animi harum recusandae necessitatibus voluptatibus?
        </div>
      </div>
      {/* <div className="submitPaperBtn text-center my-16">

      <NavLink to="/upload"><button className='h-full bg-logoColor text-white py-2 px-4 font-semibold'>SUBMIT PAPER</button></NavLink>
      </div> */}
    </div >
  )
}







import React, { useState } from 'react'
import image from '../images/image.png'
import { NavLink, useParams } from 'react-router-dom';
import { journals } from '../assets/journals';
export default function JournalTemplate() {
  const { id } = useParams();
  // console.log("rendered")
  const [visibleSection, setVisibleSection] = useState('scope');
  const [activeItem, setActiveItem] = useState('scope');

  const pageData = journals.find(item => item.Cid === id);
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
      <h1 className='text-center text-logoColor font-bold text-3xl mt-8'>{pageData.name}</h1>
      <div className='w-full m-auto mt-8 rounded-lg mb-16'>
        <img src={pageData.posterImg} alt="" srcset="" className='rounded-lg' />
      </div>
      <div className="flex w-full gap-2">
        <div className="basis-1/3 p-4 bg-homeCard rounded-xl">
          <div className="">
            <h1 className='text-center text-logoColor underline text-xl font-semibold mb-4'>Journal Information</h1>
            <h1 className='text-logoColor font-bold'>{pageData.type}</h1>
            <h2 className='text-logoColor font-bold'>Editor-in-Chief</h2>
            <p>{pageData.editorInChief}</p>
            <p className='my-1 text-logoColor font-bold'>Frequency: {pageData.frequency}</p>

            <h2 className='text-logoColor font-bold'>Contact Information:</h2>
            <p>

              <span className='text-xl font-medium'>{pageData.contactName}</span>
              <br />
              <span className='italic'>{pageData.contactDept}</span>
              <br />
              <span className='text-xl font-medium'>{pageData.contactInstitute}</span>
              <br />
              <span>{pageData.address}</span>
              <br />
              <span>Email: <a href={`mailto:${pageData.contactEmail}`} className='underline'>{pageData.contactEmail}</a> </span>
            </p>

            <p className='mt-2'>
              <h2 className='text-logoColor font-bold'>Publisher</h2>
              <p className='mt-2'>
                <span className='font-bold'>{pageData.publisherName}</span><br />
                <span>Website: {pageData.journalWeb}
                </span><br />
                <span>E-mail:  {pageData.journalEmailL}
                </span><br />
                <span>Mobile:  {pageData.journalMobile}
                </span>
              </p>


            </p>

          </div>
        </div>
        <div className="basis-2/3 p-4">
          <h1 className='text-logoColor text-2xl font-bold'>About</h1>
          <p><em>
            {pageData.about}
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

                  {pageData.submissionProcess}
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

                  {pageData.postAcceptance}
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
          {pageData.scope}
        </div>
        <div id='aim' className={`${aimDisplay} text-sm italic`}>
          {pageData.aim}
        </div>

        <div id='topicforPublication' className={`${topicForPublicationDisplay} text-sm italic`}>
          <p>{pageData.topicOfPublication.text}</p>

          {pageData.topicOfPublication.listItem.map((item, index) => (
            <ul key={index} className="list-disc list-inside ml-6">
              <li className="font-semibold text-gray-800">
                {item}
                <ul className="list-disc list-inside ml-6 mt-2">
                  {pageData.topicOfPublication.subListItem[index].map((subItem, subIndex) => (
                    <li key={subIndex} className="text-gray-600">{subItem}</li>
                  ))}
                </ul>
              </li>
            </ul>
          ))}

          <p>{pageData.topicOfPublication.finalText}</p>
        </div>


        <div id='guidelines' className={`${guidelinesDisplay} text-sm italic`}>
          <p> {pageData.guidelines.heading}</p>
          <div>
            <ul  className="list-disc list-inside ml-6">
              {pageData.guidelines.headings.map((item, index) => (
                <li className="font-semibold text-gray-800">{item}
                  <ul className="list-disc list-inside ml-6 mt-2">
                    {pageData.guidelines.content[index].map((subItem) => (
                      <li  className="text-gray-600">{subItem}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* <div className="submitPaperBtn text-center my-16">

        <NavLink to="/upload"><button className='h-full bg-logoColor text-white py-2 px-4 font-semibold'>SUBMIT PAPER</button></NavLink>
      </div> */}
    </div >
  )
}

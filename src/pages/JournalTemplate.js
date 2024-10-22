import React, { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { journals } from '../assets/journals';

export default function JournalTemplate() {
  const { id } = useParams(); // Get the journal ID from URL params
  const [visibleSection, setVisibleSection] = useState('scope'); // Track the visible section
  const [activeItem, setActiveItem] = useState('scope'); // Track the active item for underline

  // Fetch the journal data based on the journal ID
  const pageData = journals.find(item => item.Cid === id);

  // Function to handle click events and update visible section
  const handleClick = (section) => {
    setVisibleSection(section);
    setActiveItem(section);
  };

  // Determine visibility for each section based on active state
  const scopeDisplay = visibleSection === 'scope' ? 'block' : 'hidden';
  const aimDisplay = visibleSection === 'aim' ? 'block' : 'hidden';
  const topicForPublicationDisplay = visibleSection === 'topicforPublication' ? 'block' : 'hidden';
  const guidelinesDisplay = visibleSection === 'guidelines' ? 'block' : 'hidden';

  // Determine active item styling
  const getActiveClass = (section) => (activeItem === section ? 'underline font-semibold text-logoColor' : 'text-lightLogoColor ');

  return (
    <div className='font-roboto px-4 md:px-16'> {/* Responsive padding for small and medium screens */}
      <h1 className='text-center text-logoColor font-bold text-2xl md:text-3xl mt-8'>{pageData.name}</h1>
      
      {/* Responsive image container */}
      <div className='w-full m-auto mt-8 rounded-lg mb-16'>
        <img src={pageData.posterImg} alt={pageData.name} className='rounded-lg w-full object-cover h-48 md:h-96' />
      </div>

      <div className='flex flex-col md:flex-row w-full gap-4'> {/* Responsive layout: column on small screens, row on medium */}
        <div className='basis-full md:basis-1/3 p-4 bg-homeCard rounded-xl'> {/* Sidebar container */}
          <h1 className='text-center text-logoColor underline text-xl font-semibold mb-4'>Journal Information</h1>
          
          {/* Journal details */}
          <h1 className='text-logoColor font-bold'>{pageData.type}</h1>
          <h2 className='text-logoColor font-bold'>Editor-in-Chief</h2>
          <p>{pageData.editorInChief}</p>
          <p className='my-1 text-logoColor font-bold'>Frequency: {pageData.frequency}</p>
          
          <h2 className='text-logoColor font-bold'>Contact Information:</h2>
          <p>
            <span className='text-xl font-medium'>{pageData.contactName}</span><br />
            <span className='italic'>{pageData.contactDept}</span><br />
            <span className='text-xl font-medium'>{pageData.contactInstitute}</span><br />
            <span>{pageData.address}</span><br />
            <span>Email: <a href={`mailto:${pageData.contactEmail}`} className='underline'>{pageData.contactEmail}</a></span>
          </p>

          <h2 className='text-logoColor font-bold mt-4'>Publisher</h2>
          <p className='mt-2'>
            <span className='font-bold'>{pageData.publisherName}</span><br />
            <span>Website: {pageData.journalWeb}</span><br />
            <span>E-mail: {pageData.journalEmailL}</span><br />
            <span>Mobile: {pageData.journalMobile}</span>
          </p>
        </div>

        {/* Main content area */}
        <div className='basis-full md:basis-2/3 p-4'>
          <h1 className='text-logoColor text-xl md:text-2xl font-bold'>About</h1>
          <p><em>{pageData.about}</em></p>
          
          <h1 className='text-logoColor font-bold text-xl md:text-2xl mt-4'>Publishing Mode and Access Fees</h1>
          
          {/* Submission Process */}
          <h2 className='text-logoColor font-bold text-lg md:text-xl mt-2'>Submission Process:</h2>
          <ul className='list-disc ml-4'>
            <li className='italic'>{pageData.submissionProcess}</li>
          </ul>

          {/* Post Acceptance */}
          <h2 className='text-logoColor font-bold text-lg md:text-xl mt-2'>Post Acceptance:</h2>
          <ul className='list-disc ml-4'>
            <li className='italic'>{pageData.postAcceptance}</li>
          </ul>
        </div>
      </div>

      {/* Section Links (Scope, Aim, etc.) */}
      <div className='informations'>
        <ul className='text-lg md:text-xl flex justify-around mt-8 mb-4'>
          <li onClick={() => handleClick('scope')} className={getActiveClass('scope') + ' cursor-pointer'}>Scope</li>
          <li onClick={() => handleClick('aim')} className={getActiveClass('aim') + ' cursor-pointer'}>Aim</li>
          <li onClick={() => handleClick('topicforPublication')} className={getActiveClass('topicforPublication') + ' cursor-pointer'}>Topic for Publication</li>
          <li onClick={() => handleClick('guidelines')} className={getActiveClass('guidelines') + ' cursor-pointer'}>Guidelines</li>
        </ul>

        {/* Dynamic Content Sections */}
        <div id='scope' className={`${scopeDisplay} text-sm md:text-base italic`}>{pageData.scope}</div>
        <div id='aim' className={`${aimDisplay} text-sm md:text-base italic`}>{pageData.aim}</div>

        {/* Topic for Publication with nested lists */}
        <div id='topicforPublication' className={`${topicForPublicationDisplay} text-sm md:text-base italic`}>
          <p>{pageData.topicOfPublication.text}</p>
          {pageData.topicOfPublication.listItem.map((item, index) => (
            <ul key={index} className='list-disc list-inside ml-6'>
              <li className='font-semibold text-gray-800'>{item}
                <ul className='list-disc list-inside ml-6 mt-2'>
                  {pageData.topicOfPublication.subListItem[index].map((subItem, subIndex) => (
                    <li key={subIndex} className='text-gray-600'>{subItem}</li>
                  ))}
                </ul>
              </li>
            </ul>
          ))}
          <p>{pageData.topicOfPublication.finalText}</p>
        </div>

        {/* Guidelines section */}
        <div id='guidelines' className={`${guidelinesDisplay} text-sm md:text-base italic`}>
          <p>{pageData.guidelines.heading}</p>
          <ul className='list-disc list-inside ml-6'>
            {pageData.guidelines.headings.map((item, index) => (
              <li key={index} className='font-semibold text-gray-800'>{item}
                <ul className='list-disc list-inside ml-6 mt-2'>
                  {pageData.guidelines.content[index].map((subItem, subIndex) => (
                    <li key={subIndex} className='text-gray-600'>{subItem}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Submit Paper Button */}
      {/* <div className='submitPaperBtn text-center my-16'>
        <NavLink to="/upload">
          <button className='h-full bg-logoColor text-white py-2 px-4 font-semibold'>SUBMIT PAPER</button>
        </NavLink>
      </div> */}
    </div>
  );
}

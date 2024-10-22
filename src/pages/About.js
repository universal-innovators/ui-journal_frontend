import React from 'react';

export default function About() {
  return (
    <div className='w-full md:w-4/5 lg:w-2/3 m-auto px-4 md:px-0'>
      <div className="about mt-10 md:mt-16">
        <h1 className='text-center text-logoColor text-2xl md:text-3xl font-bold my-4'>About UI-JOURNALS</h1>
        <p className='font-roboto italic text-sm md:text-base'>
          UI Journals, a key initiative under Universal Innovators Educational Consultants (Ui-Educon), serve as an open-access platform that publishes high-quality, peer-reviewed research across various disciplines. Our journals aim to disseminate innovative scientific information and cutting-edge research that bridges the gap between academia and industry.
        </p>
      </div>

      <div className="objective mt-10 md:mt-16">
        <h1 className='text-center text-logoColor text-2xl md:text-3xl font-bold my-4'>Objective of UI-JOURNALS</h1>
        <p className='font-roboto italic text-sm md:text-base'>
          UI Journals offer researchers, academics, and professionals a platform to publish their findings and contribute to the global knowledge base. With a strong emphasis on quality and integrity, our journals cover various topics, including engineering, technology, science, healthcare, and more.
        </p>
      </div>

      <div className="focusScope mt-10 md:mt-16">
        <h1 className='text-center text-logoColor text-2xl md:text-3xl font-bold my-4'>Focus and Scope</h1>
        <p className='font-roboto italic text-sm md:text-base'>
          The International Journal on Data Processing & Networking (IJDPN) is an interdisciplinary refereed journal that focuses on the latest advancements and innovations in data processing and networking. The journal aims to bridge the gap between theoretical research and practical applications, providing a platform for researchers, professionals, and academics to share cutting-edge developments and trends in data processing, communication networks, and related disciplines.
        </p>
      </div>
    </div>
  );
}

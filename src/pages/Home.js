import React from 'react'
import journals from '../assets/journals'
import Card from '../components/Card'
import Navbar from '../components/Navbars'
import image from '../images/image.png'
export default function Home() {
    return (
        <div className="flex flex-col">
            <div className='w-3/4 m-auto mt-16'>
                <img src={image} alt="" srcset="" />
            </div>
            <p className='w-2/3 m-auto mt-12 text-justify'>
                <span className='text-logoColor text-2xl font-semibold'> UI Journals</span>, a key initiative under Universal Innovators Educational Consultants (Ui-Educon), serve as an open-access platform that publishes high-quality, peer-reviewed research across various disciplines. Our journals aim to disseminate innovative scientific information and cutting-edge research that bridges the gap between academia and industry.
            </p>
            <div className="cardContainer flex w-3/4 m-auto  font-roboto mt-16">

                <div className="cards m-3 p-2 border-2 bg-homeCard rounded-lg shadow-homeCards">
                    <h2 className='text-center text-logoColor text-2xl font-roboto' style={{ fontWeight: 'bolder' }}>What We Offer</h2>
                    <p className='text-center'>UI Journals offer researchers, academics, and professionals a platform to publish their findings and contribute to the global knowledge base. With a strong emphasis on quality and integrity, our journals cover various topics, including engineering, technology, science, healthcare, and more.</p>
                </div>
                <div className="cards m-3 p-2 border-2 bg-homeCard rounded-lg shadow-homeCards">
                    <h2 className='text-center text-logoColor text-2xl font-bold' style={{ fontWeight: 'bolder' }}>Why Publish with Us?</h2>
                    <p className='text-center'>Publishing with UI Journals offers numerous benefits, including a rigorous peer-review process, comprehensive visibility, and accessibility to a global audience. Our commitment to fostering impactful research ensures that your work reaches the right audience and makes a meaningful contribution to your field.</p>
                </div>
                <div className="cards m-3 p-2 border-2 bg-homeCard rounded-lg shadow-homeCards">
                    <h2 className='text-center text-logoColor text-2xl font-bold' style={{ fontWeight: 'bolder' }}>What We Do?</h2>
                    <p className='text-center'>UI Journals offer researchers, academics, and professionals a platform to publish their findings and contribute to the global knowledge base. With a strong emphasis on quality and integrity, our journals cover various topics, including engineering, technology, science, healthcare, and more.</p>
                </div>
            </div>

            <div className="uiC0nferences mt-16">
                <h2 className='text-center text-4xl text-logoColor font-roboto font-bold'>UI- International Conferences</h2>
                <p className='m-auto w-3/4 font-roboto italic font-extralight mt-16'>
                    Universal Innovators is actively organizing prestigious international conferences that bring together leading researchers, professionals, and industry experts worldwide. Our conference series includes:
                    <ul className='list-disc ml-8'>
                        <li>ICICC (International Conference on Innovative Computing and Communication)</li>
                        <li>ICDAM (International Conference on Data Analytics and Management)</li>
                        <li>ICAIN (International Conference on Artificial Intelligence and Networks)</li>
                        <li>ICDPN (International Conference on Data Processing & Networking)</li>
                    </ul>
                    These conferences serve as a global platform for knowledge exchange, showcasing the latest research, innovations, and developments across various fields. Participants can present their work, collaborate with peers, and stay updated on cutting-edge advancements that shape the future of technology and science.
                </p>
            </div>
            <div className="ijdpn w-3/4 m-auto mt-16">
                <h2 className='text-center text-4xl text-logoColor font-roboto font-bold w-2/3 m-auto'>INTERNATIONAL JOURNAL ON DATA PROCESSING & NETWORKING ( IJDPN)</h2>
                <p className='m-auto  font-roboto italic font-extralight mt-16'>
                The International Journal on Data Processing & Networking (IJDPN) is an interdisciplinary refereed journal that focuses on the latest advancements and innovations in data processing and networking. The journal aims to bridge the gap between theoretical research and practical applications, providing a platform for researchers, professionals, and academics to share cutting-edge developments and trends in data processing, communication networks, and related disciplines.
                <br />
                IJDPN aims to contribute to the global knowledge base by publishing high-quality research papers, review articles, and case studies that explore the challenges and opportunities in data processing and networking. The journal seeks to foster collaboration between academia and industry, encouraging the development of innovative solutions that address real-world problems in data management, communication technologies, and network security.
                </p>
            </div>
        </div>
    )
}

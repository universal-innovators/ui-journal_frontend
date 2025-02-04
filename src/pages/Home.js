import React from 'react'
import journals from '../assets/journals'
import Card from '../components/Card'
import Navbar from '../components/Navbars'
import image from '../images/image.png'

export default function Home() {
    return (
        <div className="flex flex-col">
            {/* Image Container */}
            <div className='w-full md:w-3/4 m-auto mt-8 md:mt-16'>
                <img src={image} alt="UI Journals" className='w-full h-auto' />
            </div>

            {/* Description Section */}
            <p className='w-11/12 md:w-2/3 m-auto mt-8 md:mt-12 text-justify text-sm md:text-base'>
                <span className='text-logoColor text-xl md:text-2xl font-semibold'> UI Journals</span>, a key initiative under Universal Innovators Educational Consultants (Ui-Educon), serves as an open-access platform that publishes high-quality, peer-reviewed research across various disciplines. Our journals aim to disseminate innovative scientific information and cutting-edge research that bridges the gap between academia and industry.
            </p>

            {/* Cards Section */}
            <div className="cardContainer w-5/6 flex flex-col md:flex-row md:w-3/4 m-auto font-roboto mt-8 md:mt-16 space-y-4 md:space-y-0 md:space-x-4">

                <div className="cards flex-1 m-3 p-4 border-2 bg-homeCard rounded-lg shadow-homeCards">
                    <h2 className='text-center text-logoColor text-xl md:text-2xl font-roboto' style={{ fontWeight: 'bolder' }}>What We Offer</h2>
                    <p className='text-center text-sm md:text-base'>
                        UI Journals offer researchers, academics, and professionals a platform to publish their findings and contribute to the global knowledge base. With a strong emphasis on quality and integrity, our journals cover various topics, including engineering, technology, science, healthcare, and more.
                    </p>
                </div>

                <div className="cards flex-1 m-3 p-4 border-2 bg-homeCard rounded-lg shadow-homeCards">
                    <h2 className='text-center text-logoColor text-xl md:text-2xl font-bold' style={{ fontWeight: 'bolder' }}>Why Publish with Us?</h2>
                    <p className='text-center text-sm md:text-base'>
                        Publishing with UI Journals offers numerous benefits, including a rigorous peer-review process, comprehensive visibility, and accessibility to a global audience. Our commitment to fostering impactful research ensures that your work reaches the right audience and makes a meaningful contribution to your field.
                    </p>
                </div>

                <div className="cards flex-1 m-3 p-4 border-2 bg-homeCard rounded-lg shadow-homeCards">
                    <h2 className='text-center text-logoColor text-xl md:text-2xl font-bold' style={{ fontWeight: 'bolder' }}>What We Do?</h2>
                    <p className='text-center text-sm md:text-base'>
                        UI Journals offer researchers, academics, and professionals a platform to publish their findings and contribute to the global knowledge base. With a strong emphasis on quality and integrity, our journals cover various topics, including engineering, technology, science, healthcare, and more.
                    </p>
                </div>
            </div>

            {/* Conferences Section */}
            <div className="uiConferences mt-8 md:mt-16">
                <h2 className='text-center text-2xl md:text-4xl text-logoColor font-roboto font-bold'>UI- International Conferences</h2>
                <p className='m-auto w-11/12 md:w-3/4 font-roboto italic font-extralight mt-8 md:mt-16 text-sm md:text-base'>
                    Universal Innovators is actively organizing prestigious international conferences that bring together leading researchers, professionals, and industry experts worldwide. Our conference series includes:
                    <ul className='list-disc ml-4 md:ml-8 mt-4'>
                        <li>ICICC (International Conference on Innovative Computing and Communication)</li>
                        <li>ICDAM (International Conference on Data Analytics and Management)</li>
                        <li>ICAIN (International Conference on Artificial Intelligence and Networks)</li>
                        <li>ICDPN (International Conference on Data Processing & Networking)</li>
                    </ul>
                    These conferences serve as a global platform for knowledge exchange, showcasing the latest research, innovations, and developments across various fields. Participants can present their work, collaborate with peers, and stay updated on cutting-edge advancements that shape the future of technology and science.
                </p>
            </div>

            {/* Journal Section */}
            <div className="ijdpn w-full md:w-3/4 m-auto mt-8 md:mt-16">
                <h2 className='text-center w-11/12 text-2xl md:text-4xl text-logoColor font-roboto font-bold md:w-2/3 m-auto'>UI- International Journals</h2>
                <p className='m-auto w-11/12 md:w-3/4 font-roboto italic font-extralight mt-8 md:mt-16 text-sm md:text-base'>
                    Our Journals includes:
                    <ul className='list-disc ml-4 md:ml-8 mt-4'>
                        <li>IJDPN (International Journal on Data Processing & Networking)</li>
                        <li>IJMDI (International Journal of Management and Data Intelligence)</li>
                        <li>ICC Journal (Innovative Computing and Communication: An International Journal)</li>
                    </ul>                    
                </p>
            </div>
        </div>
    )
}

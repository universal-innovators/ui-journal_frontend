import React from 'react'
import Navbar from './Navbars'
// import Navbar from './Navbars'
import { Outlet } from 'react-router-dom'


const NoFootLayout = () => {
    return (
        <div >
            <Navbar />
            {/* <div className="flex flex-grow"> */}

                <Outlet />
            {/* </div> */}

        </div>
    )
}

export default NoFootLayout

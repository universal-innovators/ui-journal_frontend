import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
// import { useAuth } from '../wrappers/AuthProvider';
// import { handleSignOut } from '../firebaseAuth';
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // const { currentUser } = useAuth();
    // Function to toggle the menu's open/close state
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <nav className='flex justify-between py-3 shadow-nav items-center pl-8 pr-1 sticky top-0 bg-white z-10'>
            <span className='font-serif font-medium text-logoColor text-2xl'>UI-JOURNALS</span>

            <ul className='flex w-3/4 justify-around items-center text-navLinks font-semibold '>
                <li className='hover:underline cursor-pointer'><NavLink to="/" className={({ isActive, isPending }) => isActive ? "underline" : ""}> HOME</NavLink></li>
                <li className='hover:underline cursor-pointer'><NavLink to="/about" className={({ isActive, isPending }) => isActive ? "underline" : ""}> ABOUT</NavLink></li>
                <li className='hover:underline cursor-pointer'><NavLink to="/journals" className={({ isActive, isPending }) => isActive ? "underline" : ""}> JOURNALS</NavLink></li>
                {/* {currentUser? */}

                 {/* <li className='hover:underline cursor-pointer'><NavLink to="/submissions" className={({ isActive, isPending }) => isActive ? "underline" : ""}> MY SUBMISSIONS</NavLink></li>:""} */}


                <li className='hover:underline cursor-pointer'><NavLink to="/contact" className={({ isActive, isPending }) => isActive ? "underline" : ""}> CONTACT</NavLink></li>
                {/* {currentUser ? <li className='hover:underline cursor-pointer text-white py-1 px-6 rounded-3xl bg-logoColor' onClick={handleSignOut}>SignOut</li> : */}
                    {/* <NavLink to='/login' className={({ isActive, isPending }) => isActive ? "underline" : ""}><li className='hover:underline cursor-pointer text-white py-1 px-6 rounded-3xl bg-logoColor'>Login</li></NavLink>} */}
            </ul>

        </nav>
    );
};

export default Navbar;

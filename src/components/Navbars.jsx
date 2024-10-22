import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
// import { useAuth } from '../wrappers/AuthProvider';
// import { handleSignOut } from '../firebaseAuth';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // const { currentUser } = useAuth();

    // Function to toggle the menu's open/close state
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Function to close the menu when any NavLink is clicked (for mobile view)
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className='flex justify-between items-center py-4 px-5 md:px-10 shadow-md sticky top-0 bg-white z-10'>
            <span className='font-serif font-bold text-logoColor text-2xl'>
                <NavLink to="/">UI-JOURNALS</NavLink>
            </span>

            {/* Hamburger Menu Button for Mobile */}
            <div className='md:hidden z-30' onClick={toggleMenu}>
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </div>

            {/* Menu Items */}
            <ul className={`md:flex w-full md:w-3/4 justify-around items-center text-navLinks font-semibold fixed md:static top-0 left-0 md:top-0 md:bg-transparent bg-white h-auto md:h-auto transition-transform duration-300 ease-in-out z-20 ${
                isMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
            } md:flex-row flex flex-col py-5 md:py-0`}>
                <li className='hover:underline cursor-pointer my-4 md:my-0' onClick={closeMenu}>
                    <NavLink to="/" className={({ isActive }) => isActive ? "underline" : ""}> HOME</NavLink>
                </li>
                <li className='hover:underline cursor-pointer my-4 md:my-0' onClick={closeMenu}>
                    <NavLink to="/about" className={({ isActive }) => isActive ? "underline" : ""}> ABOUT</NavLink>
                </li>
                <li className='hover:underline cursor-pointer my-4 md:my-0' onClick={closeMenu}>
                    <NavLink to="/journals" className={({ isActive }) => isActive ? "underline" : ""}> JOURNALS</NavLink>
                </li>
                {/* {currentUser && (
                    <li className='hover:underline cursor-pointer my-4 md:my-0' onClick={closeMenu}>
                        <NavLink to="/submissions" className={({ isActive }) => isActive ? "underline" : ""}> MY SUBMISSIONS</NavLink>
                    </li>
                )} */}
                <li className='hover:underline cursor-pointer my-4 md:my-0' onClick={closeMenu}>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? "underline" : ""}> CONTACT</NavLink>
                </li>
                {/* {currentUser ? (
                    <li className='hover:underline cursor-pointer text-white py-2 px-8 rounded-full bg-logoColor transition-all hover:bg-opacity-80' onClick={() => { handleSignOut(); closeMenu(); }}>
                        Sign Out
                    </li>
                ) : (
                    <NavLink to='/login' className={({ isActive }) => isActive ? "underline" : ""} onClick={closeMenu}>
                        <li className='hover:underline cursor-pointer text-white py-2 px-8 rounded-full bg-logoColor transition-all hover:bg-opacity-80'>
                            Login
                        </li>
                    </NavLink>
                )} */}
            </ul>
        </nav>
    );
};

export default Navbar;

import React, { useState } from 'react';
import { NavLink } from "react-router-dom";


import { FaBars, FaTimes } from 'react-icons/fa';  // Import icons for the menu

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    // Function to toggle the menu's open/close state
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className='flex justify-between items-center py-3 px-4 md:px-8 shadow-nav sticky top-0 bg-white z-10'>
            <span className='font-serif font-medium text-logoColor text-2xl'>
                <NavLink to="/">UI-JOURNALS</NavLink>
            </span>

            {/* Hamburger Menu Button for Mobile */}
            <div className='md:hidden' onClick={toggleMenu}>
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </div>

            {/* Menu Items */}
            <ul className={`md:flex w-full md:w-3/4 justify-around items-center text-navLinks font-semibold absolute md:static bg-white top-16 left-0 md:top-0 md:bg-transparent transition-transform duration-300 ease-in-out ${
                isMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
            }`}>
                <li className='hover:underline cursor-pointer sm:my-1 md:my-auto'>
                    <NavLink to="/" className={({ isActive }) => isActive ? "underline" : ""}> HOME</NavLink>
                </li>
                <li className='hover:underline cursor-pointer sm:my-1 md:my-auto'>
                    <NavLink to="/about" className={({ isActive }) => isActive ? "underline" : ""}> ABOUT</NavLink>
                </li> 
                <li className='hover:underline cursor-pointer sm:my-1 md:my-auto'>
                    <NavLink to="/journals" className={({ isActive }) => isActive ? "underline" : ""}> JOURNALS</NavLink>
                </li>

                <li className='hover:underline cursor-pointer sm:my-1 md:my-auto'>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? "underline" : ""}> CONTACT</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;

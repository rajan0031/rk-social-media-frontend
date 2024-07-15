import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
    const navigate = useNavigate();
    const [isNavOpen, setIsNavOpen] = useState(false);

    const handleLogin = () => {
        navigate("/login");
    }

    const handleSignup = () => {
        navigate("/signup");
    }

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    }

    return (
        <nav className="bg-blue-600 p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-2xl font-bold">
                    PaintPro
                </div>
                <div className="md:hidden" onClick={toggleNav}>
                    {isNavOpen ? <FaTimes className="text-white text-2xl" /> : <FaBars className="text-white text-2xl" />}
                </div>
                <div className={`w-full md:flex md:items-center md:w-auto ${isNavOpen ? '' : 'hidden'}`}>
                    <div className="text-center md:flex md:justify-end">
                        <a href="#" className="block md:inline-block text-white px-4 py-2 md:p-2 hover:text-gray-200 transition">Home</a>
                        <a href="#" className="block md:inline-block text-white px-4 py-2 md:p-2 hover:text-gray-200 transition">About</a>
                        <a onClick={handleLogin} className="block md:inline-block text-white px-4 py-2 md:p-2 cursor-pointer hover:text-gray-200 transition">Login</a>
                        <a onClick={handleSignup} className="block md:inline-block text-white px-4 py-2 md:p-2 cursor-pointer hover:text-gray-200 transition">Signup</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;

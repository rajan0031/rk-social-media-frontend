import React from 'react';
import Nav from '../../components/Nav/Nav';
import { FaPaintBrush, FaPalette, FaUserTie } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import GetQuote from '../../components/GetQuote/GetQuote';
import Reviews from '../../components/Reviews/Reviews';

function Home() {
    const navigate = useNavigate();

    const handleSignup = () => {
        navigate("/signup");
    }

    return (
        <div>
            {/* Navigation Bar */}
            <Nav />
            <GetQuote />
            <Reviews />

            {/* Hero Section */}
            <section className="bg-gray-100 py-20">
                <div className="container mx-auto text-center">
                    <h1 className="text-5xl font-bold text-gray-800 mb-4">Transform Your Space with Our Painting Services</h1>
                    <p className="text-xl text-gray-600 mb-8">Professional painting services for homes and businesses. Get the best quality paints and skilled workers.</p>
                    <button onClick={handleSignup} className="bg-blue-500 text-white py-3 px-8 rounded-full hover:bg-blue-700 transition">Get Started</button>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gray-100 p-8 rounded-lg shadow-lg transform hover:scale-105 transition">
                            <FaPaintBrush className="text-blue-500 text-5xl mb-4 mx-auto" />
                            <h3 className="text-2xl font-bold mb-4">Interior Painting</h3>
                            <p className="text-gray-600">Transform your interiors with our expert painting services. We use high-quality paints to ensure a flawless finish.</p>
                        </div>
                        <div className="bg-gray-100 p-8 rounded-lg shadow-lg transform hover:scale-105 transition">
                            <FaPalette className="text-blue-500 text-5xl mb-4 mx-auto" />
                            <h3 className="text-2xl font-bold mb-4">Exterior Painting</h3>
                            <p className="text-gray-600">Protect and beautify your home's exterior with our professional painting services. Durable and weather-resistant paints.</p>
                        </div>
                        <div className="bg-gray-100 p-8 rounded-lg shadow-lg transform hover:scale-105 transition">
                            <FaUserTie className="text-blue-500 text-5xl mb-4 mx-auto" />
                            <h3 className="text-2xl font-bold mb-4">Contract Workers</h3>
                            <p className="text-gray-600">Hire skilled workers on contract for your painting projects. Experienced professionals who deliver quality work.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-blue-600 py-8">
                <div className="container mx-auto text-center text-white">
                    <p>&copy; 2024 PaintPro. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default Home;

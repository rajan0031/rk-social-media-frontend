// src/components/Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/login")
    }

    const hanldesignup = () => {
        navigate("/signup")
    }


    return (
        <div>
            {/* Navigation Bar */}
            <nav className="bg-blue-500 p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-white text-2xl font-bold">
                        YourLogo
                    </div>
                    <div>
                        <a href="#" className="text-white px-4">Home</a>
                        <a href="#" className="text-white px-4">About</a>
                        <a onClick={handleLogin}
                            className="text-white px-4">login</a>
                        <a onClick={hanldesignup} className="text-white px-4">Signup</a>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="bg-gray-100 py-20">
                <div className="container mx-auto text-center">
                    <h1 className="text-5xl font-bold text-gray-800 mb-4">Welcome to Our Website</h1>
                    <p className="text-xl text-gray-600 mb-8">We provide the best services to help you grow your business.</p>
                    <button className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-700">Get Started</button>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-bold mb-4">Feature One</h3>
                            <p className="text-gray-600">Description of feature one. Highlighting the benefits and advantages of using this feature.</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-bold mb-4">Feature Two</h3>
                            <p className="text-gray-600">Description of feature two. Highlighting the benefits and advantages of using this feature.</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-bold mb-4">Feature Three</h3>
                            <p className="text-gray-600">Description of feature three. Highlighting the benefits and advantages of using this feature.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-blue-500 py-8">
                <div className="container mx-auto text-center text-white">
                    <p>&copy; 2024 Your Company. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default Home;

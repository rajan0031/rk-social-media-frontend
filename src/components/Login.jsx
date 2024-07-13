// src/components/Login.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { loginRoutes } from '../utils/LoginFrontendApi/LoginFrontendApi';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null); // Added error state
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(`Email: ${email}`);
        console.log(`Password: ${password}`);

        try {
            const response = await axios.post(loginRoutes, {
                email: email,
                password: password,
            });

            console.log(response.data.status);
            if (response.data.status)
                navigate('/');
        } catch (err) {
            console.error('Error logging in:', err);
            setError('Invalid email or password'); // Set error message
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                {error && <p className="text-red-500 text-center mb-4">{error}</p>} {/* Display error message */}
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="block text-gray-700">Email:</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-gray-700">Password:</label>
                        <input
                            type="password"
                            id="password"
                            className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <div>
                            {/* Uncomment the following lines if you want to include the "Remember me" checkbox */}
                            {/* <input
                                type="checkbox"
                                id="remember"
                                className="mr-2"
                                checked={remember}
                                onChange={(e) => setRemember(e.target.checked)}
                            />
                            <label htmlFor="remember" className="text-gray-700">Remember me</label> */}
                        </div>
                        <a href="#" className="text-blue-500">Forgot password?</a>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-600"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;

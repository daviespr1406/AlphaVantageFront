import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-6 py-12">
            <div className="text-center">
                <h1 className="text-5xl font-bold text-gray-800 mb-4">Welcome to AlphaVantage</h1>
                <p className="text-lg text-gray-600 mb-8">Browse our actions there.</p>

                <div className="flex flex-col md:flex-row gap-4 justify-center">
                    <Link to="/AlphaVantage" className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-blue-700 transition duration-200">
                        Browse AlphaVantage
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default HomePage;

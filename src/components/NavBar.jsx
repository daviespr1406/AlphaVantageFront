import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="bg-gray-800 text-white p-4 flex gap-4">
            <Link to="/">Home</Link>
            <Link to="/AlphaVantage">AlphaVantage</Link>
        </nav>
    );
};

export default NavBar;


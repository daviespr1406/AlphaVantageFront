import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AlphaVantage from '../pages/AlphaVantage';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/AlphaVantage" element={<AlphaVantage />} />
        </Routes>
    );
};

export default AppRoutes;

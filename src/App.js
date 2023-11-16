import React from 'react';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import Portfolio from './Portfolio';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/portfolio' element={<Portfolio />}/>
                <Route index element={<Navigate to="/portfolio" />} />
            </Routes>
        </BrowserRouter>
    );
}
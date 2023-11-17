import React from 'react';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import Portfolio from './Portfolio';
import Blog from './Blog';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/portfolio' element={<Portfolio />}/>
                <Route path='/blog/*' element={<Blog />}/>
                <Route index element={<Navigate to="/portfolio" />} />
            </Routes>
        </BrowserRouter>
    );
}
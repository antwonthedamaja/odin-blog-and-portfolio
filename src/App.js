import React from 'react';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import Portfolio from './Portfolio';
import BlogRouter from './BlogRouter';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/portfolio' element={<Portfolio />} />
                <Route path='/blog/*' element={<BlogRouter />} />
                <Route path='*' element={<Navigate to='/' />} />
                <Route index element={<Navigate to="/portfolio" />} />
            </Routes>
        </BrowserRouter>
    );
}
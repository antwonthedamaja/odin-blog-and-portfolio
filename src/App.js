import React from 'react';
import { HashRouter, Navigate, Routes, Route } from 'react-router-dom';
import Portfolio from './Portfolio';
import BlogRouter from './BlogRouter';

export default function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path='/portfolio' element={<Portfolio />} />
                <Route path='/blog/*' element={<BlogRouter />} />
                <Route index element={<Navigate to="/portfolio" />} />
            </Routes>
        </HashRouter>
    );
}
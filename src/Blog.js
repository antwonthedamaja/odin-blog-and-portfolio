import React from 'react';
import './style/Blog.css';
import BlogHeader from './components/blog/BlogHeader';
import BlogIndex from './components/blog/BlogIndex';
import { Navigate, Routes, Route } from 'react-router-dom';

export default function Blog() {
    return (
        <>
            <BlogHeader />
            <Routes>
                <Route path='/index' element={<BlogIndex />} />
                <Route path='/' element={<Navigate to='/blog/index' />} />
            </Routes>
        </>
    );
}
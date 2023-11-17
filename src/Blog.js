import React from 'react';
import './style/Blog.css';
import BlogHeader from './components/blog/BlogHeader';
import BlogIndex from './components/blog/BlogIndex';
import { Routes, Route } from 'react-router-dom';

export default function Blog() {
    return (
        <>
            <BlogHeader />
            <Routes>
                <Route path='/blog/index' index element={<BlogIndex />} />
            </Routes>
        </>
    );
}
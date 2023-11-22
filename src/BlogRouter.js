import React from 'react';
import './style/Blog.css';
import BlogHeader from './components/blog/BlogHeader';
import BlogIndex from './components/blog/BlogIndex';
import BlogPost from './components/blog/BlogPost';
import Admin from './components/blog/Admin';
import { Routes, Route } from 'react-router-dom';

export default function Blog() {
    return (
        <>
            <BlogHeader />
            <Routes>
                <Route path='/' element={<BlogIndex />} />
                <Route path='/:id' element={<BlogPost />} />
                <Route path='/admin/*' element={<Admin />} />
            </Routes>
        </>
    );
}
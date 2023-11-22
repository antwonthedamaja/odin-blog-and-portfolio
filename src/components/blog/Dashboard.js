import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Index() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const abortCont = new AbortController();

        (async () => {
            try {
                const response = await fetch('http://localhost:3000/api/', {
                    mode: 'cors',
                    signal: abortCont.signal
                });
                setBlogs(await response.json());
            } catch (err) {
                if (!err.name === 'AbortError') {
                    console.log(err);
                }
            }
        })();

        return () => abortCont.abort();
    }, []);

    return (
        <main className='blog-index'>
            <div className='admin-link-container'>
                <Link to={'./create-post'}>Create post?</Link>
                <Link to={'./log-out'}>Log out?</Link>
            </div>
            <section className='blog-thumbnail-container'>
                {blogs.map(blog => {
                    return <article key={blog._id}>
                        <a href={`blog/${blog._id}`} className='anchor-fix link-wrapper'>
                            <div className='blog-thumbnail-title'>{blog.title}</div>
                            <div>
                                <div className='blog-thumbnail-date'>{new Date(blog.date).toLocaleDateString()}</div>
                                <div className='blog-thumbnail-button'>View post</div>
                            </div>
                        </a>
                    </article>;
                })}
            </section>
        </main>
    );
}
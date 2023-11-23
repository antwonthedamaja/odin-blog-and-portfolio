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
            <section className='blog-hero'>
                <div className='blog-hero-text'>
                    <h1>Lorem ipsum dolor sit amet.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dictum lectus eget lacinia aliquam. 
                        Fusce hendrerit rutrum tellus, sit amet volutpat sapien. Etiam sodales in nibh eget sodales. Integer ac tincidunt tortor. 
                        Phasellus ac neque mi. Suspendisse sit amet lacus et massa euismod finibus. Aenean ultricies magna sit amet erat condimentum semper.</p>
                </div>
            </section>
            <section className='blog-thumbnail-container'>
                {blogs.map(blog => {
                    return <article key={blog._id}>
                        <Link to={`./${blog._id}`} className='anchor-fix blog-thumbnail'>
                            <div className='blog-thumbnail-title'>{blog.title}</div>
                            <div className='blog-thumbnail-bottom'>
                                <div className='blog-thumbnail-date'>{new Date(blog.date).toLocaleDateString()}</div>
                                <div className='blog-thumbnail-button'>View post</div>
                            </div>
                        </Link>
                    </article>;
                })}
            </section>
        </main>
    );
}
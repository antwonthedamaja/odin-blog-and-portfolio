import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Hero from './Hero';

export default function Index({ authed }) {
    const navigate = useNavigate();
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const abortCont = new AbortController();

        const link = authed ? 'http://localhost:3000/api/admin' : 'http://localhost:3000/api/';

        (async () => {
            try {
                const response = await fetch(link, {
                    mode: 'cors',
                    signal: abortCont.signal,
                    credentials: 'include'
                });
                const parsed = await response.json();
                if (parsed.length > 0) {
                    setBlogs(parsed);
                }
            } catch (err) {
                if (!err.name === 'AbortError') {
                    console.log(err);
                }
            }
        })();

        return () => abortCont.abort();
    }, []);

    async function handleLogout(e) {
        e.preventDefault();
        try {
            await fetch('http://localhost:3000/api/logout', {
                mode: 'cors',
                credentials: 'include'
            });
        } catch (err) {
            console.log(err);
        } finally {
            navigate('..', { relative: 'path' });
        }
    }

    return (
        <main className='blog-index'>
            { authed ? <div className='admin-link-container'>
                <Link to={'./create-post'}>Create post?</Link>
                <a onClick={handleLogout} href='./logout'>Log out?</a>
            </div> : <Hero /> }
            <section className='blog-thumbnail-container'>
                {blogs.map(blog => {
                    return <article key={blog._id}>
                        <Link to={`./${blog._id}`} className='anchor-fix blog-thumbnail'>
                            <div className='blog-thumbnail-title'>{blog.title}</div>
                            <div className='blog-thumbnail-bottom'>
                                { authed ? <div>Published: {blog.published ? 'Yes' : 'No'}</div> : null }
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
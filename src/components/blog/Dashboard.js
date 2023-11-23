import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Index() {
    const navigate = useNavigate();
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const abortCont = new AbortController();

        (async () => {
            try {
                const response = await fetch('http://localhost:3000/api/admin', {
                    mode: 'cors',
                    signal: abortCont.signal,
                    credentials: 'include'
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
            <div className='admin-link-container'>
                <Link to={'./create-post'}>Create post?</Link>
                <a onClick={handleLogout} href='./logout'>Log out?</a>
            </div>
            <section className='blog-thumbnail-container'>
                {blogs.map(blog => {
                    return <article key={blog._id}>
                        <Link to={`./${blog._id}`} className='anchor-fix blog-thumbnail'>
                            <div className='blog-thumbnail-title'>{blog.title.length > 90 ? blog.title.slice(0, 90)+ '...' : blog.title}</div>
                            <div className='blog-thumbnail-bottom'>
                                <div>Published: {blog.published ? 'Yes' : 'No'}</div>
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
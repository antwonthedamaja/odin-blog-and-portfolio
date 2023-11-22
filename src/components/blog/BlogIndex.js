import React, { useState, useEffect } from 'react';

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
                    <h1>Don&apos;t let your memes be dreams.</h1>
                    <p>Today&apos;s video is sponsored by Raid Shadow Legends, one of the biggest mobile role-playing games of 2019 and it&apos;s totally free!
                    Currently almost 10 million users have joined Raid over the last six months, 
                    and it&apos;s one of the most impressive games in its class with detailed mo</p>
                </div>
            </section>
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
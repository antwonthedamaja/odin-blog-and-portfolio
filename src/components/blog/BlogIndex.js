import React, { useState, useEffect } from 'react';

export default function Index() {
    const [blogs, setBlogs] = useState();

    useEffect(() => {
        const abortCont = new AbortController();

        (async () => {
            try {
                const response = await fetch('http://localhost:3000/api/', {
                    mode: 'cors',
                    signal: abortCont.signal
                });
                setBlogs(response.json());
            } catch (err) {
                if (!err.name === 'AbortError') {
                    console.log(err);
                }
            }
        })();

        return () => abortCont.abort();
    }, []);

    return (
        <main className='blog blog-main'>
            <section className='blog-hero'>
                <div className='blog-hero-text'>
                    <h1>Don&apos;t let your memes be dreams.</h1>
                    <p>Today&apos;s video is sponsored by Raid Shadow Legends, one of the biggest mobile role-playing games of 2019 and it&apos;s totally free! Currently almost 10 million users have joined Raid over the last six months, and it&apos;s one of the most impressive games in its class with detailed mo</p>
                </div>
            </section>
            <section className='blog-content'>

            </section>
        </main>
    );
}
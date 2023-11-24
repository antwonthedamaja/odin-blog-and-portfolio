import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function BlogPost({ authed }) {
    const [blog, setBlog] = useState();
    const idParams = useParams();

    useEffect(() => {
        const abortCont = new AbortController();

        (async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/blog/${idParams.id}`, {
                    mode: 'cors',
                    signal: abortCont.signal
                });
                setBlog(await response.json());
            } catch (err) {
                if (!err.name === 'AbortError') {
                    console.log(err);
                }
            }
        })();

        return () => abortCont.abort();
    }, []);

    if (blog) {
        return <main className='blog-post-container'>
            <h1>{blog.title}</h1>
            <p>{blog.comment}</p>
        </main>;
    }
}
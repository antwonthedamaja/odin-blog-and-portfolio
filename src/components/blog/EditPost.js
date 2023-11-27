import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function EditPost() {
    const { state } = useLocation();
    const [title, setTitle] = useState(state.title);
    const [blogBody, setBlogBody] = useState(state.blogBody);
    const [published, setPublished] = useState(state.published);
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    async function handleSubmit() {
        try {
            const response = await fetch(`https://top-blog-api.fly.dev/api/blog/${state._id}`, {
                mode: 'cors',
                method: 'put',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title, blogBody, published })
            });
            const parsed = await response.json();
            if (response.status === 200) {
                navigate('..');
            } else if (response.status === 403) {
                navigate(0);
            } else {
                if (parsed.errors?.length > 0) {
                    setErrors(parsed.errors);
                }
            }
        } catch (err) {
            console.log(err);
        }
    }

    async function handleDelete() {
        try {
            await fetch(`https://top-blog-api.fly.dev/api/blog/${state._id}`, {
                mode: 'cors',
                method: 'delete',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            navigate('..');
        } catch (err) {
            console.log(err);
        }
    }
    
    return <main className='blog-post-container'>
        <button type='button' className='delete-button extra-m' onClick={handleDelete}>Delete blog post?</button>
        <label htmlFor='title'>Title:</label>
        <input name='title' id='title' placeholder='Title' type='text' value={title} onChange={e => setTitle(e.target.value)}/>
        <label htmlFor='body'>Body:</label>
        <textarea name='body' id='body' placeholder='Blog body' value={blogBody} onChange={e => setBlogBody(e.target.value)} />
        <label htmlFor='published'>Published?</label>
        <input type='checkbox' id='published' name='published' defaultChecked={published} onClick={() => setPublished(!published)} />
        <button type='button' onClick={handleSubmit}>Submit blog post</button>
        {errors.map(error => {
            return <div key={error.msg} className='error-text'>{error.msg}</div>;
        })}
    </main>;
}
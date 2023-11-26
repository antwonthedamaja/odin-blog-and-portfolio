import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreatePost() {
    const [title, setTitle] = useState('');
    const [blogBody, setBlogBody] = useState('');
    const [published, setPublished] = useState(false);
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();


    async function handleSubmit() {
        try {
            const response = await fetch('http://localhost:3000/api/blog', {
                mode: 'cors',
                method: 'post',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title, blogBody, published })
            });
            const parsed = await response.json();
            if (response.status === 200) {
                navigate(`../${parsed.newBlog._id}`);
            } else {
                if (parsed.errors?.length > 0) {
                    setErrors(parsed.errors);
                }
            }
        } catch (err) {
            console.log(err);
        }
    }
    
    return <main className='blog-post-container'>
        <label htmlFor='title'>Title:</label>
        <input name='title' placeholder='Title' type='text' onChange={e => setTitle(e.target.value)}/>
        <label htmlFor='body'>Body:</label>
        <textarea name='body' placeholder='Blog body' onChange={e => setBlogBody(e.target.value)} />
        <label htmlFor='published'>Published?</label>
        <input type='checkbox' name='published' onClick={() => setPublished(!published)} />
        <button type='button' onClick={handleSubmit}>Submit blog post</button>
        {errors.map(error => {
            return <div key={error.msg} className='error-text'>{error.msg}</div>;
        })}
    </main>;
}
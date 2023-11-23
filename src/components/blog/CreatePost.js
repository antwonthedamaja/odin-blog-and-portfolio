import React, { useState } from 'react';

export default function CreatePost() {
    const [title, setTitle] = useState('');
    const [blogBody, setBlogBody] = useState('');
    const [published, setPublished] = useState(false);
    const [errors, setErrors] = useState([]);
    
    async function handleSubmit() {
        try {
            const response = await fetch('http://localhost:3000/api/blog', {
                mode: 'cors',
                method: 'post',
                credentials: 'include',
                body: JSON.stringify({ title, blogBody, published })
            });
            const parsedResponse = await response.json();
            setErrors(parsedResponse.errors);
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
        <input type='checkbox' name='published' onClick={() => setPublished(!check)} />
        <button type='button' onClick={handleSubmit}>Submit blog post</button>
        {errors.map(error => {
            return <div key={error.msg} className='error-text'>{error.msg}</div>;
        })}
    </main>;
}
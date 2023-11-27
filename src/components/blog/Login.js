import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    async function handleSubmit() {
        try {
            const response = await fetch('https://top-blog-api.fly.dev/api/login', {
                mode: 'cors',
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({ username, password })
            });
            if (response.status === 200) {
                navigate(0);
            } else {
                const errMsg = await response.json();
                setError('*' + errMsg.message);
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <main className='login-container'>
            <div className='login-box'>
                <h1>Sign in to admin dashboard</h1>
                <label htmlFor='username'>Enter Username</label>
                <input type='text' id='username' name='username' placeholder='Username' onChange={e => setUsername(e.target.value)} />
                <label htmlFor='password'>Enter Password</label>
                <input type='password' id='password' name='password' placeholder='Password' onChange={e => setPassword(e.target.value)} />
                <button type='button' onClick={handleSubmit}>Sign in</button>
                <div className='error-text'>{error}</div>
            </div>
        </main>
    );
}
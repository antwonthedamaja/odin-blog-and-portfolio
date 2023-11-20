import React, { useState, useEffect } from 'react';

export default function Login() {
    // const [fetching, setFetching] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // useEffect(() => {
    //     async function handleSubmit() {
    //         try {
    //             const response = await fetch('http://localhost:3000/api/login', {
    //                 mode: 'cors',
    //                 method: 'post',
    //                 body: JSON.stringify({ username, password })
    //             });
    //         } catch (err) {
    //             console.error(err);
    //         } finally {
    //             setFetching(false);
    //         }
    //     }

    //     if (!fetching) {
    //         return;
    //     }

    //     handleSubmit();

    // }, [fetching]);

    async function handleSubmit() {
        try {
            const response = await fetch('http://localhost:3000/api/login', {
                mode: 'cors',
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });
            console.log(response.json());
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <main className='login-container'>
            <div className='login-box'>
                <h1>Sign in to admin dashboard</h1>
                <label htmlFor='username'>Enter Username</label>
                <input type='text' name='username' placeholder='Username' onChange={(e) => setUsername(e.target.value)} />
                <label htmlFor='password'>Enter Password</label>
                <input type='password' name='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                <button type='button' onClick={handleSubmit}>Sign in</button>
            </div>
        </main>
    );
}
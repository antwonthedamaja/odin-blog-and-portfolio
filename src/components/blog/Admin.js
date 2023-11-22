import React, { useEffect, useState } from 'react';
import Login from './Login';
import Dashboard from './Dashboard';
import { Routes, Route, Navigate } from 'react-router-dom';
import CreatePost from './CreatePost';

export default function Admin() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        (async () => {
            try {
                const response = await fetch('http://localhost:3000/api/verify-user', {
                    mode: 'cors',
                    signal: abortCont.signal,
                    credentials: 'include'
                });
                setData(response);
            } catch (err) {
                if (!err.name === 'AbortError') {
                    console.log(err);
                }
            }
        })();

        return () => abortCont.abort();
    }, []);

    if (data?.status === 200) {
        return <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/create-post' element={<CreatePost />} />
        </Routes>;
    } else if (data) {
        return <Login />;
    }
}
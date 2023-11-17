import React from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';

export default function Admin() {


    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />} />
            {document.cookie.match('nonSensitiveCookie') ?
                <Route index element={<Navigate to='./dashboard' />} />
            :
                <Route index element={<Navigate to='./login' />} />
            }
        </Routes>
    );
}
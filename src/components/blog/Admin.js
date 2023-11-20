import React from 'react';
import Login from './Login';
import Dashboard from './Dashboard';

export default function Admin() {
    if (document.cookie.match('nonSensitiveCookie')) {
        return <Dashboard />;
    }
    return <Login />;
}
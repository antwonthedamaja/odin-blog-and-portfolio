import React from 'react';
import { Link } from 'react-router-dom';
import settings from '../../assets/settings.png';

export default function BlogHeader() {
    return (
        <header className='blog blog-header'>
        <strong><Link className='blog blog-logo' to={'/blog'}>Blog</Link></strong>
        <nav className='dropdown'>
            <img src={settings} />
            <div className='dropdown-menu'>
                <Link to={'/portfolio'}>Back to portfolio</Link>
            </div>
        </nav>
    </header>
    );
}
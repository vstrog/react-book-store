import React from 'react';
import './Navbar.scss';
import logo from '../../logo.png';


export default function Navbar() {
        return (
<nav className="navbar">
    <img src={ logo } alt='book-logo' />
        <ul className="nav-links">
                <li className="nav-item">
                        <a href="/" className="nav-link">
                                home
                        </a>
                </li>
                <li className="nav-item">
                        <a href="/" className="nav-link">
                                add book
                        </a>
                </li>
                <li className="nav-item">
                        <a href="/" className="nav-link active">
                                books
                        </a>
                </li>
                <li className="nav-item">
                        <a href="/" className="nav-link">
                                Cart
                        </a>
                </li>
        </ul>
</nav>
        );
}

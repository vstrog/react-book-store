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
                        <i class="fas fa-home"></i>
                                home
                        </a>
                </li>
                <li className="nav-item">
                        <a href="/" className="nav-link">
                        <i class="fas fa-edit"></i>
                                add Book
                        </a>
                </li>
                <li className="nav-item">
                        <a href="/" className="nav-link active">
                        <i class="fas fa-book"></i>
                                books
                        </a>
                </li>
                <li className="nav-item">
                        <a href="/" className="nav-link">
                        <i class="fas fa-shopping-cart"></i>
                                Cart
                        </a>
                </li>
        </ul>
</nav>
        );
}

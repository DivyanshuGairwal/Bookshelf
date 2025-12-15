import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <Link to="/" className="navbar-logo">
                    Bookshelf
                </Link>
                <ul className="navbar-links">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/favorites"
                            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                        >
                            Favorites
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

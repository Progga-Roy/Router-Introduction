import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            {/* <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a> */}
           <Link to="/">Home</Link>
           <Link to="/about">About</Link>
           <Link to="/contact">Contact</Link>
           <Link to="/friends">Friends</Link>
           <Link to="/post">Post</Link>
        </nav>
    );
};

export default Header;
import React from 'react';
import './Header.css'
import { Link, NavLink ,} from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <nav>
           <Link to="/">Home</Link>
           <Link to="/about">About</Link>
            <ActiveLink to="/contact">Contact</ActiveLink>
           <Link to="/friends">Friends</Link>
           <Link to="/post">Post</Link>
           <Link to="*">Not found</Link>
        </nav>
    );
};

export default Header;
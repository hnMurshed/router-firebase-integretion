import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className='navbar container'>
                <span>Router Firebase Integration</span>
                <nav>
                    <Link to='/'>Home</Link>
                    <Link to='/login'>Login</Link>
                </nav>
            </div>
        </div>
    );
};

export default Header;
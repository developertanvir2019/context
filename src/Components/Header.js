import React from 'react';
import { Link } from 'react-router-dom';
import './margin.css'

const Header = () => {
    return (
        <div className='margin'>
            <Link to="/home"> Home</Link>
            <Link to="/about"> About</Link>
        </div>
    );
};

export default Header;
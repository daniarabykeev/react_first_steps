import React from 'react';
import "./Navbar.css";

const Navbar = () => {
    return (
        <div className='nav'>
            <img src="https://www.seekpng.com/png/detail/80-803597_io-is-compatible-with-all-javascript-frameworks-and.png" alt="logo" width={80} />
            Navbar
            <div className='nav__href'>
                <a href="">Gallery</a>
                <a href="">Contact me</a>
                <a href="">About</a>
            </div>
            <div className='nav__input'>
                <input type="text" />
                <button>SEARCH</button>
            </div>
        </div>
    );
};

export default Navbar;
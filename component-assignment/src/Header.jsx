import React from 'react';
import image from './assets/RYZEN.png';

const Header = ({ imageProp, title }) => {
    return (
        <header>
            <img src={imageProp} alt="Logo" />
            <h1>{title}</h1>
        </header>
    );
};

export default Header;
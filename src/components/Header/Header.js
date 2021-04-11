import React from 'react';
import Banner from '../Banner/Banner';
import Infos from '../Infos/Infos';
import NavBar from '../NavBar/NavBar';
import './Header.css';

const Header = () => {
    return (
        <div className="header-container">
            <NavBar />
            <Banner />
            <Infos/>
        </div>
    );
};

export default Header;
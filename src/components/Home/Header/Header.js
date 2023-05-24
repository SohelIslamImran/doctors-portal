import React from 'react';
import NavBar from '../../Shared/NavBar/NavBar';
import Banner from '../Banner/Banner';
import Infos from '../Infos/Infos';
import './Header.css';

const Header = () => {
    return (
        <section className="header-container">
            <NavBar />
            <Banner />
            <Infos />
        </section>
    );
};

export default Header;
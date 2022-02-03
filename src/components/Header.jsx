import React from 'react';
import logo_img from '../logo192.png';
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <img src={logo_img} />
            </div>
        </header>
    );
}

export default Header;

import React from 'react';
import classes from './Sidebar.module.css';
import {NavLink} from "react-router-dom";



const Sidebar = () => {
    // для обработки активной ссылки
    const activeLink = () => {
        return navData => navData.isActive ? classes.activeLink : classes.item
    }

    return (
        <nav className={classes.sidebar}>
            <div className={classes.item}>
                <NavLink to='/profile' className={activeLink()}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/dialogs' className={activeLink()}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/news' className={activeLink()}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/music' className={activeLink()}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/settings' className={activeLink()}>Settings</NavLink>
            </div>
        </nav>
    );
}

export default Sidebar;


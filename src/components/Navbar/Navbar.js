import React from 'react';
import {NavLink} from "react-router-dom";
import css from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={css.nav}>
            <NavLink to={'posts'}>posts</NavLink>
        </div>
    );
};

export default Navbar;
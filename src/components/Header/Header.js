import React from 'react';
import './Header.css'
import {NavLink} from "react-router-dom";
const Header = () => {
    return (
        <div className='hed'>
            <NavLink to={'todos'}>Todos</NavLink>
            <NavLink to={'albums'}>Albums</NavLink>
            <NavLink to={'comments'}>Comments</NavLink>
        </div>
    );
};

export default Header;
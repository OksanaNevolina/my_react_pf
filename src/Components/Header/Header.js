import React, {Component} from 'react';
import "./Header.css"
import {NavLink} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div className='header'>
               <NavLink to={'cars'}>cars</NavLink>
               <NavLink to={'posts'}>posts</NavLink>
               <NavLink to={'comments'}>comments</NavLink>

            </div>
        );
    }
}

export default Header;
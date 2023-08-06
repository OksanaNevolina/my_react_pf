import React, {Component} from 'react';
import Header from "../Components/Header/Header";
import {Outlet} from "react-router-dom";

class MainLayount extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Outlet/>
                
            </div>
        );
    }
}

export default MainLayount;
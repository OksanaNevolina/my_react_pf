import React from 'react';
import {Outlet} from "react-router-dom";
import Header from "../components/Header/Header";

const MainLayount = () => {
    return (
        <div>
            <Header/>
           <Outlet/>
        </div>
    );
};

export default MainLayount;
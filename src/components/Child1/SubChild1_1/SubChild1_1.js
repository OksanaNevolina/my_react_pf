import React, {useContext} from 'react';
import {AppContext} from "../../../App";

const SubChild11 = () => {
    const appContext = useContext(AppContext)
    return (
        <div>
            <h2>SubChild11</h2>
            <h3>{appContext.str}</h3>
            <p>***********--------------**********************++++++++++++</p>
            <p>***********--------------**********************++++++++++++</p>
            <p>***********--------------**********************++++++++++++</p>
        </div>
    );
};

export default SubChild11;
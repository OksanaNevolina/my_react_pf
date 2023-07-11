import React, {useContext} from 'react';
import {AppContext} from "../../../App";

const SubChild22 = () => {
    const appContext = useContext(AppContext)
    return (
        <div>
            <h2>SubChild22</h2>
            <h3>{appContext.str}</h3>

        </div>
    );
};

export default SubChild22;
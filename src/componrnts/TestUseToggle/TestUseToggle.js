import React from 'react';
import {useTogge} from "../../hooks/useTogge";
import  css from './TestUseToggle.module.css'

const TestUseToggle = () => {
    const {value,change} = useTogge(true);
    return (
        <div  className={[css.TestUseToggle,value?css.red:css.blue].join(' ')} >
            <button onClick={change}>{!value?'blue':'red'}</button>
        </div>
    );
};

export default TestUseToggle;
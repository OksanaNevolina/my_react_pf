import React from 'react';
import SubChild11 from "../Child1/SubChild1_1/SubChild1_1";

const Child2 = ({str}) => {
    return (
        <div>
            <SubChild11 str = {str}/>
        </div>
    );
};

export default Child2;
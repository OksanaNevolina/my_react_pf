import React from 'react';
import SubChild22 from "../Child2/SubChild2_2/SubChild2_2";

const Child1 = ({str}) => {
    return (
        <div>
            {<SubChild22  str = {str}/>}
        </div>
    );
};

export default Child1;
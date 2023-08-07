import React, {memo} from 'react';

const TestUseCallBackChaild = memo(({someFun}) => {
    const res = someFun();
    return (
        <div>
            res: {res}
        </div>
    );
})

export default TestUseCallBackChaild;
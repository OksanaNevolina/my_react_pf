import React, {useCallback, useState} from 'react';
import TestUseCallBackChaild from "./TestUseCallBackChaild";

const TestUseCallBack = ({count1}) => {
    const [count2,setCount2]=useState(0)
    const someFun = useCallback(() => {
        let res = 0;
        for (let i = 0; i < 1000000000; i++) {
            res+=count1
        }
        return res

    },[count1])
    return (
        <div>
           <TestUseCallBackChaild someFun={someFun}/>
            <div>count1 {count1}</div>
            <div>count2 {count2}</div>
            <button onClick={()=>setCount2(prevState => ++prevState)}>increment2</button>
        </div>
    );
};

export default TestUseCallBack;
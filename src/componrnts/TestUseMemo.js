import React, {useMemo, useState} from 'react';

const TestUseMemo = ({count1}) => {
    const [count2,setCount2] = useState(0);
    const someFuc = () => {
        let res = 0;
        for (let i = 0; i < 1000000000; i++) {
            res +=count1
        }
        return res
    }
    const res = useMemo(()=> someFuc(),[count1])
    return (
        <div>
            <div>результат {res}</div>
            <div>count1 {count1}</div>
            <div>count2 {count2}</div>
            <button onClick={()=>setCount2(prevState => ++prevState)}>increment2</button>
        </div>
    );
};

export default TestUseMemo;
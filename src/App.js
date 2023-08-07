import React, {useState} from 'react';
import TestUseMemo from "./componrnts/TestUseMemo";
import TestUseCallBack from "./componrnts/TestUseCallBack";
import TestUseToggle from "./componrnts/TestUseToggle/TestUseToggle";

const App = () => {
    const [count1, setCount1] = useState(0);
    return (
        <div>
            {/*<button onClick={()=>setCount1(prevState => ++prevState)}>increment1</button>*/}
            {/*<TestUseMemo count1={count1}/>*/}
            {/*<TestUseCallBack count1={count1}/>*/}
            <TestUseToggle/>
        </div>
    );
};



export default App;
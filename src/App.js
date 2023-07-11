import React, {createContext} from 'react';
import Child1 from "./components/Child1/Child1";
import Child2 from "./components/Child2/Child2";
const str= "З SubChild2_2 передати данні (будь-які) в SubChild1_1"

export const AppContext = createContext(null)
const App = () => {
  return (
      <div>
          <AppContext.Provider value={{str}}>
              <Child1/>
              <Child2/>
          </AppContext.Provider>


      </div>
  );
};

export default App;

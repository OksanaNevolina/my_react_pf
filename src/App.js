import React from 'react';
import Child1 from "./components/Child1/Child1";
import Child2 from "./components/Child2/Child2";

const App = () => {
    const str = 'Хуки — це новинка в React 16.8.' +
    ' Вони дозволяють вам використовувати' +
    ' стан та інші можливості React без написання класу.'
  return (
      <div>
        <Child1 str = {str} />
        <Child2 str = {str} />
      </div>
  );
};

export default App;

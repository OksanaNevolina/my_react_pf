import React, {createContext, useState} from 'react';
import Cars from "./Cars/Cars";
import CarsForm from "./CarsForm/CarsForm";

const Context = createContext(null);
const ConteComponent = () => {
    const {triggor, setTriggor} = useState(null);
    const {carForUpdate, setCarForUpdate} = useState(null);

    return (

            <Context.Provider value={{
                triggor,
                setTriggor: () => setTriggor(prev => !prev),
                carForUpdate,
                setCarForUpdate
            }}>
              <div>
                  <CarsForm/>
                  <br/>
                  <Cars/>
              </div>
        </Context.Provider>
    );

};

export {
    ConteComponent,
    Context
};
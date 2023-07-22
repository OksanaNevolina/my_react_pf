import React, {createContext, useState} from 'react';
import Cars from "./Cars/Cars";
import CarsForm from "./CarsForm/CarsForm";
import './conteComponent.css'

const Context = createContext(null);
const ConteComponent = () => {
    const [trigger, setTrigger] = useState(null);
    const [carForUpdate, setCarForUpdate] = useState(null);

    return (

            <Context.Provider value={{
                trigger,
                setTrigger: () => setTrigger(prev => !prev),
                carForUpdate,
                setCarForUpdate
            }}>
              <div className='cont'>
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
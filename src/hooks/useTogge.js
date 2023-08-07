import {useState} from "react";

const useTogge = (defautValue) => {
const [value,setValue] = useState(defautValue)
    
    const change = () => {
    setValue(prev=>!prev)
      
    }
    return{value,change}
}
export {
    useTogge
}
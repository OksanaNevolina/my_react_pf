import React from 'react';
import Characters from "../componrnts/CharactersContainer/Characters/Characters";
import {useNavigate} from "react-router-dom";

const CharactersPage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <button onClick={()=>navigate(-1)}>Back</button>
           <Characters/>
        </div>
    );
};

export default CharactersPage;
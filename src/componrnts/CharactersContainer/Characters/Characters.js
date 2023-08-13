import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import {characterService} from "../../../services/characterService";
import {charactersAction} from "../../../redux/actions/charactersAction";
import Character from "../Character/Character";

const Characters = () => {
   const dispatch = useDispatch();
   const {characters} = useSelector(state => state.characters);
   const {state:{ids}}= useLocation();

   useEffect(()=>{

       characterService.getByIds(ids).then(({data})=>{
           dispatch(charactersAction.set(data))
       })
   },[ids,dispatch])

    return (
        <div>
            Characters
            {characters.map(charac=> <Character key={charac.id} charac={charac}/>)}
        </div>
    );
};

export default Characters;